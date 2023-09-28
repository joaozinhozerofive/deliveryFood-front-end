import styled from 'styled-components'


export const Container = styled.div`

#favorites{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
    }
    #snack{
        width: 17.6rem;
        margin-top: 2.4rem;
        margin-bottom: -4rem;
        border: 2px solid ${({theme}) => theme.COLORS.WHITE};
        border-radius: 50%;
    }

    h1{
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
    p{
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
        text-align: center;

        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2.4rem;
        

        >svg{
            width: 1.8rem;
        }

        >button{
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
    margin-left: 11px;
    margin-right: 11px;

}
    
`