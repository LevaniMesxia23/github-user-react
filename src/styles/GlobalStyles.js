import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: "Space Mono", monospace;
    background: #F6F8FF;
  }
`;
