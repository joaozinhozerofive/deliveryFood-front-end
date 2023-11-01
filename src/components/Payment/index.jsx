import { Container } from "./style";
import { Button } from "../Button";
import {AiFillCreditCard} from "react-icons/ai"
import {FaPix} from 'react-icons/fa6'
import pix from '../../Assets/pix.svg'
import { useEffect } from "react";

export function Payment({...rest}){

    function selectedPix() {
        const pixElements = document.getElementsByClassName('pix');
        const cardElements = document.getElementsByClassName('card')
        const infoCard = document.getElementsByClassName('infoCard')
        const pixQrCode = document.getElementsByClassName('pixQrCode')


        
        for (let i = 0; i < pixQrCode.length; i++) {
            pixQrCode[i].classList.remove('hidden');
        }
        
        for (let i = 0; i < infoCard.length; i++) {
            infoCard[i].classList.add('hidden');
        }

        for (let i = 0; i < pixElements.length; i++) {
            pixElements[i].classList.toggle('selected');
        }


        for (let i = 0; i < cardElements.length; i++) {
            cardElements[i].classList.remove('selected');
        }
        
    }

    function selectedCard(){
        const cardElements = document.getElementsByClassName('card')
        const pixElements = document.getElementsByClassName('pix');
        const infoCard = document.getElementsByClassName('infoCard')
        const pixQrCode = document.getElementsByClassName('pixQrCode')


        
        for (let i = 0; i < pixQrCode.length; i++) {
            pixQrCode[i].classList.add('hidden');
        }
        for (let i = 0; i < infoCard.length; i++) {
            infoCard[i].classList.remove('hidden');
        }

        for (let i = 0; i < cardElements.length; i++) {
            cardElements[i].classList.toggle('selected');
        }

        
        for (let i = 0; i < pixElements.length; i++) {
            pixElements[i].classList.remove('selected');
        }
        



    }



    


    return(
        <Container
        {...rest}
        >
                <h1>Pagamento</h1>

            <table>
                    <thead>
                        <p onClick={() => selectedPix()} className="pix">
                        <FaPix size={25} />
                            PIX
                        </p>

                        <p onClick={() => selectedCard()} className="card">
                        <AiFillCreditCard size={25}/>
                            Crédito
                        </p>
                    </thead>


                <tbody className="infoCard">
                  <tr>
                   <td>

                    <label htmlFor="cardNumber">
                    <p>Número do cartão</p>
                    <input placeholder="0000 0000 0000 0000" id="cardNumber" maxLength = "16" type="text" />
                    </label>

                   </td>
                   </tr>

                  <div>

                   <td >

                    <label htmlFor="validity">
                    <p>Validade</p>
                    <input placeholder="04/25" id="validity" maxLength = "17" type="month" />
                    </label>

                    <label htmlFor="CVC">
                    <p>CVC</p>
                    <input placeholder="" id="CVC" maxLength = "3" type="text" />
                    </label>

                   </td>

                   </div>
                </tbody>


                <tbody className="pixQrCode hidden">
                    <img id="imgQrCode" src={pix} alt="qr code pix" />
                </tbody>
                <Button
                title={"Finalizar pagamento"} />
            </table>

        </Container>
    )
}