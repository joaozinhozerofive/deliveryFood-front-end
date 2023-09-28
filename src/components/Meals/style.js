import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    width: 100%;


    .mealsActive{
        
        padding: 1rem  2rem 1rem 2rem;
        cursor: pointer;
        margin-bottom: 2rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};
        border-radius: 0.8rem;
        width: 100%;
        min-height: 40rem;
        max-height : 60rem;
        min-width: 30rem;
        max-width: 30rem;
        position: relative;
        border: 2px solid #152c37;
        
    }

    .mealsActive:hover{
        border: 1px solid ${({theme}) => theme.COLORS.HOVER};
    }
    
    #favorites, #edit{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
    }
    #snack{
        width: 17.6rem;
        height: 17.6rem;
        margin-top: 2.4rem;
        margin-bottom: -4.0rem;
        border: 2px solid ${({theme}) => theme.COLORS.WHITE};
        border-radius: 50%;
        object-fit: cover;
        justify-content: center;
    }

    h1{
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 2.5rem;
        white-space: nowrap;
        margin-bottom: 1.5rem;
        
    
    }
    p{
        max-lines: 2; 
        overflow: hidden;
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
        text-align: center;
        
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;

        color: ${({theme}) => theme.COLORS.LIGHT};
    }
    h2{
        text-align: center;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 5.2rem;
        margin-bottom: 1.5rem;

        color: ${({theme}) => theme.COLORS.BLUE_100};
    }
    #includs{
        width: 100%;
        text-align: center;
        position: relative;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 2.4rem;
        

        >svg{
            width: 1.8rem;
        }

        >button{
            width: 100%;
            text-align: center;
            padding: 1.2rem;
            padding: 2.4rem;
            height: 4.8rem ;
            display: flex;
            align-items: center;
        }

        >h3{
            font-family: 'Roboto', sans-serif;

        }
    }


    
.mealsActive{

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1.1rem;
    margin-right: 1.1rem;

    
   

}


    @media (max-width: 1229px){
        .mealsActive{
            padding-top: 0;
            padding-bottom: 4rem;
            
    #snack{
        width: 13rem;
        height: 13rem;
    }

    h1{
        font-size: 2rem;
        font-weight: 400;
    }
    
    h2{
        font-size: 2.8rem;
        
    }
    #includs{
        display: flex;
        justify-content: center;

        >img, h3{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            margin-bottom: 2rem;
        }

        >button{
            position: absolute;
            bottom: -5rem;
        }
    }
            
        } 
        }
        

      
    @media (max-width: 1051px){
        display:flex;
        padding-left: -7rem;
        padding-right: 3rem;
        margin-right: -3rem;

        .mealsActive{
           min-width: 23rem;
           max-width: 23rem;
        }
        
    #snack{
        width: 10.6rem;
    }

    h1{
        margin-top: 5rem;
        font-size: 1.5rem;
        font-weight: 400;

    }
    h2{
        font-size: 2rem;
        
    }
    #includs{
        >button{
            font-family: 'Poppins', sans-serif;
            width: 20rem;
            font-size: 1.4rem;
            position: absolute;
            bottom: -5rem;
        }
    }
            
        }   
`
