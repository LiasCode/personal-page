import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`

    html {
        font-size: 18px;
        font-family: consolas;
        color : #fff;
    }
    body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    #app-root {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;

        background: #134E5E;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to top, #71B280, #134E5E);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #71B280, #134E5E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        display: flex;
        flex-direction: column;        
        align-items: center;
        justify-content: center;
    }

`;