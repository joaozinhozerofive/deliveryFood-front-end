import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import buttonBack from "../../Assets/buttonBack.svg"
import { useNavigate } from "react-router-dom";
import { Payment } from "../../components/Payment";

import { api } from "../../services/api";

import { useEffect, useState } from "react";
import { UseCart } from "../../hooks/cart";









export function Cart(){
    const navigation = useNavigate();

    const {removePlateToCart} = UseCart();




    const [data, setData] = useState([])
    const [totalPrice, setTotalPrice] = useState("0,00")


    useEffect(() =>{

        function fetchItems(){

            const cartItemsString = localStorage.getItem('@foodExplorer:cart')
            const cartItems = JSON.parse(cartItemsString) || []

            setData(cartItems)
        }
        fetchItems()
    
    }, [] )


    useEffect(() => {

        //total é basicamente o número de posições que tem dentro de um array 
        const NewtotalPrice = data.reduce((total, item )=> {
            const price = item.price;
            const numberFormatted = price.replace(",", ".");
            const subTotalPrice = item.quantity * numberFormatted

            return total  + subTotalPrice 
            /*total + o valor desejado, vai pegar o numero de posições que tem dentro do array
             e multiplicar pelo valor informado acumulado.*/
        }, 0);

        const formattedTotalPrice = NewtotalPrice.toFixed(2).replace(".", ",")

        setTotalPrice(String(formattedTotalPrice))


    }, [data])











    return(
        <Container>

            <Header/>
<main >
    <div>
            <div onClick={() => navigation(-1)} className="buttonBack">
                            <img    src={buttonBack} alt="Botão para voltar para " />
                            <p>Voltar</p>
                        </div>
                        <h1>Meu Pedido</h1>
{data && data.map((item) => (            
            <div key={String(item.plate_id)} className="content">
                            <div  className="orders">
                                <img src={`${api.defaults.baseURL}/files/${item.img}`} alt="Imagem do prato" />

                                <div>
                                    <p>{`${item.quantity}x ${item.name}`}</p>
                                    <div>
                                    <span>Excluir</span>
                                    <span className="Price">R$ {item.price}</span>
                                    </div>
                                </div>
                            </div>
            </div>
            ))}

            <p className="total" >TOTAL: {totalPrice || "00,00"}</p> 
    </div>       

            <Payment className = 'Payment'/>
</main>


            <Footer className = 'newFooter'/>
        </Container>
    )
}