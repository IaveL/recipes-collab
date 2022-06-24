import React from "react";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Recipes from "./components/Recipes/Recipes";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer"
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
    <>
      <GlobalStyle />
      <Main />
      <Recipes />  
      <About />
      <Subscribe/>
      <Footer/>
    </>
  )
}



