import { Container } from "./style"
import logoFood from "../../Assets/logofood.svg"
import {FiSearch} from "react-icons/fi"
import { InputHeader } from "../InputHeader"
import { Button } from "../Button"
import { FiShoppingCart } from "react-icons/fi"
import hamburguer from "../../Assets/hamburguer.svg"
import buttonLogout from "../../Assets/buttonlogout.svg"
import buttonOrder from "../../Assets/buttonOrders.svg"
import favorites from "../../Assets/favorites.svg"

import { useNavigate } from "react-router-dom"


import { useAuth } from "../../hooks/auth"
import { useEffect, useState } from "react"
import { UseCart } from "../../hooks/cart"

export function Header({search}){
    const [loading, setLoading] = useState(false)
    const navigation = useNavigate();
    const {user} = useAuth();
    const {signOut} = useAuth()
    const {cartItemsLength} = UseCart();




    
    
    const isAdmin = user.admin;

    function logOut(){
        signOut()
        navigation("/")

    }


    return(
        <Container
        search = {search}
        >
            {isAdmin ? 
             <header>

            <div 
                onClick={() => navigation("/menu")}
                className="hamburguer">
                <img src={hamburguer} alt="hamburguer" />
            </div>
        
        <div className="logo" onClick={() => navigation("/")} >
            <img src={logoFood} alt="logoFood" />
            <div id="admin">
            <h1>food explorer</h1>
            <p>admin</p>
            </div>
        </div>


        <div className="input">
        <InputHeader
        className = "input-header"
        onChange={search}
        type = "text"
        icon={FiSearch}
        placeholder = "Busque por pratos ou ingredientes"
        />
        </div>

        <div className="orders">
        <img 
        src={buttonOrder} alt="Botão de pedidos" />
        <Button
        title={`${"0"}` }
        />
        </div>

        <Button
        isLoading = {loading}
        className = "cart"
        onClick={() => {navigation("/new")}}
        title={`Novo prato` }
        />

        <img
        onClick={() => logOut()}
         id="logout" 
         src={buttonLogout} alt="Botão de logout" />
        </header> 
        
        : 

        <header>

            <div 
            onClick={() => navigation("/menu")}
            className="hamburguer">
                <img src={hamburguer} alt="hamburguer" />
            </div>

            <div className="logo" onClick={() => navigation("/")} >
            <img src={logoFood} alt="logoFood" />
            <div id="admin">
            <h1>food explorer</h1>
            </div>
        </div>


        <div className="input">
        <InputHeader
        className = "input-header"
        onChange={search}
        onClick={() => navigation("/")}
        type = "text"
        icon={FiSearch}
        placeholder = "Busque por pratos ou ingredientes"
        />
        </div>

        <div className="requests">
        <img 
        onClick={() => navigation('/checkout')}
        src={buttonOrder} alt="Botão de pedidos" />
        <Button
        title={`${cartItemsLength || 0}` }
        />
        </div>

        <Button
        onClick={() => navigation('/checkout')}
        className = "cart"
        icon={FiShoppingCart}
        title={`Carrinho ( 0 )` }
        />

        <img className="favorites" onClick={() => navigation("/favorites")} src={favorites} alt="Imagem de coração sinalizando a rota para os favoritos" />

        <img 
        onClick={() => signOut()}
        id="logout" 
        src={buttonLogout} alt="Botão de logout" />
        </header>
        }
        
        
        </Container>
        
        
    )
}
