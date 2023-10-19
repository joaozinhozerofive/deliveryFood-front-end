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
      padding-left: 5rem;
      padding-right: 2rem;
    }
    @media ${responsives.laptopL}{
      padding-left: 12rem;
      padding-right: 12rem;
      >.foods{
      .category{
          font-size: 3.5rem;
      }
    }
    @media ${responsives.desktop}{
      padding-left: 14rem;
      padding-right: 14rem;

    }
    }
      
`
