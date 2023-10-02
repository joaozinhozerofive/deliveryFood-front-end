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

            {isAdmin === 0 ? 

            (plates && plates.map(plate => (
            <div key={String(plate.plate_id)} className="mealsActive">
                <img onClick={() => handleEdit(plate.plate_id)}  id="edit"  src={buttonEdit} alt="coração favoritos" />
                <img  onClick={() => handleDetails(plate.plate_id)} id="snack" src={`${api.defaults.baseURL}/files/${plate.img}`} alt="imagem do prato " />
                <h1 id="snackName">{`${plate.name} >` }</h1>
                <p>{`${plate.description}`}</p>
                <h2>{`R$ ${plate.price}`}</h2>
                
               </div>)))
               :
            

             
                plates && plates.map(plate => (
             <div key={plate.id} className="mealsActive">
                <img id="favorites"  src={favorites} alt="coração favoritos" />
                <img onClick={() => handleDetails(plate.plate_id)} id="snack" src={`${api.defaults.baseURL}/files/${plate.img}`} alt="imagem do prato " />
                <h1 onClick={() => handleDetails(plate.plate_id)} id="snackName">{`${plate.name} >` }</h1>
                <p>{`${plate.description}`}</p>
                <h2>{`R$ ${plate.price}`}</h2>
                <div className="ingredients">
                
                </div>
                <div id="includs">
                    <img src={imgButtonLess} alt="botao de diminuir" />
                    <h3>01</h3>
                    <img src={imgButtonMore} alt="botao de incluir"  />
                    <Button 
                    title={"incluir"}
                    />
                    
                </div>


            </div>))
}
            
            
        </Container>
    )
}