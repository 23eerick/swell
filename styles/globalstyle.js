import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  scroll-behavior: smooth;
  background-color: #fff;

  font-family: 'Hammersmith One', sans-serif;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: none;
}

::-webkit-scrollbar-thumb {
  background-color: #ebecf0;
  border-radius: 15px;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export default GlobalStyle;