import { Container } from "./style";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Menu({...rest}){
    const navigation = useNavigate();
    const {isAdmin, signOut} = useAuth()

    function logOut(){
        signOut()
        navigation("/")

    }
    return(
        <Container>

            {isAdmin === 1 ? 
    <>
    <header>
    <FiX
    onClick={() => navigation(-1)} 
    />
    <h1>Menu</h1>
    </header>
    <main>
    
    <h2
    onClick={() =>navigation("/new")}
    >
        Novo Prato</h2>
    <h2
    onClick={() => logOut()}
    >Sair</h2>
    </main>
    </>
     
    :
<>
    <header>
    <FiX
    onClick={() => navigation("/")} 
    />
    <h1>Menu</h1>
    </header>
    <main>
    <h2
    onClick={() => signOut()}
    >Sair</h2>
    </main>
    </>


        }
            
        </Container>
    )
}