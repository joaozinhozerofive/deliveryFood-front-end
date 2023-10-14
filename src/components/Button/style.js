import styled from 'styled-components'


export const Container = styled.button`
    background-color: ${({theme, isLoading}) => isLoading  ? theme.COLORS.RED_700 :  theme.COLORS.RED_900};
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
