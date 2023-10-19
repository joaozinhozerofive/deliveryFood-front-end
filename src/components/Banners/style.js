import styled from 'styled-components'
import { responsives } from '../../Configs'

export const Container = styled.div`

        background: ${({theme}) => theme.COLORS.BACKGROUND_500};  
        color: ${({theme}) => theme.COLORS.WHITE} ;
        display: flex;
        align-items: center;
        position: relative;
        height: 12rem;
        border-radius: 0.3rem;
        margin-top: 16rem;
        padding-right: 1rem;
        

        

.banner-desktop{
    display: none;
}       
img{
    position: absolute;
    bottom: 0;
    width: 18rem;
    height: 14rem;
    left: -2.3rem;

}

>.writing{
        gap: 1rem ;
        margin-left: 15rem;
        margin-top: -1rem;
        >h1{
            white-space: nowrap;
             font-family: 'Poppins', sans-serif;
             font-weight: 400;
             font-size: 1.5rem;
             
         } 
         >p{
            white-space: nowrap;
             font-size: .97rem;
             font-family: 'Poppins', sans-serif;
             font-weight: 400;
             color: ${({theme}) => theme.COLORS.LIGHT};
         }
}


@media ${responsives.mobileS}{
    height: 13rem;
    img{
    width: 22rem;
    height: 15rem;
    bottom: -0.05rem;
    left: -3.5rem;

}

>.writing{
        margin-left: 16rem;
        margin-top: -1rem;
        >h1{
             font-family: 'Poppins', sans-serif;
             font-weight: 400;
             font-size: 1.7rem;
             
         } 

         p{
            font-size: 1rem;
         }
}


}
@media ${responsives.mobileM}{
    margin-top: 17rem;
    .writing{
        margin-left: 18rem;
    }
    img{
        width: 23rem;
        height: 16rem;
        left: -3.7rem;
    }
}
@media ${responsives.mobileL}{
    height: 15rem;
    img{
    width: 24rem;
    height: 18rem;
    left: -3.2rem;

}

>.writing{
        margin-left: 20rem;
        margin-top: -1rem;
        >h1{
             font-family: 'Poppins', sans-serif;
             font-weight: 400;
             font-size: 1.8rem;
             
         } 

         >p{
            font-size: 1.1rem;
            white-space: nowrap;
         }
}

}

@media ${responsives.tabletS}{
    margin-top: 18rem;
    height: 16rem;

    img{
        width: 25rem;
    }
    >.writing{
        margin-top: -1rem;
        >h1{
             font-size: 2.2rem;
         } 

         >p{
            font-size: 1.5rem;
         }
}

}

@media ${responsives.tablet}{
    height: 17rem;
    margin-top: 20rem;

    img{
        width: 40rem;
        height: 24rem;
        margin-left: -4rem;
    }
    >.writing{
        margin-left: 32rem;
        >h1{
             font-size: 3rem;
         } 

         >p{
            font-size: 1.9rem;
            br{
                display: block;
            }
         }
}

}
@media ${responsives.laptop}{
    height: 20rem;
    margin-top: 24rem;

    img{
        width: 45rem;
        height: 30rem;
    }
    >.writing{
        margin-left: 37rem;
        >h1{
             font-size: 3.7rem;
         } 

         >p{
            font-size: 1.3rem;
            br{
                display: none;
            }
         }
}

}

@media ${responsives.laptopL}{
    height: 25rem;
    margin-top: 23rem;

    .banner-desktop{
        display: block;
    }
    .banner-mobile{
        display: none;
    }

    img{
        margin-left: -6rem;
        width: 56rem;
        height: 35rem;
        margin-bottom: 0;
    }
    >.writing{
        margin-left: 45rem;
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
    margin-top: 35rem;
    img{
        margin-left: -15rem;
        width: 101rem;
        height: 40em;
        bottom: 0rem;
        
    }
    >.writing{
        margin-left: 75rem;
        >h1{
             font-size: 7rem;
         } 

         >p{
            font-size: 2.5rem;
            br{
                display: none;
            }
         }
}
}




        
`
