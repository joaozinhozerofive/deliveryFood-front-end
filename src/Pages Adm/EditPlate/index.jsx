import { Container, Page } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Form } from "./style";
import { TagItem } from "../../components/TagItem";
import { Textarea } from "../../components/Textarea";
import imgUpload from "../../Assets/uploadImg.svg"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { api } from "../../services/api";

import { useEffect, useState } from "react";


import imgButtonBack from "../../Assets/buttonBack.svg"
import { useNavigate, useParams } from "react-router-dom";



export function EditPlate(){
    const navigation = useNavigate()
    
    const [data, setData] =useState({})


    const [imageData, setImageData] = useState("")
    const [nameData, setNameData] = useState("")
    const [categoryData, setCategoryData] = useState("")
    const [descriptionData, setDescriptionData] = useState("")
    const [priceData, setPriceData] = useState("")

    const [ingredientsData, setIngredientsData] = useState([])



    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState({});
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const params = useParams()

    const ingredientsUpdated = (ingredientsData.map(tag  => tag.name ? tag.name : tag))
    console.log()







    useEffect(() =>{
        async function fetchPlate(){
            const response = await api.get(`/plates/${params.plate_id}`)
            setData(response.data)



            setImageData(response.data.plates[0].img)
            setNameData(response.data.plates[0].name)
            setCategoryData(response.data.plates[0].category)
            setDescriptionData(response.data.plates[0].description)
            setPriceData(response.data.plates[0].price)
            setIngredientsData(response.data.tags)

        }

        fetchPlate()

    },[params.plate_id])


    async function HandleEditPlate(){
        const formData = {}
        
        formData.ingredients = ingredientsUpdated

        if(name){
            formData.name = name;
        }

        if(category){
            formData.category = category;
        }

        if(price){
            formData.price = price;
        }

        if(description){
            formData.description = description;
        }

        if(newIngredient) {
            return toast.error(`Clique em "+" para adicionar o ingrediente: ${newIngredient}, ou deixe o campo vázio.`);
          }



    try{
        if(image.length > 0 ){
            const fileUploadForm = new FormData();
            
            fileUploadForm.append("plateImg", image);
            
            await api.patch(`/plates/imgPlates/${params.plate_id}`, fileUploadForm)
           }
         await api.put(`/plates/${params.plate_id}`, formData)

         
            
            toast.success("Prato atualizado com sucesso!")

            setTimeout(() => {
                navigation(-1)
            }, 2000);

    }catch(error) {
        if(error.response){
                return toast.error("Atualize alguma informação para salvar as alterações.")
            }
        }
    }


    async function handleDeletePlate(){

        await api.delete(`/plates/${params.plate_id}`)
        .then(() => {
            toast.success("Prato excluído com sucesso")

            setTimeout(() => {
                navigation("/")
            }, 2000);
        }).catch((error) => {
            if(error.response){
                return toast.error(error.response.data.message)
            }
        })
    }


    function handleRemoveIngredient(deleted) {
        setIngredientsData(prevState => prevState.filter(ingredient => ingredient !== deleted));
      }


     function handleNewIngredient() {
  if (newIngredient.trim() !== "") {
    setIngredientsData((prevState) => {
      const updatedIngredients = [...prevState, newIngredient];
      console.log(updatedIngredients); // Isso deve mostrar a atualização
      return updatedIngredients;
    });
    setNewIngredient("");
  }
}

      async function HandleRemovePlate() {
        try{
            await api.delete(`/plates/${params.plate_id}`)
            .then(() =>{
                toast.success("Prato excluído com sucesso")
            })
        } catch (error){
            if(error.response){
                return toast.error(error.response.data.message)
            }else{
                return toast.error("Erro ao criar prato")
            }
        }

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
            <h1>Editar Prato</h1>

            <Form>
            <div className="selectImg">

                     <p>Imagem do prato</p>

                    <label htmlFor="imgPlate">
    
                    <img src={imgUpload} alt="Imagem de upload " />

                        {image.name ? image.name : imageData}

            <       input 
                    onChange={ e => setImage(e.target.files[0])}
                    id="imgPlate" 
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
                    placeholder={ nameData ? nameData : "Ex.: Salada Ceasar"}/>


                <div className="category">

                    <p>Categoria</p>

                     <select 
                      onChange={ e => setCategory(e.target.value)}
                      id="event-category">

                    <option value={ categoryData ? categoryData : "Padrão"}>{ categoryData ? categoryData : "Padrão"}</option>

                    <option value="Refeição">Refeição</option>

                    <option value="Sobremesa">Sobremesas</option>

                    <option value="Bebidas">Bebidas</option>
                    
                </select>

                </div>

                </div>


                    <div className="ingredients">

                        <p>Ingredientes</p>

                        <div id="ingredients">


                    {ingredientsData && ingredientsData.map((ingredient, index) => (
                        <TagItem 
                        className = "tags"
                        onClick={() =>handleRemoveIngredient(ingredient)}
                        value={ingredient.name ? ingredient.name : ingredient}
                        key={String(index)}
                        placeholder='Adicionar'
                        />))}

                        <TagItem 
                        className = "tags"
                        value={newIngredient}
                        onChange = { e => setNewIngredient(e.target.value)}
                        onClick={() => handleNewIngredient()}
                        isNew
                        placeholder='Adicionar'
                        />

                        </div>


                    <div className="price">

                         <p>Preço</p>

                         <input 
                         onChange={(e) => setPrice(e.target.value)}
                         id="price" 
                         type="text" 
                         placeholder={priceData ? priceData : "0,00"} />

                    </div>
                </div>

                 <div className="description">

                    <p>Descrição</p>

                <Textarea
                onChange = {(e) => setDescription(e.target.value)}
                placeholder = {descriptionData ? descriptionData : "Fale brevemente sobre o prato, seus ingredientes e composição"}
                 />

                </div>

            
             </Form>
            <div className="delete">
            <button
            onClick={() => handleDeletePlate()}
            className="buttonDelete"
            >
                Excluir Prato
            </button>
            <Button
            onClick={() => HandleEditPlate()}
            title={"Salvar alterações"}
             />
             </div>

            </Page>

            <Footer />
            
        </Container>
    )

}