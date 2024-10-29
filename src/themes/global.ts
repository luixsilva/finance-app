import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body{
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Inter, sans-serif';
}
a{
    text-decoration: none;
    color: inherit;
}
*{
    box-sizing: border-box;
}
`;
