import React from "react";
import Main from "./components/Header/Main";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); 
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    @font-face {
      font-family:'Hurme' ;
      src: url(HurmeGeometricSans1.otf);
    }
    body{
      font-family: Hurme; 
    }
    li {
      list-style-type: none;
    }
`

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
    </div>
  )
}



