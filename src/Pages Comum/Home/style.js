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
    


    .home{
        width: 100%;
        display: grid;
        grid-template-areas: 
        "header"
        "page"
        "footer";

        position: relative;
    }
`


export const Page = styled.div`
    flex: 1;
    
    grid-area: page;
    
    padding: 0 8.4rem;
    overflow-y: auto;
    position: relative;

   
    
    
    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        margin-top: 6.3rem;
    }

    ::-webkit-scrollbar{
        width: 20px;
    }


    ::-webkit-scrollbar-thumb{
        background-color: black;
        border-radius: 30px;
    }

    
    .content{
        position: relative;
        overflow-x: auto;



        
        


    #buttonBack{
        position: fixed;
        top: 25rem;
        z-index: 1000;
    }
    
    #buttonNext{
        position: fixed;
        right: 10rem;
        top: 48rem;
        z-index: 1000
    }
        margin-top: 2.5rem;
        display: flex;
        gap: 2.7rem;
        width: 100%;


       
        
        
    }


    @media (max-width: 1270px){

        .main{
            max-width: 100%;
            
        }
        }



        @media (max-width: 1229px){
            overflow-x: hidden;
            padding-right: 2rem;
            padding-left: 2rem;
            #buttonBack{
                display: none;
            }
            #buttonNext{
                display: none;
            }
        }
        @media (max-width: 1051px){

            .foods{
                h1:first-child{
                font-size: 2.5rem;
            }
            }
            
        }
        @media (max-width: 900px){
            .foods{
                h1:first-child{
                font-size: 2.2rem;
            }
            }
            
            
        }

`
