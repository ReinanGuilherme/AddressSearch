import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    :root {
        --colorWhite: #fff;
    }

    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {        
        height: 100%;
    }

    body {
        background: linear-gradient(#121212,#212b46) ;
        background-repeat: no-repeat;
        color: var(--colorWhite);
        font-family: Arial, Helvetica, sans-serif;
    }

    button, input, textarea {
        border: 0;
        outline: 0;
        background: transparent;
    }

    
    //classe para manipular elementos do PLACE AUTOCOMPLETE API
    .pac-container {
        
        &::after {
            display: none;
        }
    }

    //classe para manipular elementos do PLACE AUTOCOMPLETE API
    .pac-item {
        background: black;
        color: white;

        span {
            color: white;
        }

        //ajustando as cores de exibição dos elementos no hover
        &:hover {

            span {
                background-color: #fff;
                color: black;
            }
        }

    }
`