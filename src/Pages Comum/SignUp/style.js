import styled, {keyframes} from 'styled-components'


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

padding: 5.0rem  10.8rem 14.2rem 15.3rem;
display: flex;
align-items: center;
justify-content: space-between;

form:hover{
    border: 1px solid ${({theme}) => theme.COLORS.HOVER};
}



form{
    cursor: pointer;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    padding: 4.4rem;
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    



   div:nth-child(2), div:nth-child(3), div:nth-child(4), button{
    animation: ${InputField} 1s cubic-bezier(0.70, 0.05, 0.55, 0.95);
  }


    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    p{
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT};
        margin-bottom: 1rem;
    }

    input{
        color: ${({theme}) => theme.COLORS.WHITE};
        width: 34.8rem;
        padding: 1.5rem;
        background: transparent;
        border-radius: 0.5rem;
        border: 1px solid white;
    }

    button{
        padding: 1.5rem;
        width: 100%;
    }
}
.logo{
    animation: ${LogoAppear} 1s ease-in-out;
    display: flex;
    align-items: center;
    gap: 1.5rem;


    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
    }
}
.signUp{
    font-family: 'Poppins', sans-serif;
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.WHITE};
}

@media(max-width: 1229px){
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 13rem;

    form{
    background: none;
    }

    h1{
        white-space: nowrap;
    }
}
`

