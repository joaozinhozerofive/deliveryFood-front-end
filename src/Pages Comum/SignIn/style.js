import styled, {keyframes} from 'styled-components'
import { responsives } from '../../Configs';


const LogoAppear = keyframes`
  from {
    filter: opacity(0);
    transform: translateY(-100px);
  }
  to {
    filter: opacity(1);
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    filter: opacity(0);
  }
  to {
    filter: opacity(1);
  }
`;

const InputField = keyframes`
  0% {
    filter: opacity(0);
    transform: translateX(-30px);
  }
  50% {
    filter: opacity(1);
  }
  100% {
    transform: translateX(0);

  }
`;


export const Container = styled.div`
    padding: 10rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    gap: 5rem;

    .logo{
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.4rem;
      margin: 0 auto;
      animation: ${LogoAppear} 1s ease-in-out;
    }

    form{
      color: ${({theme}) => theme.COLORS.LIGHT};
      font-family: 'Roboto', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      div:nth-child(2), div:nth-child(3), div:nth-child(4), button, h1{
    animation: ${InputField} 1s cubic-bezier(0.70, 0.05, 0.55, 0.95);
  }


      h1{
        color: ${({theme}) => theme.COLORS.WHITE};
        display: none;
      }
    }

    .input-wrapper{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    input{
      background: ${({theme}) => theme.COLORS.BACKGROUND_800};
      color: ${({theme}) => theme.COLORS.WHITE};
      padding: 1rem;
      border-radius: 0.5rem;
      border: 0.5px solid ${({theme}) => theme.COLORS.LIGHT_100};
    }

    button{
      width: 100%;
      padding: 1rem;
      
    }

    .signUp{
      background: none;
      color: ${({theme}) => theme.COLORS.WHITE};
    }



    @media ${responsives.tablet}{
      padding-top: 13rem;
      .logo{
        font-size: 2rem;
        

        >img{
          width: 4rem;
        }
      }
    }


    @media ${responsives.laptop}{
        flex-direction: row;
        justify-content: space-between;
        gap: 15rem;
        padding-top: 15%;
        padding-right: 10%;

        
        form{
          background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
          border-radius: 8px;
          padding: 5rem 5rem;
          width: 100%;
          max-width: 40rem;
          h1{
            display: block;
          }
        }
    }

`

