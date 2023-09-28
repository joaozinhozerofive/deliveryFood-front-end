import { Container } from "./style";
import banners from "../../Assets/banners.svg"

export function Banners({ ...rest}){
        return(

            <Container {...rest}>
                    <img src={banners} alt="Imagem do Banner" />

                <div className="writing">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>

            </Container>  
        )

}