import { Container } from "./style";
import banners from "../../Assets/banners.svg"
import bannerDesktop from "../../Assets/bannersDesktop.svg"

export function Banners({ ...rest}){
        return(

            <Container {...rest}>
                    <img className="banner-mobile" src={banners} alt="Imagem do Banner" />
                    <img className="banner-desktop" src={bannerDesktop} alt="Imagem do Banner" />

                <div className="writing">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com <br /> ingredientes selecionados</p>
                </div>

            </Container>  
        )

}