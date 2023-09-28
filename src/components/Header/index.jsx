import { Container } from "./style"
import logoFood from "../../Assets/logofood.svg"
import {FiSearch} from "react-icons/fi"
import { InputHeader } from "../InputHeader"
import { Button } from "../Button"
import { FiShoppingCart } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import hamburguer from "../../Assets/hamburguer.svg"


import buttonLogout from "../../Assets/buttonlogout.svg"
import buttonOrder from "../../Assets/buttonOrders.svg"
import { useAuth } from "../../hooks/auth"

export function Header({search}){
    const navigation = useNavigate();
    const {isAdmin} = useAuth();
    const {signOut} = useAuth()

    function logOut(){
        signOut()
        navigation("/")

    }


    return(
        <Container
        search = {search}
        >
            {isAdmin === 0 ? 
             <header>
            <div 
                onClick={() => navigation("/menu")}
                className="hamburguer">
                <img src={hamburguer} alt="hamburguer" />
            </div>
        <div 
        onClick={() => navigation("/")}
        className="logo">
        <img src={logoFood} alt="logoFood" />
        <h1>food explorer</h1>
        </div>

         <p>admin</p>

        <div className="input">
        <InputHeader
        onChange={search}
        onClick={() => navigation("/")}
        type = "text"
        icon={FiSearch}
        placeholder = "Busque por pratos ou ingredientes"
        />
        </div>

        <div className="orders">
        <img 
        src={buttonOrder} alt="Botão de pedidos" />
        <Button
        title={`${"01"}` }
        />
        </div>

        <Button
        className = "cart"
        onClick={() => navigation("/new")}
        title={`Novo prato` }
        />

        <img
        onClick={() => logOut()}
         id="logout" 
         src={buttonLogout} alt="Botão de logout" />
        </header> : 

        <header>

            <div 
            onClick={() => navigation("/menu")}
            className="hamburguer">
                <img src={hamburguer} alt="hamburguer" />
            </div>

        <div onClick={() => navigation("/")}>
        <img src={logoFood} alt="logoFood" />
        <h1>food explorer</h1>
        </div>

        <div className="input">
        <InputHeader
        onChange={search}
        onClick={() => navigation("/")}
        type = "text"
        icon={FiSearch}
        placeholder = "Busque por pratos ou ingredientes"
        />
        </div>

        <div className="requests">
        <img 
        src={buttonOrder} alt="Botão de pedidos" />
        <Button
        title={`${"01"}` }
        />
        </div>

        <Button
        className = "cart"
        icon={FiShoppingCart}
        title={`Carrinho` }
        />

        <img 
        onClick={() => signOut()}
        id="logout" 
        src={buttonLogout} alt="Botão de logout" />
        </header>}
        
        
        </Container>
        
        
    )
}