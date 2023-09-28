import { Container } from "./style";

export function Button({icon: Icon, onClick, title, ...rest}){
    return(
        <Container 
        type="button"
        {...rest}
        onClick={onClick}
        >
        {Icon && <Icon size={20}/>}
        {title}
        
        </Container>

    )
}