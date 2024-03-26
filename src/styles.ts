import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: 'Roboto', sans-serif;
    color: #0A0A0A;
    margin: 0;
    padding: 0;
  }

  h1, h3 {
    font-weight: 700;
  }
  
`;
export const GlobalContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
