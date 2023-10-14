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
        position: relative;
    }
`


export const Page = styled.div`
    overflow-y: hidden;
    position: relative;
    padding: 1rem;
    
    h1{
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        margin-top: 6.3rem;
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
`
