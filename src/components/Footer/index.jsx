import { Container } from "./style";
import logofooter from "../../Assets/logofooter.svg"


export function Footer({...rest}){

    return(

        <Container
        {...rest}
        >
            <div className="footer">
                <img src={logofooter} alt="Logo footer food explorer " />
                <h1>food explorer</h1>
            </div>

            <p>© 2023 - Todos os direitos reservados.</p>

        </Container> 

    )

}