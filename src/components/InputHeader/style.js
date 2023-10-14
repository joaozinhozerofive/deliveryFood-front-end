import styled from 'styled-components';
import { responsives } from '../../Configs';

export const Container = styled.div`

    >div{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        color: ${({theme}) => theme.COLORS.GRAY_500};
        width: 58.1rem ;
        display: flex;
        align-items: center;
        gap: 1.4rem;
        padding: 0.8rem;
        border-radius: 0.5rem;
        
        >input{
        font-size: 1.2rem;
        width: 100%;
        background: transparent;
        color: ${({theme}) => theme.COLORS.WHITE};
        
    }

        >svg{
             width: 2rem;
             height: 2rem;
            }
        
    }

    @media ${responsives.mobileM}{

        >div{
            >input{
            font-size: 1.6rem;
        }
        }
        
    }
    @media ${responsives.tablet}{

        >div{
            >input{
            font-size: 2rem;
        }
        }
        
    }

    


`