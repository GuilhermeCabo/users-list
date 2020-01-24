import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Arial', sans-serif
  }

  *:focus {
    outline: 0;
    background: transparent;
  
  }

  html, body, #root {
    min-height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
`;
