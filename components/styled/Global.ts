import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }
  body {
    background: ${({ theme }: any) => theme.colors.body};
    color: ${({ theme }: any) => theme.colors.font};
   
    margin: 0;
    padding: 2rem;
    transition: all 0.3s ease;
  }
`;

export default GlobalStyles;
