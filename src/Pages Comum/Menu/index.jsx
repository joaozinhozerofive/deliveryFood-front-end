import { Container } from "./style";
import { FiX } from "react-icons/fi";
import buttonLogout from "../../Assets/buttonlogout.svg"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { InputHeader } from "../../components/InputHeader";

export function Menu({...rest}){
    const navigation = useNavigate();
    const {user, signOut} = useAuth()

    const isAdmin = user.admin;

    function logOut(){
        signOut()
        navigation("/")

    }
    return(
        <Container>


    <header>
    <FiX
    onClick={() => navigation(-1)} 
    />
    <h1>Menu</h1>
    </header>
    <main>
    <h2 className={isAdmin ? "" : "hidden"} onClick={() =>navigation("/new")}>
        Novo prato
     </h2>   
    <h2
    onClick={() => navigation("/favorites")} className={isAdmin ? "hidden" : ""}>
        Favoritos
     </h2>   
    <h2
    onClick={() => navigation("/histórico-de-pedidos")} className={isAdmin ? "hidden" : ""}>
        Histórico de pedidos
     </h2>   

    <h2
    className="logout"
    onClick={() => logOut()}
    >Sair
    <img src={buttonLogout} alt="" />
    </h2>
    </main>
     
        </Container>
    )
}