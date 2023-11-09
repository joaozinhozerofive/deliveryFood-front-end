import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

input{
    border: none;
}

:root{
    font-size: 62.5%;
}

body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900} ;
        color: white;
        -webkit-font-smoothing:antialiased;
    }

body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none;

}

a{
        text-decoration: none;

}

li{
    list-style: none;
}

button{
    border: none;
}

button, a, img{
        cursor: pointer;
        transition: filter 0.5s;
}
    button:hover, a:hover{
        filter: brightness(0.7);
}

svg{
    cursor: pointer;
}
`
