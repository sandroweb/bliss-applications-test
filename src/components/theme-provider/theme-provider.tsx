import { FC } from 'react';

import { ThemeProvider as StThemeProvider } from 'styled-components';

import { theme } from './theme-default';

export const ThemeProvider: FC = ({ children }) => (
  <StThemeProvider theme={theme}>{children}</StThemeProvider>
);
