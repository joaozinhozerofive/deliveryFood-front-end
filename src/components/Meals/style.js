import styled from 'styled-components'
import { responsives } from '../../Configs'


export const Container = styled.div`
    width: 150rem;
    display: flex;
    flex-direction: row;
    filter: drop-shadow(0px 0px 0.5rem ${({theme}) => theme.COLORS.HOVER});


    
    .swiper-button-next,
    .swiper-button-prev {
          display: none;
          color: #ffffff;
          height: 60rem;
          filter: drop-shadow(0px 0px 0.5rem ${({theme}) => theme.COLORS.HOVER});
          position: relative;


          
        }

        .mySwiper{
        margin-left: -22rem;
        width: 60rem;
        position: relative;
    }
        
    .mealsActive{
        min-width: 20rem;
        max-width: 22rem;
        padding: 2rem 3rem;
        cursor: pointer;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};
        border: 1px solid black;
        border-bottom: 0.8rem solid black;
        border-radius: 0.8rem;
        position: relative;

    >.content-meals{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
        
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
            width: 100%;
            padding: 0.8rem 2rem;
            font-family: 'Poppins', sans-serif;
        }

        h3{
            font-family: 'Poppins', sans-serif;

        }
    }

    h1{
        font-size: 1.8rem;
        margin-top: 6rem;
        text-align: center;
        white-space: nowrap;
    }
    p{
        display: none;
        color: ${({theme}) => theme.COLORS.LIGHT};
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


@media ${responsives.mobileL}{
        margin-left: 3rem;
    }

@media ${responsives.tablet}{
    .mySwiper{
        width: 150rem;
        margin-left: -65rem;
    }
    .swiper-button-prev{
        position: absolute;
        right: 1rem;
    }
    .mealsActive{
        min-width: 25rem;
        max-width: 27rem;
        padding: 3rem;
    }
    #snack{
        width: 11.5rem;
        height: 11.5rem;
        margin-bottom: -4.5rem;
    }

    h1{
        font-size: 2.2rem;
    }
    h2{
        font-weight: 400;
        font-size: 2.6rem;
    }
}


@media ${responsives.tabletS}{
    .mySwiper{
        width: 180rem;
        margin-left: -82rem;
    }
}


@media ${responsives.laptop}{
    margin-left: -30rem;

    .mySwiper{
        width: 250rem;
    }
    .mealsActive{
        width: 28rem;
        padding: 3rem;
    }
    #snack{
        width: 12.5rem;
        height: 12.5rem;
        margin-bottom: -4rem;
    }

    h1{
        font-size: 2rem;
    }
    h2{
        font-weight: 400;
        font-size: 2.4rem;
    }


    
.swiper-button-disabled {
    display: none;
}
.swiper-button-next,
.swiper-button-prev {
  display: block;
  position: absolute;
}


.swiper-button-prev{
    left: 115rem;
}
.swiper-button-next{
    right: 18rem;
}


.mySwiper{
    gap: 1rem;
}
}


@media ${responsives.laptopL}{
    width: 100%;

    .mySwiper{
        width: 100%;
        min-width: 190rem;
        margin-left: -55rem;
    }
    .mealsActive.not-admin{
        min-width: 30rem;
        max-width: 32rem;
        min-height: 44rem;
        padding: 2rem 4rem 0rem 4rem;
    }
    .mealsActive.admin{
        width: 30rem;
        min-height: 42rem;
        padding: 4rem;
    }

    #snack{
        width: 15.5rem;
        height: 15.5rem;
        margin-bottom: -4rem;
    }

    
    #edit{
        width: 4rem;
    }
    #includs{
        display: flex;
        flex-direction: row;
        gap: 2rem;

        >button{
            margin-top: 1rem;
            width: 100%;
            padding: 2rem 2rem;
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
        }

        h3{
            font-family: 'Poppins', sans-serif;
            font-size: 2.5rem;

        }
    }
    h1{
        font-size: 2.5rem;
    }
    h2{
        font-weight: 400;
        font-size: 2.8rem;
    }
    p{  
        margin-top: 0.5rem;
        line-height: 2rem;
         display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
         overflow: hidden;
         text-align: center;
        
    }

    .swiper-button-prev{
        left: 83rem;
    }
    .swiper-button-next{
        right: 0;
    }
}

@media (min-width: 1440px){
    .mySwiper{
        margin-left: -50rem;
    }



    .swiper-button-prev{
        left: 82rem;
    }
}

@media ${responsives.desktop}{
    .mySwiper{
        width: 100%;
        min-width: 260rem;
        margin-left: -80rem;
    }
    .mealsActive.not-admin{
        min-width: 38rem;
        max-width: 40rem;
        min-height: 65rem;
        padding: 2rem 5rem 3rem 5rem;
    }

    .mealsActive.admin{
        min-width: 38rem;
        max-width: 40rem;
        min-height: 65rem;
        padding: 2rem 5rem 3rem 5rem;
    }

    #snack{
        width: 25.5rem;
        height: 25.5rem;
        margin-bottom: -6rem;
    }
    #edit{
        width: 5rem;
    }
    
    
    #includs{
        img{
            width: 3.3rem;
        }
        >button{
            font-size: 2.5rem;
        }

        h3{
            font-size: 3rem;
        }
    }
    h1{
        font-size: 3.8rem;
        margin-bottom: 2rem;
    }
    h2{
        margin-top: 2rem;
        font-weight: 400;
        font-size: 4rem;
    }
    p{
        line-height: 3rem;
        font-size: 2.4rem;
    }

    .swiper-button-prev{
        left: 115rem;
    }
}
`
