import styled from "styled-components";


export const Container = styled.div`
width: 100%;


h1{
    font-weight: 400;
    margin-bottom: 1rem;
}


.hidden{
    display: none;
}

.selected{
    background-color: #808e95;
}


table{
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT};
    border-radius: 0.5rem;
    padding-bottom: 1rem;
    
    
    
    tbody{
    min-width: 30rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;


    
}

.pixQrCode{
    padding: 6rem 4rem 4rem 4rem;
    #imgQrCode{
        width: 100%;
        height: 100%;
    }
}



    thead{
        display: flex;


        p{
            padding: 2rem;
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 1rem;
            border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT}; 
            font-family: 'Roboto', sans-serif;

        }

        p:nth-child(1){
            border-right: 1px solid ${({theme}) => theme.COLORS.LIGHT}; 
        }
    }

    input{
        min-width: 25rem;
        display: flex;
        text-align: center;
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};;
        background-color: transparent;
        border: 1px solid ${({theme}) => theme.COLORS.LIGHT};
        border-radius: 0.3rem;
        padding: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    
    
    #validity::-webkit-datetime-edit {
         color: ${({theme}) => theme.COLORS.WHITE};; 
    }
    
    
    
    
}


`