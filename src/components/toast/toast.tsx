import { useContext } from 'react';

import { ToastContext } from './context/toastContext';
import { StyledToast } from './toast.styled';

export const Toast = () => {
  const { toastData } = useContext(ToastContext);

  return <StyledToast {...toastData}>{toastData.text}</StyledToast>;
};
