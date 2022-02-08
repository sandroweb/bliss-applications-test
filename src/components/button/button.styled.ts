import styled from 'styled-components';

import { StyledButtonProps } from './button.type';

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${({ theme, color }) => theme.palette[color].main};
  border-radius: 5px;
  border: 0;
  color: ${({ theme, color }) => theme.palette[color].contrastText};
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  padding-top: ${({ theme }) => theme.spacing(0.7)}px;
  padding-right: ${({ theme }) => theme.spacing(1)}px;
  padding-bottom: ${({ theme }) => theme.spacing(0.5)}px;
  padding-left: ${({ theme }) => theme.spacing(1)}px;
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
  .icon {
    font-size: 1.1em;
    &.no-margin {
      margin: 0;
    }
  }
  .icon-start {
    margin-right: ${({ theme }) => theme.spacing(0.4)}px;
  }
  .icon-end {
    margin-left: ${({ theme }) => theme.spacing(0.4)}px;
  }
`;
