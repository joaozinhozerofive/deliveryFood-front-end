import { Container } from "./style";

export function Textarea( { value, readOnly, ...rest } ){

    return(
        <Container 
        value={value}
        readOnly = {readOnly}
        {...rest}>
            {value}
        </Container>
    )
}