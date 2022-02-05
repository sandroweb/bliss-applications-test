import { FC } from 'react';

import {
  ThemeProvider as StThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import { theme } from './theme-default';

const GlobalStyle = createGlobalStyle(() => {
  return {
    '*': {
      boxSizing: 'border-box',
    },
    body: {
      fontFamily: theme.font,
    },
  };
});

export const ThemeProvider: FC = ({ children }) => (
  <StThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StThemeProvider>
);
