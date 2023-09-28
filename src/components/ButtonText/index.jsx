import { Container } from "./style";

export function ButtonText({title, onClick, img : img,  ...rest}){


    return(

        <Container
        onClick={onClick}
         {...rest}>
            {img}
            {title}

        </Container>
    )
}