import { Container } from "./style";  

import imgButtonLess from "../../Assets/less.svg"    
import imgButtonMore from "../../Assets/more.svg" 
import favorites from "../../Assets/favorites.svg"
import buttonEdit from "../../Assets/buttonEdit.svg"

import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";



export function Meals ({plates, ...rest}) {
    const navigation = useNavigate();
    const {isAdmin} = useAuth();


     
    function handleDetails(id) {
      navigation(`/plates/${id}`);
  }
    function handleEdit(id) {
      navigation(`/edit/${id}`);
  }

   
   




    return(
        <Container 
        plates = {plates}
        {...rest}>

              {  plates && plates.map(plate => (
             <div key={plate.id} className="mealsActive">
                <img id="favorites"  src={favorites} alt="coração favoritos" />
                <img onClick={() => handleDetails(plate.plate_id)} id="snack" src={`${api.defaults.baseURL}/files/${plate.img}`} alt="imagem do prato " />
                <h1 onClick={() => handleDetails(plate.plate_id)} id="snackName">{`${plate.name} >` }</h1>
                <p>{`${plate.description}`}</p>
                <h2>{`R$ ${plate.price}`}</h2>
                <div className="ingredients">
                
                </div>
                


            </div>))}
            
            
        </Container>
    )
}