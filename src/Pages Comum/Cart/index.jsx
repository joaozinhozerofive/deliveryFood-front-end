import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import buttonBack from "../../Assets/buttonBack.svg"
import imgPlate from '../../Assets/imagem-deliveryfood-prato.png'
import { useNavigate } from "react-router-dom";
import { Payment } from "../../components/Payment";




export function Cart(){
    const navigation = useNavigate();

    return(
        <Container>

            <Header/>
<main>
    <div>
            <div onClick={() => navigation(-1)} className="buttonBack">
                            <img    src={buttonBack} alt="Botão para voltar para " />
                            <p>Voltar</p>
                        </div>
                        <h1>Meu Pedido</h1>
            <div className="content">
                            <div  className="orders">
                                <img src={imgPlate} alt="" />

                                <div>
                                    <p>{" 2x Spaguetti Gambe"}</p>
                                    <div>
                                    <span>Excluir</span>
                                    <span className="Price">R$37,99</span>
                                    </div>
                                </div>
                            </div>
            </div>

            <p className="total" >TOTAL: R$ 37,99</p> 
    </div>       

            <Payment className = 'Payment'/>
</main>


            <Footer className = 'newFooter'/>
        </Container>
    )
}