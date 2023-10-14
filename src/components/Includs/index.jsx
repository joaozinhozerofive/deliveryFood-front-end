import { Container } from "./style";
import { Button } from "../Button";
import imgButtonLess from "../../Assets/less.svg"    
import imgButtonMore from "../../Assets/more.svg" 

export function Includs(){
    return(

        <Container>
    <div id="includs">
                    <div>
                    <img src={imgButtonLess} alt="botao de diminuir" />
                    <h3>01</h3>
                    <img src={imgButtonMore} alt="botao de incluir"  />
                    
                    </div>
                    <Button 
                    title={"incluir"}
                    />
                    
                </div>
            </Container>
    )
}