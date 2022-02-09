import styled from 'styled-components';

import { fadeEffect } from 'helpers/styled/fade';

import { ToastProps } from './toast.type';

export const StyledToast = styled.div<ToastProps>`
  position: fixed;
  z-index: 2;
  top: ${({ theme }) => `${theme.spacing(2)}px`};
  right: ${({ theme }) => `${theme.spacing(2)}px`};
  background: ${({ theme, severity }) => theme.palette[severity].main};
  color: white;
  padding: ${({ theme }) => `${theme.spacing(1)}px ${theme.spacing(2)}px`};
  border-radius: 5px;
  max-width: calc(100% - 60px);
  box-shadow: ${({ theme }) => `1px 1px 5px 0 ${theme.palette.grey[700]}`};
  ${({ show }) => {
    return fadeEffect(show);
  }}
`;
