import styled from 'styled-components'

export const Container  = styled.div`
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.GRAY_500};
    display: flex;
    padding: 0.8rem 1.3rem;
    width: 100%;
    
    border-radius: 0.8rem;
    border: ${({theme, isNew}) => isNew? `1px dashed ${theme.COLORS.GRAY_500}` : 'none'};

   

    button{
        border: none;
        background: transparent;
        color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE};
    }
    >input{
        width: 100%;

        color: ${({ theme }) =>  theme.COLORS.WHITE};
        background: transparent; 
        border: none;

        &::placeholder{
            color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE};
            font-family: 'Roboto', sans-serif;
            font-size: 1.4rem;
        }
    }

`