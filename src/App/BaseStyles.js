import { createGlobalStyle } from "styled-components";
import bg from "../assets/images/bg.png";
const BaseStyles = createGlobalStyle`

html, body, *{
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f3f3f3b8;
  min-width: 320px;
  background: url(${bg}) 0 0 repeat;
  background-size: 40%;

 @media (max-width:768px) {
     background-size: 70%;
  }

  @media (max-width:480px) {
     background-size: 100%;
  }


}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

a {
    display: block;
    text-decoration: none;
    font-size: 18px;
    font-weight: normal;
    margin-top: 2rem;
    color: #15920c;
}

h2.notfound {
    width: 100%;
    text-align: center;
    color: #3498db;
    font-size: 3rem;
    height: 58vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

a:hover {
    color: #3498db;
    text-decoration: underline;
}

`;

export default BaseStyles;
