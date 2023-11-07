import styled, {keyframes} from "styled-components";
import { responsives } from "../../Configs";

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



    .newFooter{
        margin-top: 30rem;
    }


`


export const Page = styled.main`
    margin-top: 18rem;
    margin-left: 2rem;
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    animation: ${InputField} 1s cubic-bezier(0.70, 0.05, 0.55, 0.95);


   

    h1{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    .tableDesktop{
        display: none;
    }






    >.tableMobile{
        display: flex;
        flex-direction: column;

        gap: 2rem;

        padding: 1rem;

        border-radius: 0.5rem;
        border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};

        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        .status{
            display: flex;
            flex-direction: row;

            >span{
                display: flex;
                gap: 0.5rem;
            }
        }


        >th:nth-child(1){
            gap: 1rem;
            td:nth-child(4){
                white-space: nowrap;
            }
        }

        >tr:nth-child(1){
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            >td{
                white-space: nowrap;
            }
        }
    }

    
    @media ${responsives.mobileL}{
        >.tableMobile{
        width: 90%;
        gap: 3rem;
        padding: 2rem;

        >tr:nth-child(1){
            display: flex;
            gap: 4rem;

            >td{
                white-space: nowrap;
            }
        }
    }

    }
    @media ${responsives.laptop}{
            width: 90%;

    }
    @media ${responsives.laptopL}{
        margin: 20rem auto;

        .tableMobile{
            display: none;
        }
        .tableDesktop{
            margin-top: 5rem;
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            display: block;
            border-collapse: collapse;

            .status{
                span{
                    display: flex;
                    gap: 1rem;
                }
            }
            
            th{
                padding: 2rem;
                border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
            }

           td{
            color: ${({theme}) => theme.COLORS.LIGHT}; 
            padding: 3rem;
            border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
           }
        }

    }

`