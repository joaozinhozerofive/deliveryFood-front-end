import styled, {keyframes} from 'styled-components'
import { responsives } from '../../Configs';

const dataField = keyframes`
  0% {
    filter: opacity(0);
    transform: translateY(-30px);
  }
  50% {
    filter: opacity(1);
  }
  100% {
    transform: translateX(0);

  }
`;

export const Container = styled.div`
padding: 0;
max-width: 100%;
animation: ${dataField} 1s cubic-bezier(0.70, 0.05, 0.55, 0.95);
`

export const Page = styled.main`
    width: 160rem;
    max-width: 100%;
    padding:15rem 0 0 2rem;
    margin: 0 auto;

    .buttonBack{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;

        >button{
            font-weight: 400;
            font-size: 2.5rem;
        }
        

    }
    >h1{
        white-space: nowrap;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        margin-top: 3.2rem;
        font-size: 2.5rem;
    }

    .save{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
        width: 100%;
        button{
            background-color: ${({theme}) => theme.COLORS.RED_700};
            padding: 1rem;
            
        }
    }

    .delete{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        width: 100%;
        button{
            background-color: ${({theme}) => theme.COLORS.RED_700};
            padding: 1rem;
            
        }

        .buttonDelete{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
            color: ${({theme}) => theme.COLORS.WHITE};
            border-radius: 0.8rem;
            white-space: nowrap;
            padding: 1rem;
        }
    }
    






@media ${responsives.laptopL}{
    .buttonBack{
            align-items: center;
            gap: 2rem;
        img{
            width: 1.5rem;
        }
        >button{
            font-size: 3.5rem;
        }
    }

    

    .save{
        display: flex;
        button{
            display: flex;
            background-color: ${({theme}) => theme.COLORS.RED_700};
            padding: 1.5rem;
            font-size: 2rem;
        }
    }


    @media ${responsives.desktop}{
        margin-top: 8rem;
            .buttonBack{
            img{
                width: 2rem;
            }
            >button{
                font-size: 5rem;
            }
        }

        h1{
            font-size: 5rem;
        }

        .save{
        button{
            padding: 2rem;
            font-size: 2.5rem;
        }
    }
        
}}

`
export const Form = styled.form`


@media ${responsives.mobileL}{
    padding-right: 1rem ;
}

p{
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT};
        margin-bottom: 1.4rem;
        margin-top: 1.6rem;
    }



    .selectImg{
        font-size: 1rem;
    }
    #namePlate, #price{

     text-decoration: none;
     color: ${({theme}) => theme.COLORS.WHITE};
     background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
     gap: 1.2rem ;
     padding: 1.4rem 3.2rem;
     border-radius: 0.8rem;
    }


    

   

.name, .category, .ingredients, .price, .description{
    
    width: 100%;
    display: flex;
    flex-direction: column;

    #ingredients{
        flex-wrap: wrap
    }

    textarea{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    }
    
    #event-category{
        width: 100%;
        border: none;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        color: ${({theme}) => theme.COLORS.WHITE};
        display: flex;
        align-items: center;
        gap: 1.2rem ;
        padding: 1.4rem 3rem;
        border-radius: 0.8rem;
    }

    #ingredients{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        border-radius: 0.8rem;
        display: flex;
        gap: 1rem;
        padding: 0.8rem;
        width: 100%;

        .tags{
            text-align: center;
        }
    }
    }


label{  
     background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
     display: flex;
     align-items: center;
     gap: 1.2rem ;
     padding: 1.2rem 3.2rem;
     border-radius: 0.8rem;

       #imgPlate{
        display: none;
       } 
}




@media (min-width: 900px){
    
    .ingredients{
        >#ingredients{
            flex-wrap: nowrap;
            padding: 1rem;

            .tags{
                font-size: 1.2rem;
            }

            
        }

    }
}

@media ${responsives.laptopL}{
    .ingredients{
        >#ingredients{
            flex-wrap: nowrap;
            padding: 1rem;

            .tags{
                font-size: 1.5rem;
            }
            .tags::placeholder{
                font-size: 2.5rem;
            }
        }

    }
    p{
        margin-bottom: 2rem;
        margin-top: 2rem;
        font-size: 2rem;
    }

    .selectImg{        
        font-size: 2rem;
        >label{
        padding: 2rem 3.5rem;
    }

    }

    
    #namePlate, #price{
        font-size: 2rem;
        gap: 1.2rem ;
        padding: 2rem 3.5rem;
}

.name, .category, .ingredients, .price, .description{
font-size: 2rem;
width: 100%;
display: flex;
flex-direction: column;

textarea{
    font-size: 2rem;
   background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
}

#event-category{
   padding: 2rem 3.5rem;
}

}

}




@media ${responsives.desktop}{
    .ingredients{
        >#ingredients{
            flex-wrap: nowrap;
            padding: 2rem;

            .tags{
                >button{
                    width: 3rem;
                }
                font-size: 3rem;
            }
        }

    }
    p{
        margin-bottom: 2.5rem;
        margin-top: 2.5rem;
        font-size: 2.5rem;
    }

    .selectImg{        
        font-size: 2.5rem;
        >label{
        padding: 2.5rem 4rem;
    }

    }

    
    #namePlate, #price{
        font-size: 2.5rem;
        gap: 1.2rem ;
        padding: 2.5rem 4rem;
}

.name, .category, .ingredients, .price, .description{
font-size: 2.5rem;
width: 100%;
display: flex;
flex-direction: column;

textarea{
   padding: 2.5rem 4rem;
   font-size: 2.5rem;
   background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
}

#event-category{
    font-size: 2rem;
    padding: 2.5rem 4rem;
}
}
}

`




