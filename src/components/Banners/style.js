import styled from 'styled-components'
import { responsives } from '../../Configs'

export const Container = styled.div`

        background: ${({theme}) => theme.COLORS.BACKGROUND_500};  
        color: ${({theme}) => theme.COLORS.WHITE} ;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 12rem;
        border-radius: 0.3rem;
        margin: 16rem 1rem 0rem 1rem;
        padding-right: 1rem;
        

        

.banner-desktop{
    display: none;
}       
img{
    position: absolute;
    bottom: 0;
    left: -2.1rem;

}

>.writing{
        gap: 1rem ;
        margin-left: 15rem;
        margin-top: -6rem;
        >h1{
            white-space: nowrap;
             font-family: 'Poppins', sans-serif;
             font-weight: 400;
             font-size: 1.5rem;
             
         } 
         >p{
             font-size: 1rem;
             font-family: 'Poppins', sans-serif;
             font-weight: 400;
             color: ${({theme}) => theme.COLORS.LIGHT};
         }
}


@media ${responsives.mobileS}{
    height: 13rem;
    img{
    width: 20rem;
    bottom: -0.05rem;
    left: -2.1rem;

}

>.writing{
        margin-left: 16rem;
        margin-top: -7rem;
        >h1{
             font-family: 'Poppins', sans-serif;
             font-weight: 400;
             font-size: 1.4rem;
             
         } 

         p{
            font-size: 0.9rem;
         }
}


}
@media ${responsives.mobileM}{
    margin-top: 17rem;
    img{
        width: 22rem;
    }
}
@media ${responsives.mobileL}{
    height: 15rem;
    img{
    width: 23rem;
    left: -3.1rem;

}

>.writing{
        margin-left: 18rem;
        margin-top: -7rem;
        >h1{
             font-family: 'Poppins', sans-serif;
             font-weight: 400;
             font-size: 1.7rem;
             
         } 

         >p{
            font-size: 1.2rem;
         }
}

}

@media(min-width: 520px){
    margin-top: 18rem;
    height: 16rem;

    img{
        width: 25rem;
    }
    >.writing{
        margin-top: -7rem;
        >h1{
             font-size: 2.2rem;
         } 

         >p{
            font-size: 1.5rem;
            br{
                display: block;
            }
         }
}

}

@media ${responsives.tablet}{
    height: 17rem;
    margin-top: 18rem;

    img{
        width: 27rem;
    }
    >.writing{
        margin-left: 22rem;
        margin-top: -7rem;
        >h1{
             font-size: 3rem;
         } 

         >p{
            font-size: 1.6rem;
            br{
                display: none;
            }
         }
}

}
@media ${responsives.laptop}{
    height: 20rem;
    margin-top: 19rem;

    img{
        width: 33rem;
    }
    >.writing{
        margin-left: 10rem;
        margin-top: -7rem;
        >h1{
             font-size: 3.4rem;
         } 

         >p{
            font-size: 1.8rem;
            br{
                display: none;
            }
         }
}

}

@media ${responsives.laptopL}{
    height: 25rem;
    margin: 23rem 12rem 0rem 12rem;

    .banner-desktop{
        display: block;
    }
    .banner-mobile{
        display: none;
    }

    img{
        margin-left: -5rem;
        width: 56rem;
        margin-bottom: 0;
    }
    >.writing{
        margin-left: 25rem;
        margin-top: -7rem;
        >h1{
             font-size: 4.8rem;
         } 

         >p{
            font-size: 1.65rem;
            br{
                display: none;
            }
         }
}
}
@media ${responsives.desktop}{
    height: 45rem;
    margin: 38rem 15rem 0rem 15rem;

    img{
        margin-left: -6rem;
        width: 101rem;
    }
    >.writing{
        margin-top: -15rem;
        margin-left: 28rem;
        >h1{
            
             font-size: 10rem;
         } 

         >p{
            font-size: 3.5rem;
            br{
                display: none;
            }
         }
}
}




        
`
