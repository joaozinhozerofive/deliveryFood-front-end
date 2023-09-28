import styled from 'styled-components'

export const Container = styled.div`

        background: ${({theme}) => theme.COLORS.BACKGROUND_500};  
        color: ${({theme}) => theme.COLORS.WHITE} ;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 1.5rem;
        position: relative;
        height: 26rem;
        border-radius: 0.8rem;
        margin-top: 25.2rem ;
        

        

        
img{
    width: 61rem;
    position: absolute;
    bottom: -0.1rem;
    left: -5.1rem;

}

>.writing{
        display: flex;
        flex-direction: column;
        gap: 0.8rem ;
        margin-left: 59.7rem;
        margin-right:10.2rem;
        margin-bottom: 9.3rem;
        >h1{
            white-space: nowrap;
             font-size: 3.5rem;
             font-family: 'Poppins', sans-serif;
             font-weight: 500;
         } 
         >p{
             font-size: 1.3rem;
             font-family: 'Roboto', sans-serif;
             font-weight: 400;
         
             color: ${({theme}) => theme.COLORS.LIGHT};
         
         }
}

    
        @media (max-width: 1330px){
            >.writing{
                margin-left: 30rem;
            }
            img{
                width: 55rem;
                height: 34rem;
                left: -9.5rem;
            }
            div:first-child{
            }
        }
        @media (max-width: 1290px){
            height: 25rem;
            >.writing{
                margin-left: 30rem;
            }
            img{
                width: 54rem;
                left: -9.5rem;
            }
            div:first-child{
            }
        }

        @media (max-width: 1229px){
            height: 24rem;
            >.writing{
                margin-left: 45rem;
                >h1{
                 white-space: nowrap;
                 font-size: 3.3rem;
                 font-family: 'Poppins', sans-serif;
                 font-weight: 500;
                } 
                 
         >p{
             font-size: 2rem;
             font-family: 'Poppins', sans-serif;
             font-weight: 400;
         
         }
            }
        }
        @media (max-width: 1051px){
            margin-top: 23.2rem;
            height: 23rem;
            
            
            >.writing{
                margin-left: 45rem;
                >h1{
                 font-size: 2.5rem;
                } 

                >p{
                    font-size: 1.4rem;
                }

            }
        }
        @media (max-width: 950px){
            margin-top: 20.2rem;
            height: 22rem;
                 
            img{
            width: 47rem;
            height: 30rem;
            
        }
            
            >.writing{
                margin-top: 2rem;
                margin-left: 34rem;

                >h1{
                 font-size: 2.2rem;
                } 

                >p{
                    font-size: 1.1rem;
                }

            }
        }
        @media (max-width: 900px){
            height: 20rem;
                 
            img{
            width: 47rem;
            height: 27rem;
            
        }
            
            >.writing{
                margin-left: 34rem;

                >h1{
                 font-size: 2rem;
                } 

                >p{
                    font-size: 0.9rem;
                }

            }
        }
        
        @media (max-width: 800px){
            margin-top: 18rem;
            height: 18rem;
                 
            img{
            width: 38rem;
            height: 24rem;
            
        }
            
            >.writing{
                margin-left: 28rem;

                >h1{
                 font-size: 2rem;
                } 

                >p{
                    font-size: 0.9rem;
                }

            }
        }
        
        @media (max-width: 750px){
            margin-top: 16rem;
                height: 14rem;
            img{
            width: 32rem;
            height: 18rem;
            
        }
            
            >.writing{
                margin-left: 29rem;
                margin-right: 12rem;

                >h1{
                 font-size: 1.7rem;
                } 

                >p{
                    font-size: 0.5rem;
                }

            }
        }
        


        
`
