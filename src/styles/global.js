import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
      --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus{
        outline:0;
    }
    html, body, #root {
        height: 100%;
        width: 100%;
        color: #fff;
    }
    body{
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`;
