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

animation: ${dataField} 1s cubic-bezier(0.70, 0.05, 0.55, 0.95);
    


    .home{
        
        display: grid;
        position: relative;
    }
`


export const Page = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    
    >.foods{
      .category{
          margin-left: 1rem;
          font-size: 2rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          margin-top: 4rem;
      }

    }

    
    
    .content{
        position: relative;
        margin-top: 2.5rem;
        display: flex;
        width: 100%;
    }

    @media ${responsives.tablet}{
      padding: 1rem;
      >.foods{
      .category{
          font-size: 2.5rem;
      }

    }
    }

    @media ${responsives.laptop}{
      >.foods{
      .category{
          font-size: 3rem;
      }

    }
    }
    @media ${responsives.laptopL}{
      padding-right: 10%;
      padding-left: 10%;
      >.foods{
      .category{
          font-size: 3.5rem;
      }
    }
    @media ${responsives.desktop}{

    }
    }
      
`
