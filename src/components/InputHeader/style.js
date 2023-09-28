import styled from 'styled-components';

export const Container = styled.div`

    >div{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        color: ${({theme}) => theme.COLORS.GRAY_500};
        width: 58.1rem ;
        display: flex;
        align-items: center;
        gap: 1.4rem;
        padding: 1.6rem;
        border-radius: 0.5rem;
        
        >input{
        font-size: 1.6rem;
        width: 100%;
        background: transparent;
        color: ${({theme}) => theme.COLORS.WHITE};
        
    }

        >svg{
             margin-left: 10rem;
             height: 2.4rem;
             width: 2.4rem;
            }
        
    }
`