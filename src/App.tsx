import { FC } from 'react';

import { HealthCheck } from 'components/health-check';
import { Share, ShareContextProvider } from 'components/share';
import { ThemeProvider } from 'components/theme-provider';
import { Toast, ToastContextProvider } from 'components/toast';

import 'normalize.css';

export const App: FC = ({ children }) => {
  return (
    <div className="App">
      <ThemeProvider>
        <ToastContextProvider>
          <ShareContextProvider>
            <Toast />
            <Share />
            <HealthCheck />
            {children}
          </ShareContextProvider>
        </ToastContextProvider>
      </ThemeProvider>
    </div>
  );
};
