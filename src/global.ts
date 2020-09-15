import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box}
body {
    min-height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    background: #fafafa;
    color: #333;
}
::-webkit-scrollbar {
    width: 12px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
`;

export default GlobalStyle;
