"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 50%;
  }
  h1{
    font-size: 4rem
  }
  h2{
    font-size: 2.8rem
  }
  h3{
    font-size: 2.2rem
  }
  h4{
    font-size: 1.8rem
  }
  h5{
    font-size: 1.4rem
  }

  @media screen and (min-width: 769px) {
    html{
      font-size:62,5%;
    }
  }
`;
