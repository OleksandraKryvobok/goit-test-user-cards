import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';


export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #EBD8FF;
        background-color: #ffffff;
    };

    /* h1 {
        margin: 0 0 18px 0;
        font-size: 28px;
    } */

    /* img {
        display: block;
        max-width: 100%;
        height: auto;
    } */

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    };

    p {
        margin: 0;
    }
`;