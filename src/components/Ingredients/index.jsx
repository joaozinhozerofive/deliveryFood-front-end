import { Container } from "./style";


export function Ingredients({title, ...rest}){
    return(

        <Container {...rest}>
            {title}
        </Container>

    )
}