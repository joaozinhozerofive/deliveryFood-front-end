import styled from 'styled-components'
import { responsives } from '../../Configs'


export const Container = styled.div`

    main{
        padding: 3rem
    }


    .hidden{
        display: none;
    }
    h1, h2{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        cursor: pointer;
        
    }
    header{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        padding: 5.7rem 2.8rem 2.3rem 2.8rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        h1{
            font-size: 2.4rem;
        }

        svg{
            font-size: 3.4rem;
        }
    }


    main{
        padding: 2rem;

        h2{
            margin-top: -1rem;
            padding: 2rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 2.5rem;
            line-height: 5rem;
            border-bottom: 0.2px solid ${({theme}) => theme.COLORS.GRAY_500};
            
        }
        div{
            width: 100%;
            margin-bottom: 5rem;
        }
    }


    @media ${responsives.tablet}{
        header{
            h1{
                font-size: 3rem;
            }
        }

        main{
            h2{
                font-size: 3.2rem;
            }
        }
}

        
    
    
`
