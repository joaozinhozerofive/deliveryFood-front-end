import styled from "styled-components"



export const Container = styled.div`
#includs{
        display: flex;
        flex-direction: column;
        align-items: center;


        >div{
            display: flex;
            gap: 3rem;
        }
        

        >svg{
            width: 1.8rem;
        }

        >button{
            margin-top: 1rem;
            width: 18rem;
            padding: 0.8rem 2rem;
            font-family: 'Poppins', sans-serif;
        }

        h3{
            font-family: 'Poppins', sans-serif;

        }
    }
`