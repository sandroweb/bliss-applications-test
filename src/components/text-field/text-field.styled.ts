import styled from 'styled-components';

import { TextFieldProps } from './text-field.type';
export const StyledInput = styled.input<TextFieldProps>`
  border: ${({ theme }) => `1px solid ${theme.palette.grey[400]}`};
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: 3px;
  height: 55px;
  padding: 0 10px;
  font-size: 16px;
  transition: box-shadow 100ms ease-in-out;
  &:focus {
    box-shadow: ${({ theme }) => `0 0 0 1px ${theme.palette.primary.main}`};
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
