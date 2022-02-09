import { createContext, FC, useEffect, useState } from 'react';

import { ToastProps } from '../toast.type';

type ToastContextProps = {
  toastData: ToastProps;
  setToastData: (ToastData: ToastProps) => void;
};

const defaultValue: ToastContextProps = {
  toastData: {
    severity: 'info',
    text: '',
  },
  setToastData: () => {},
};

const ToastContext = createContext<ToastContextProps>(defaultValue);

const ToastContextProvider: FC = ({ children }) => {
  const [toastData, setToastData] = useState(defaultValue.toastData);

  useEffect(() => {
    if (toastData.show) {
      setTimeout(() => {
        setToastData((prevToastData) => ({
          ...prevToastData,
          show: false,
        }));
      }, 2000);
    }
  }, [toastData.show]);

  return (
    <ToastContext.Provider value={{ toastData, setToastData }}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastContextProvider };
