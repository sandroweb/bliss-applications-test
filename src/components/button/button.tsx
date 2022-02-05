import { FC } from 'react';

import { StyledButton } from './button.styled';
import { ButtonProps } from './button.type';

export const Button: FC<ButtonProps> = ({ children, color, ...props }) => {
  <button></button>;
  return (
    <StyledButton {...props} color={color}>
      {children}
    </StyledButton>
  );
};
