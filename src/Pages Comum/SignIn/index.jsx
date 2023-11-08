import { Container } from "./style";
import { Button } from "../../components/Button";
import logoFood from "../../Assets/logofood.svg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { toast } from "react-toastify";


export function SignIn(){
    const navigation = useNavigate()
    const [email, setEmail] = useState("Roberto da pika grossa");
    const [password, setPassword] = useState("");
    const {signIn} = useAuth();

    const [isLoading, setIsLoading] = useState(false)


    function handleSignIn(){
        setIsLoading(true)

        try{
            if(!email || !password){
                return toast.warn("Insira seus dados para fazer login.")
            }
            signIn({email, password})
        }
        catch{
            return toast.error("Não foi possível fazer login")
        }finally{
            setIsLoading(false)
        }
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
                isLoading={isLoading}
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