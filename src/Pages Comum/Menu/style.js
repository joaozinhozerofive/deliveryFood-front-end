import styled, {keyframes} from 'styled-components'
import { responsives } from '../../Configs'



const InputField = keyframes`
  0% {
    filter: opacity(0);
    transform: translateX(-300px);
  }
  50% {
    filter: opacity(1);
  }
  100% {
    transform: translateX(0);

  }
`;


export const Container = styled.div`

    animation: ${InputField} 600ms cubic-bezier(0.1, 0.05, 0.1, 0.1);

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


        .logout{
            display: flex;
            gap: 1rem;
        }

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
