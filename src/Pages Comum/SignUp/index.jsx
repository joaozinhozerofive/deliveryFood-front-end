import { Container } from "./style";
import { Button } from "../../components/Button";
import logoFood from "../../Assets/logofood.svg"

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {z} from 'zod'


export function SignUp(){
    const navigation = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


     function handleSignUp() {
            setIsLoading(true)

            const emailSchema = z.string().email()

            
           
            try{
            if( !name || !email || !password ){
                return toast.warning("Preencha todos os campos");
            }
            if(password.length < 6){
               return toast.error("Sua senha deve ter no mínimo 6 caracteres")
            }
                 emailSchema.parse(email)
           }catch (error){
               return toast.error("Insira um email válido.")
           }finally{
            setIsLoading(false); 
          }


        api.post("/users", {name, email, password})
        .then(() => {
          toast.success("Cadastro realizado com sucesso!")
          setTimeout( () => {
            navigation("/")
          }, 3000)
        })
        .catch(error => {
          if(error.response){
              toast.error(error.response.data.message);
          }
        }).finally(() => {
            setIsLoading(false); 
          });

       

    }

    return(
        <Container>
            
            <div className="logo">
                <img src={logoFood} alt="Imagem da logo" />
                <h1>food explorer</h1>
            </div>

            <form>
                <h1>Crie sua conta</h1>

                <div className="input-wrapper">
                    <p>Seu nome</p>
                    <input 
                    type="text" 
                    placeholder="Ex: João da Silva"
                    onChange={ (e) => setName(e.target.value)}
                    />
                </div>

                <div className="input-wrapper">
                    <p>Email</p>
                    <input 
                    type="email" 
                    placeholder="joaodasilva@gmail.com"
                    onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>
                
                <div className="input-wrapper">
                    <p>Senha</p>
                    <input 
                    type="password" 
                    placeholder="No mínimo 6 caracteres"
                    onChange={ (e) => setPassword(e.target.value)}
                    />
                </div>
                <Button 
                isLoading={isLoading}
                onClick={handleSignUp}
                type = "button"
                title={"Cadastrar"}/>

             <button
             onClick={() => navigation("/")}
             className="signUp"
             >
                 Já tenho uma conta
             </button>
            </form>


        </Container>
    )
}