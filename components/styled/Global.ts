import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.font};
   
    margin: 0;
    padding: 2rem;
    transition: all 0.3s ease;
  }
`;

export default GlobalStyles;
