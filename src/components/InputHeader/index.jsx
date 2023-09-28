import { Container } from './style'

export function InputHeader({icon : Icon, onChange, onClick, ...rest}){
    return(
        <Container
        onChange={onChange}
        {...rest}
        onClick={onClick}
        >
            <div>
            {Icon && <Icon/>}
            <input {...rest} />
            </div>
        </Container>
    )

}