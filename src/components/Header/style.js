import styled from 'styled-components'


export const Container = styled.header `
 h1{
            white-space: nowrap;
        }
      
header{
    position: relative;
    position: fixed;
    top: 0;
     z-index: 1000;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem 12.3rem ;
    gap: 3.2rem;
    font-size: 1.6rem;

    .logo{
        cursor: pointer;

       
    }

    .hamburguer, .requests{
        display: none;
    }

    .orders, .requests{
        position: relative; 

      button {
            position: absolute;
            top: -1.5rem;
            right: -0.8rem;
            border-radius: 50%;
            font-size: 1rem;
            padding: 0.5rem;
        }
    }
    

    p{
        position: absolute;
        left: 11.5rem;
        bottom: -2.5rem;
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        opacity: 0.8;
        color: ${({theme}) => theme.COLORS.BLUE_100};
    }
    
    button{
        padding: 2rem 3.5rem ;

    }

    >div{
        display: flex;
        gap: 1rem ;

        h1{
            font-size:'Roboto', sans-serif;
        }

    }

}

@media (max-width: 1229px){
    
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        
        .hamburguer, .requests{
        display: block;
    }
        #logout{
            display: none;
        }
    }
    
    .orders{
        position: relative; 
    }

    p{
        position: absolute;
        left: 11.5rem;
        bottom: -2.5rem;
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        opacity: 0.8;
        color: ${({theme}) => theme.COLORS.BLUE_100};
    }
    .input{
        display: none;
    }
    
    .cart{
        padding: 2rem 3.5rem ;
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
`