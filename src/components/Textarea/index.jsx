import { Container } from "./style";

export function Textarea( { value, readOnly, ...rest } ){

    return(
        <Container 
        readOnly = {readOnly}
        {...rest}>
            {value}
        </Container>
    )
}