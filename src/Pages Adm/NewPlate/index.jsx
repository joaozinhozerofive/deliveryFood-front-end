import { Container, Page } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { TagItem } from "../../components/TagItem";
import { Form } from "./style";
import imgUpload from "../../Assets/uploadImg.svg"




import imgButtonBack from "../../Assets/buttonBack.svg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export function NewPlate(){
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState({});
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
    
    const navigation = useNavigate();


    console.log(image)

    


    async function HandleAddPlate(){
        if(!image) {
            return toast.error("Faça upload da foto do prato");
          } 
      
          if (!name) {
            return toast.error("Nome do prato é obrigatório");
          }

          if(!category){
            return toast.error("Por favor, selecione uma categoria.")
          }
      
          if(ingredients.length < 2 ) {
            return toast.error("Adicione pelo menos dois ingredientes");
          }
      
          if(newIngredient) {
            return toast.error(`Clique em "+" para adicionar o ingrediente: ${newIngredient}, ou deixe o campo vázio.`);
          }
      
          if (!price) {
            return toast.error("Preço do prato é obrigatório");
          }
      
          if (!description) {
            return toast.error("Descrição é obrigatória");
          }

          

        const formData = new FormData();  
        formData.append("plateImg", image);
        formData.append("name", name);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("description", description);

        ingredients.map(ingredient => (
         formData.append("ingredients", ingredient)
    ))

    await api.post("/plates", formData)
      .then( () => {
        toast.success("Prato adicionado com sucesso!");

        setTimeout( () => {
          navigation("/")
        }, 1000)
      })
      .catch((error) => {
        if (error.response) {
          return toast.error(error.response.data.message);
        } else {
          return toast.error("Erro ao criar o prato!");
        }
      })
    }


    function handleNewIngredient() {
        
        
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
      }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
      }

    


    return(
        <Container>
            <Header />
            <Page>
            <div className="buttonBack">
                <img src={imgButtonBack} alt="Imagem de voltar" />
                <ButtonText
                onClick={() => navigation(-1)}
                title={"voltar"}
                 />
            </div> 
            <h1>Adicionar prato</h1>


                <Form
                enctype="multipart/form-data"
                >
                <div className="selectImg">

                        <p>Imagem do prato</p>

                    <label htmlFor="imgPlate">

                        <img src={imgUpload} alt="Imagem de upload " />

                               {image && image.name ? image.name :  "Selecione a imagem"}

                        <input 
                        onChange={ e => setImage(e.target.files[0])}
                        id="imgPlate" 
                        name="plateImg"
                        type="file" 
                        placeholder="Selecione uma imagem"/>

                    </label>
            </div>

                <div className="name">

                    <p>Nome</p>

                    <input 
                    onChange={ e => setName(e.target.value)}
                    id="namePlate"
                    type="text"
                    placeholder="Ex.: Salada Ceasar" />


                <div className="category">

                    <p>Categoria</p>

                     <select 
                      onChange={ e => setCategory(e.target.value)}  
                      id="event-category">

                    <option value="Padrão">Padrão</option>

                    <option value="Refeição">Refeições</option>

                    <option value="Sobremesa">Sobremesas</option>

                    <option value="Bebidas">Bebidas</option>
                </select>

                </div>

                </div>


                    <div className="ingredients">

                        <p>Ingredientes (no mínimo 2).</p>

                        <div id="ingredients">

                    {ingredients && ingredients.map((ingredient, index) => 
                        <TagItem 
                        className = 'tags'
                        key={String(index)}
                        onClick={() =>handleRemoveIngredient(ingredient)}
                        value={ingredient}
                        placeholder='Adicionar'
                        />
                        )}

                        <TagItem 
                         className = 'tags'
                         isNew
                         value={newIngredient}
                         onChange = { e => setNewIngredient(e.target.value)}
                         onClick={() => handleNewIngredient()}
                         placeholder='Adicionar'
                        />


                        </div>


                    <div className="price">

                         <p>Preço</p>

                         <input
                        onChange={ e => setPrice(e.target.value)}
                        id="price"
                        type="text"
                        placeholder="R$ 00,00" />

                    </div>
                </div>

                 <div className="description">

                    <p>Descrição</p>

                <Textarea
                onChange = { e => setDescription(e.target.value)}
                placeholder = "Fale brevemente sobre o prato, seus ingredientes e composição"
                 />

                </div>

            <div className="save">
            <Button
            type = "button"
            onClick={() => HandleAddPlate()}
            className = "save"
            title={"Salvar alterações"}
            
             />
             </div>
             </Form>

            </Page>

            <Footer />
            
        </Container>
    )

}