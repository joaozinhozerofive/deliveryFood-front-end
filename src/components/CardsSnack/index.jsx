import { useNavigate } from "react-router-dom";

import { Container } from "./style";
import { Button } from "../Button";
import imgPrato  from "../../Assets/imagem-deliveryfood-prato.png" 
import imgButtonLess from "../../Assets/less.svg"     
import imgButtonMore from "../../Assets/more.svg" 
import favorites from "../../Assets/favorites.svg"


export function CardsSnacks({title, isActive, ...rest}) {
    

    
    
    return(
        <Container
        {...rest}
        isActive={isActive}>

            <div className="mealsActive">
                <img className="buttonBack" src="" alt="" />
                <img id="favorites"  src={favorites} alt="coração favoritos" />
                <img  id="snack" src={imgPrato} alt="imagem do prato " />
                <h1 id="snackName">{`Spaguetti Gambe  ${">"}` }</h1>
                <p>Massa fresca com camarões e pesto.</p>
                <h2>{`R$ ${"79,97"}`}</h2>
                <div id="includs">
                    <img src={imgButtonLess} alt="botao de diminuir" />
                    <h3>01</h3>
                    <img src={imgButtonMore} alt="botao de incluir"  />
                    <Button 
                    type = "button"
                    title={"incluir"}
                    />
                    
                </div>


            </div>

        </Container>
    )
}