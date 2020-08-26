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
`;
export default GlobalStyle;