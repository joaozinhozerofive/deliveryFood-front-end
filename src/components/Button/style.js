import styled from 'styled-components'


export const Container = styled.button`
    background-color: ${({theme}) => theme.COLORS.RED_900};
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    color:${({theme}) => theme.COLORS.WHITE} ;
    border-radius: 0.5rem;
    white-space: nowrap;

    >svg{
        height: 2.5rem;
        width: 3.2rem;
    }
`
