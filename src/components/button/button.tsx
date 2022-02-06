import { FC } from 'react';

import { StyledButton } from './button.styled';
import { ButtonProps } from './button.type';

export const Button: FC<ButtonProps> = ({ children, color, ...props }) => {
  return (
    <StyledButton {...props} color={color}>
      {children}
    </StyledButton>
  );
};
