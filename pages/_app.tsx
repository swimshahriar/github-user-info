import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
// internal imports
import { darkTheme } from '../theme';
import GlobalStyles from '../components/styled/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
