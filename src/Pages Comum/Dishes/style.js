import styled, {keyframes} from 'styled-components'
import { responsives } from '../../Configs';


const dataField = keyframes`
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
    width: 100%;
    display: flex;
    flex-direction: column;

        
        footer{
            width: 100%;
            min-width: 38rem;
            bottom: 0;

            >footer{
                padding: 1rem;
            }
        }
        

        .buttonBack{
            display: flex;
            gap: 0.5rem;
            flex-direction: row;
            justify-content: start;
            margin-top: 13rem;
            margin-left: 4rem;

            >img{
                width: 1rem;
            }
            
            >button{
                font-size: 2rem;
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
            }
            
        }


        @media ${responsives.tablet}{

            footer{
                margin-top: 0;
            }
            .buttonBack{
                gap: 1rem;
                img{
                    width: 1.4rem;
                }
                >button{
                    font-size: 3rem;
                }
            }
        }
        @media ${responsives.desktop}{
            .buttonBack{
                margin-top: 18rem;
                gap: 2rem;
                img{
                    width: 3rem;
                }
                >button{
                    font-size: 6rem;
                }
            }
        }

        
       
`


export const Page = styled.main`
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100vh;
    width: 100vw;
    padding-left: 10rem;

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


.indexSnack{
    animation: ${dataField} 1s cubic-bezier(0.70, 0.05, 0.55, 0.95);
    border-radius: 50%;
}

#snack{
    border-radius: 50%;
    width: 30rem;
    height: 30rem;
    
}

.content{
    animation: ${dataField} 1s cubic-bezier(0.70, 0.05, 0.55, 0.95);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;

    h1{
        font-size: 3rem;
        white-space: nowrap;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }


    p{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT};
        margin-bottom: 1rem;
    }

    >.ingredients{
        display: flex;
        gap: 1.2rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .editDish{
            text-align: center;
            padding: 1.2rem;
            height: 4.8rem;
            display: flex;
            align-items: center;
    }

}

#includs{
        text-align: center;

        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2.4rem;
        

        >svg{
            width: 18px;
        }

        >button{
            text-align: center;
            padding: 1.2rem;
            padding: 2.4rem;
            height: 4.8rem;
            display: flex;
            align-items: center;
        }

        >h3{
            min-width: 3rem;
            font-family: 'Roboto', sans-serif;

        }
    }


    @media ${responsives.mobileL}{
        padding: 2rem;

        
    }


    @media(min-width: 900px){
        margin-bottom: 5rem;
        #snack{
            width: 40rem;
            height: 40rem;
        }

       .content{
                h1{
                    font-size: 4rem;
                }
                p{
                    font-size: 2rem;
                }

                >.ingredients{
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;

                    .tags{
                        padding: 2rem;

                        display: flex;
                        align-items: center;

                        font-size: 2rem;

                    }
                }     
       }

       #includs{
        gap: 2rem;
        

        >img{
            width: 3rem;
        }
        >h3{
            min-width: 4rem;
            font-family: 'Roboto', sans-serif;
            font-size: 3rem;
        }

        >button{
            text-align: center;
            padding: 3rem;
            font-size: 2rem;
        }

    }
    }
    
    @media ${responsives.laptopL}{
        padding: 3rem;
        main{
            gap: 3rem;
            flex-direction: row;
        }
        #snack{
            width: 60rem;
            height: 60rem;
        }

       .content{
                h1{
                    font-size: 6rem;
                }
                p{  
                    font-family: 'Poppins', sans-serif;
                    font-size: 3rem;
                    color: ${({theme}) => theme.COLORS.LIGHT_200};
                }

                >.ingredients{
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;

                    .tags{
                        padding: 2rem;

                        display: flex;
                        align-items: center;

                        font-size: 2rem;

                    }
                }     
       }

       #includs{
        gap: 2rem;
        

        >img{
            width: 3rem;
        }
        >h3{
            font-family: 'Roboto', sans-serif;
            font-size: 3rem;
        }

        >button{
            text-align: center;
            padding: 3rem;
            font-size: 2rem;
        }

    }
    }
    
    @media ${responsives.desktop}{
        padding: 3rem;
        main{
            gap: 3rem;
        }
        #snack{
            width: 70rem;
            height: 70rem;
        }

       .content{
                h1{
                    font-size: 8rem;
                }
                p{  
                    font-size: 4rem;
                }

                >.ingredients{
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;

                    .tags{
                        padding: 3rem;

                        display: flex;
                        align-items: center;

                        font-size: 3rem;

                    }
                }     
       }

       #includs{
        gap: 3rem;
        

        >img{
            width: 4rem;
        }
        >h3{
            width: 5rem;
            font-family: 'Roboto', sans-serif;
            font-size: 4rem;
        }

        >button{
            text-align: center;
            padding: 4rem;
            font-size: 3rem;
        }

    }
    }
    
    `



