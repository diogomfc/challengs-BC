import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      height: 100%;
      font-size: 62.5%; // 10px
  }

  *, button, input {
      border: 0;
      outline: 0;
      font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  }

  ul {
      list-style: none;
  }

  button{
      cursor: pointer;
  }

`

export default GlobalStyle
