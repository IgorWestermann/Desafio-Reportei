import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }

  body {
    background-color: #F9F8F8;
    font-family: 'Roboto', sans-serif;

  }
  #root {
    padding: 40px 0px;
  }
  button {
    cursor: pointer;
  }
`