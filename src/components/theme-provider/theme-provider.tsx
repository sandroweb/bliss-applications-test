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
      background: theme.palette.grey[100],
      fontFamily: theme.font,
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
  };
});

export const ThemeProvider: FC = ({ children }) => (
  <StThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StThemeProvider>
);
