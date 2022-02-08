import { FC } from 'react';

import { StyledButton } from './button.styled';
import { ButtonProps } from './button.type';

export const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  iconStart,
  iconEnd,
  ...props
}) => {
  return (
    <StyledButton {...props} color={color}>
      {iconStart && <span className="icon icon-start">{iconStart}</span>}
      <span className="text">{children}</span>
      {iconEnd && <span className="icon icon-end">{iconEnd}</span>}
    </StyledButton>
  );
};
