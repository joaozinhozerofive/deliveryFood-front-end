import { Container } from "./style";
import { Button } from "../../components/Button";
import logoFood from "../../Assets/logofood.svg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";


export function SignIn(){
    const navigation = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signIn} = useAuth();


    function handleSignIn(){
        signIn({email, password})
    }


     
   
    return(
        <Container>
            
            <div className="logo">
                <img src={logoFood} alt="Imagem da logo" />
                <h1>food explorer</h1>
            </div>

            <form>
                <h1>Faça login</h1>
                <div className="input-wrapper">
                    <p>Email</p>
                    <input
                    onChange={e => setEmail(e.target.value)}
                     type="text" 
                     placeholder="joaodasilva@gmail.com"/>
                </div>
                <div className="input-wrapper">
                    <p>Senha</p>
                    <input 
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                     placeholder="No mínimo 6 caracteres"/>
                </div>
                <Button 
                type = "button"
                onClick={handleSignIn}
                title={"Entrar"}/>
             <button
             onClick={() => navigation("/register")}
             className="signUp"
             >
                 Crie uma conta
             </button>
            </form>


        </Container>
    )
}