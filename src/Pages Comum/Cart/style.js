import styled from "styled-components";
import { responsives } from "../../Configs";



export const Container = styled.div`

    display: flex;
    flex-direction : column;
    height: 100vh;
    font-family: 'Poppins', sans-serif;

    
    .total{
        padding: 1rem;
        border-top: 1px solid ${({theme}) => theme.COLORS.LIGHT};
        color: #1eb340;

    }

    

    

   
    .buttonBack{
        display: flex;
        align-items: center;
        font-size: 2rem;
        gap: 1rem;
        font-family: 'Poppins', sans-serif;
        img{
            width: 1rem;
        }
    }

    
    
    main{
        width: 100%;
        margin-top: 15rem;
        gap: 2rem;
        display: flex;
        flex-direction : column;
        padding: 0 2rem;

        
        
        h1{
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            margin-top: 3rem;
        }

        .notCart{
            color: ${({theme}) => theme.COLORS.RED_700};
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 5rem;
    }

    .content{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 2rem;
    }

        .orders{
        display: flex;
        align-items: center;
        gap: 2rem;

        div{
            >div{
                display: flex;
                justify-content: space-between;

                
                .Price{
                    color: ${({theme}) => theme.COLORS.LIGHT};
                    font-size: 1.1rem;
                }
            }
        }

        p{
            white-space: nowrap;
            font-size: 2rem;
            font-family: 'Poppins', sans-serif;
        }

        span{
            cursor: pointer;
            font-size: 1.3rem;
            white-space: nowrap;
            color: ${({theme}) => theme.COLORS.RED_700};
        }

        span:hover{
            filter: brightness(0.9);
        }


        img{
            border-radius: 50%;
            width: 100%;
            height: 100%;
            max-width: 8rem;
            max-height: 8rem;
        }
    }
    }
    #payment{

        .payment{
           margin-left: 2rem;
        }
        .buttonPayment{
                margin: 2rem auto;
                width: 90%;
                font-family: 'Poppins', sans-serif;
                padding: 1rem;
        }

    }
    .newFooter{
        margin-top: 30rem;
    }
    
    @media ${responsives.laptop}{
        main{
            padding-left: 10%;
            padding-right: 10%;
            flex-direction: row;
            justify-content: space-between;
            gap: 30rem;
        }
    }
`