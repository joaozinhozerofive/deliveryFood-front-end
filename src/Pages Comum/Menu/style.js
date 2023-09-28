import styled from 'styled-components'


export const Container = styled.div`
    h1, h2{
        cursor: pointer;
        
    }
    header{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        height: 11.4rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: normal;
        h1{
            font-size: 3rem;
        }

        svg{
            font-size: 4rem;
        }
    }


    main{

        h2{
            padding: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: normal;
            font-size: 3rem;
            border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT};
        }
        padding: 2rem;
        div{
            width: 100%;
            margin-bottom: 5rem;
        }
    }

        
    
    
`
