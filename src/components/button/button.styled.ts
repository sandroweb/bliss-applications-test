import styled from 'styled-components';

import { ButtonProps } from './button.type';

export const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  background: ${({ theme, color }) => theme.palette[color].main};
  border: 0;
  border-radius: 5px;
  color: ${({ theme, color }) => theme.palette[color].contrastText};
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 15px;
  padding: 10px 15px;
  &:hover {
    background: ${({ theme, color }) => theme.palette[color].light};
  }
  &:active {
    background: ${({ theme, color }) => theme.palette[color].dark};
  }
`;
