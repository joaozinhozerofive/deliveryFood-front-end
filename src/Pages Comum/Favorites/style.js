import styled from "styled-components";
import { responsives } from "../../Configs";


export const Container = styled.div`
    display: flex;
    flex-direction : column;
    max-width: 100%;
    height: 100vh;

    p{
        cursor: pointer;
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
        padding: 0 2rem;
        display: flex;
        flex-direction : column;

        
        
        h1{
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 2.5rem;
            margin-bottom: 3rem;
        }

        .notFavorites{
            color: ${({theme}) => theme.COLORS.RED_700};
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 5rem;
    }

    .content{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

        .favorites{
        display: flex;
        align-items: center;
        gap: 2rem;

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

    .newFooter{
        margin-top: 30rem;
    }


    @media ${responsives.tablet}{

        main{
            margin-bottom: 2rem;
            .content{
                flex-direction: row;
                flex-wrap: wrap;
            }


            .favorites{
                min-width: 30rem;
            }
        }
    }
    @media ${responsives.laptop}{
        .buttonBack{
            font-size: 2.5rem;
        img{
            width: 1.2rem;
        }
    }

        main{
            margin-bottom: 15rem;
        
        
        h1{
            font-size: 3rem;
            margin: 3rem auto;
        }
    
        .content{
            gap: 4rem;
        }
        .favorites{
            min-width: 37rem;
            p{
                font-size: 3rem;
            }


            img{
                border-radius: 50%;
                width: 100%;
                height: 100%;
                max-width: rem;
                max-height: 8rem;
            }
    }
    }

    .newFooter{
        margin-top: 30rem;
    }
    
    }


    @media ${responsives.laptopL}{
        main{
            padding-left: 6rem;


            .favorites{
                min-width: 40rem;
            }
        }

        
    }
`