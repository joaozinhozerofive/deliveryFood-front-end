import styled from 'styled-components'
import { responsives } from '../../Configs'


export const Container = styled.footer`
    width: 100%;
    margin-top: 25rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .footer{
        display: flex;
        align-items: center;
        gap: 1rem ;
        margin-left: 8%;

        >h1{
            color: ${({theme}) => theme.COLORS.LIGHT_100} ;
            font-family: 'Roboto', sans-serif;
            font-size: 1.8rem;
            white-space: nowrap;
        }
        
    }
    p{

        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;

        color: ${({theme}) => theme.COLORS.LIGHT_200};
        white-space: nowrap;
    }


    @media ${responsives.tablet}{
        padding: 2rem;
        .footer{
            
            h1{
                font-size: 3rem;
            }
        }
        p{
            font-size: 1.5rem;
            margin-right: 10%;
        }
    }
    @media ${responsives.laptopL}{
        .footer{
            img{
                width: 4rem;
            }
            h1{
                font-size: 4rem;
            }
        }
        p{
            font-size: 2rem;
            margin-right: 1%;
        }
    }
`