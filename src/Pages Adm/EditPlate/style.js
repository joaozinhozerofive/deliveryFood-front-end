import styled, {keyframes} from 'styled-components'

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

animation: ${dataField} 1s cubic-bezier(0.70, 0.05, 0.55, 0.95);

    
    footer{
        margin-top: 30.0rem;
    }

`

export const Form = styled.form`

display: flex;
flex-direction: column;
gap: 32px;



p{
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT};
        margin-bottom: 1.6rem;
        margin-top: 1.6rem;
    }




    #namePlate, #price{

     text-decoration: none;
     color: ${({theme}) => theme.COLORS.WHITE};
     background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
     gap: 1.2rem ;
     padding: 1.4rem 3.2rem;
     border-radius: 0.8rem;
    }


    #price{
        width: 25.1rem;
    }

   

.name, .category, .ingredients, .price, .description{
    
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;

    

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
        padding: 1.6rem 3.2rem;
        border-radius: 0.8rem;
    }

    #ingredients{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        border-radius: 0.8rem;
        display: flex;
        gap: 1rem;
        padding: 0.8rem;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
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


@media (max-width: 1229px){
    .name, .category, .ingredients, .price, .description{
        padding: 0.4rem;

        #ingredients{
            padding: 0.4rem;
        }
        
        .tags{
            font-size: 0.2rem;
        }
    
}
}
`



export const Page = styled.main`

    position: relative;
    padding: 15rem 12.2rem 0 12.2rem;

    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        margin-bottom: 3.2rem;
        margin-top: 3.2rem;
    }

    .delete{
        display: flex;
        justify-content: end;
        gap: 1rem;
        align-items: center;
        margin-top: 2.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        
    
        button{
            background-color: ${({theme}) => theme.COLORS.RED_700};
            padding: 1rem;
            
        }

        .buttonDelete{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
            color: ${({theme}) => theme.COLORS.WHITE};
            border-radius: 0.8rem;
            padding: 1rem;
        }
    }

    select{
        width: 40rem;
    }
    .buttonBack{
        display: flex;
        align-items: center;
        gap: 1rem;
    }


@media (max-width: 1229px){
    padding-left: 5rem;
    padding-right: 5rem;


    input{

    }
    .delete{
       button{
        width: 100%;
    } 
    }
    
}
@media (max-width: 1000px){
.ingredients{
  display: flex;
  flex-wrap: wrap;
}
    .tags{
    flex: 0 0 calc(33.33% - 2rem);
}
`

