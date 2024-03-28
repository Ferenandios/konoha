import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: 'Roboto', sans-serif;
    color: #0A0A0A;
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
  }

  h1, h3 {
    font-weight: 700;
  }

  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }
  
`;
export const GlobalContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
