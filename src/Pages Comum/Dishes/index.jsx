import { Container, Page } from "./style.js";

import { Footer } from "../../components/Footer/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import imgButtonBack from "../../Assets/buttonBack.svg"
import imgButtonLess from "../../Assets/less.svg"     
import imgButtonMore from "../../Assets/more.svg" 
import { Ingredients } from "../../components/Ingredients/index.jsx";

import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

export function Dishes(){
    const [data, setData] = useState({});
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [count , setCount] = useState(Number(1));

    const {user} = useAuth();

    const isAdmin = user.admin;
    
    const navigation = useNavigate();
    const params = useParams();

    console.log(image)

    function increaseValue(){
        if(count > 19 ){
            return
        }
        setCount(count + 1)
    }


    function decreaseValue(){
        if(count < 1 ){
            return
        }
        setCount(count -1 )

    }

  
  




    useEffect(() =>{
        async function fetchPlate(){
            const response = await api.get(`/plates/${params.plate_id}`)
            setData(response.data)

            const imageUrl =  `${api.defaults.baseURL}/files/${response.data.plates[0].img}`


            setImage(imageUrl)
            setName(response.data.plates[0].name)
            setDescription(response.data.plates[0].description)
            setPrice(response.data.plates[0].price)

        }

        fetchPlate()

    },[params.plate_id])

    return(
        <Container>
            <Header/>
            <div className="buttonBack">
                <img src={imgButtonBack}alt="botão de voltar" />
            <ButtonText 
            onClick={() => navigation(-1)}
            title={"voltar"} 
            />
            </div>

{isAdmin ? 




<Page>
<main>
    <div className="indexSnack">
        <img  id="snack" src={image} alt="Imagem do prato" />

    </div>

    <div className="content">
        
            <h1>{`${name} ` }</h1>
            <p>{`${description}`} </p>

            <div  className="ingredients">
                {data.tags && data.tags.map(tag => 
                <Ingredients 
                        className ='tags'
                        key={tag.id} 
                        title={tag.name}  />

                )}
            </div> 

            <div id="includs">
                <Button
                onClick={() => navigation(`/edit/${params.plate_id}`)}
                className = "editDish" 
                title={"Editar prato"}
            />
            </div>

    </div>
</main>
</Page>  : 
<Page>

<main>

    <div className="indexSnack">
                <img id="snack" src={image} alt="Imagem do prato" />

    </div>

    <div className="content">

                <h1>{`${name} ` }</h1>
                <p>{`${description}`}</p>

            <div  className="ingredients">
                {data.tags && data.tags.map(tag => 
                <Ingredients
                        className ='tags'
                        key={tag.id}
                        title={tag.name}
                />
                )}
            </div> 

            
            <div id="includs">
                <img onClick={decreaseValue} src={imgButtonLess} alt="botao de diminuir" />
                <h3>{count}</h3>
                <img onClick={increaseValue} src={imgButtonMore} alt="botao de incluir"  />
                <Button 
                onClick={() => navigation(-1)}
                title={  `R$ ${price}`}
                />
                
            </div>

    </div>

</main>
</Page>
}
            <Footer/>
        </Container>
    )
}