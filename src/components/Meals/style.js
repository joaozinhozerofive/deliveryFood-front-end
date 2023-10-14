import styled from 'styled-components'
import { responsives } from '../../Configs'


export const Container = styled.div`
    width: 100%;
    
    .swiper-button-next,
    .swiper-button-prev {
          display: none;
          color: white;
        }
        
        .swiper-button-next {
          background: linear-gradient(90deg, transparent, #000A0F);
        }

    .mealsActive{
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 22rem;
        padding: 2rem;
        cursor: pointer;
        margin-bottom: 2rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};
        border-radius: 0.8rem;
        position: relative;

        
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
        width: 8.8rem;
        height: 8.8rem;
        margin-bottom: -5.0rem;
        border: 2px solid ${({theme}) => theme.COLORS.WHITE};
        border-radius: 50%;
        object-fit: cover;
    }

    h1{
        flex-wrap: wrap;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        white-space: nowrap;
        
    
    }
    p{
        display: none;
    }
    h2{
        text-align: center;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 2rem;
        line-height: 5.2rem;
        margin-bottom: 1.5rem;

        color: ${({theme}) => theme.COLORS.BLUE_100};
    }
    
    
.mealsActive{

    
}




@media ${responsives.laptopL}{
.swiper-button-next,
.swiper-button-prev {
  display: block;
}
}
`
