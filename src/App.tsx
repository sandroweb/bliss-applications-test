import { FC } from 'react';

import { HealthCheck } from 'components/health-check';
import { ThemeProvider } from 'components/theme-provider';

import 'normalize.css';

export const App: FC = ({ children }) => {
  return (
    <div className="App">
      <ThemeProvider>
        <HealthCheck />
        {children}
      </ThemeProvider>
    </div>
  );
};
