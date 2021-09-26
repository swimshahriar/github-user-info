import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.font};
    font-family: 'Space Mono', monospace;
    /* font-size: 1.15rem; */
    margin: 0;
    padding: 2rem;
  }
`;

export default GlobalStyles;
