import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: #fcfaf3;
        min-height: 100vh;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
    }

    img {
        max-width: 100%;
        display: block;
    }

    .container {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        padding: 0 16px;
    }
`;