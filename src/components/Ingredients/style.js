import styled from 'styled-components'

export const Container = styled.button`

    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.WHITE};

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

    border-radius: 0.5rem;

    height: 3.2rem;

    padding: 0.4rem 0.8rem;
    
    display: flex;
    text-align: center;

`