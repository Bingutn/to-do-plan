import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
--color-main: #faf9f6;
--color-sub: #edeade;
--color-text: #776B5D;
--text-hover: #994D1C;
--hover-1: #f7b787;
--shadow-1: #B0A695;
--button-bg1: #FAE7C9;

--bg-submit: #EBF3E8;
--color-submit: #5F6F52;

--bg-del: #B2C8BA;
--del-hover: #b6bbc4;
--color-del: #FEFAE0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Rethink Sans', sans-serif;

  min-height: 100svh;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;

}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

`;

export default GlobalStyles;
