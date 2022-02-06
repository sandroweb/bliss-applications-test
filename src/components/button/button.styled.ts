import styled from 'styled-components';

import { StyledButtonProps } from './button.type';

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${({ theme, color }) => theme.palette[color].main};
  border-radius: 5px;
  border: 0;
  color: ${({ theme, color }) => theme.palette[color].contrastText};
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  margin-bottom: 15px;
  padding: 10px 15px;
  transition: background 200ms ease-in-out;
  &:hover {
    background: ${({ theme, color }) => theme.palette[color].light};
  }
  &:active {
    background: ${({ theme, color }) => theme.palette[color].dark};
  }
  &[disabled] {
    background: ${({ theme }) => theme.palette.grey[500]};
    pointer-events: none;
    user-select: none;
  }
`;
