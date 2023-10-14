import { Container } from "./style";

export function Button({icon: Icon, onClick, isLoading, title, ...rest}){
    return(
        <Container 
        type="button"
        {...rest}
        disabled = {isLoading}
        isLoading = {isLoading}
        onClick={onClick}
        >
        {Icon && <Icon size={20}/>}
        {title}
        
        </Container>

    )
}