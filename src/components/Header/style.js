import styled from 'styled-components'
import { responsives } from '../../Configs'


export const Container = styled.header `
padding-right: 1rem;
 h1{
            white-space: nowrap;
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
        }

.input{
    display: none;
}
      
header{
    position: relative;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6rem 2.8rem 2.4rem 2.8rem;
    gap: 3.2rem;
    font-size: 1.6rem;


    .favorites{
        margin-left: -1rem;
    }
    .logo{
        display: flex;
        align-items: center;
        gap: 1rem;

        #admin{
            display: flex;
            align-items: center;
            gap: 1rem;

        p{
        margin-top: 0;
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.BLUE_100};
        }

        }
    }


    .logo:hover{
        cursor: pointer;
    }

    

    .buttons{
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        justify-content: center;
        gap: 2rem;
    }

    .orders, .requests{
        position: relative; 

      button {
            align-items: center;
            position: absolute;
            top: -1.2rem;
            right: -0.9rem;
            border-radius: 50%;
            font-size: 1.5rem;
            font-family: 'Roboto', sans-serif;
            padding: 0.6rem;
            width: 2.3rem;
            height: 2.3rem;
        }
    }
    

   
    
    .cart{
        display : none;

    }

    #logout{
        display: none;
    }

    >div{
        display: flex;
        gap: 1rem ;

        h1{
            font-size:'Roboto', sans-serif;
        }

    }

}

@media ${responsives.tablet}{

    header{
        
        .logo{

             #admin{
                 p{
                    font-size: 1.3rem;
                     }

        }


    }
    .orders{
        >img{
            width: 3rem;
        }
    }
    .hamburguer{
        >img{
            width: 2.8rem;
        }
    }
        h1{
            font-size: 2.6rem;
        }
}

}
@media ${responsives.laptop}{

    header{
        
        .logo{

             #admin{
                 p{
                    font-size: 1.3rem;
                     }

        }


    }
    .orders{
        >img{
            width: 3rem;
        }
    }
    .hamburguer{
        >img{
            width: 2.8rem;
        }
    }
        h1{
            font-size: 2.6rem;
        }
}

}

@media ${responsives.laptopL}{
    
      
header{
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 3.2rem;

    .orders, .requests{
        img{
            width: 3.7rem;
        }
      button {
            
            top: -1.5rem;
            right: -0.9rem;
            border-radius: 50%;
            font-size: 1.5rem;
            font-family: 'Roboto', sans-serif;
            padding: 0.6rem;
            width: 3rem;
            height: 3rem;
        }
    }

    .input{
    display: block;

    .input-header{
        padding: 0.5rem;

        svg{
            width: 3rem;
            height: 3rem;
            margin-left: 8rem;
        }
    }
}

    .cart{
        display : block;
        display: flex;
        align-items: center;
        padding: 1.7rem 4rem;
    }

    #logout{
        display: block;
        width: 3rem;
    }

h1{
    font-size: 3rem;
}
    
    .logo{
        margin-top: -1rem;
        display: flex;
        align-items: center;
        gap: 1rem;

        >img{
            width: 3rem;
        }

        #admin{
            margin-top: 1.2rem;
            display: flex;
            flex-direction: column;

        p{
        margin-top: -1rem;
        margin-left: 14rem;
        font-size: 1.4rem;
        }

        }

        
       
    }

    

    .hamburguer, .requests{
        display: none;
    }
}

}


@media ${responsives.desktop}{
    header{
    justify-content: center;
    padding: 2rem;
    gap: 3.5rem;

    .orders, .requests{
        img{
            width: 5rem;
        }
      button {
            top: -1.7rem;
            right: -1.4rem;
            font-size: 2rem;
            padding: 1rem;
            width: 3.5rem;
            height: 3.5rem;
        }
    }

    .input{

    .input-header{
        padding: 1rem 1.5rem 1rem 1rem;
        font-size: 2.5rem;
        svg{
            width: 4rem;
            height: 4rem;
            margin-left: 5rem;
        }
    }
}

    .cart{
        font-size: 2rem;
        padding: 2.5rem 4rem;
    }

    #logout{
        width: 4rem;
    }

h1{
    
    font-size: 4rem;
}
    
    .logo{
        margin-top: -1.7rem;
        gap: 2rem;

        >img{
            width: 4rem;
        }

        #admin{
            margin-top: 1.2rem;

        p{
        margin-top: -1rem;
        margin-left: 17rem;
        font-size: 1.8rem;
        }

        }
    }
    
}

}

`