import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { createContext, useState, useEffect } from 'react';
// internal imports
import { darkTheme, lightTheme } from '../theme';
import GlobalStyles from '../components/styled/Global';

// global state
export const GlobalState = createContext({
  theme: 'light',
  toggle: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    setTheme(currentTheme ? 'dark' : 'light');
  }, []);

  // ------------------ theme toggle -----------------
  const toggleHandler = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <GlobalState.Provider value={{ theme, toggle: toggleHandler }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalState.Provider>
  );
}
export default MyApp;
