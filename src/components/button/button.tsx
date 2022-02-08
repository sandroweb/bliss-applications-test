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
      {iconStart && (
        <span className={'icon icon-start' + (children ? '' : ' no-margin')}>
          {iconStart}
        </span>
      )}
      {children && <span className="text">{children}</span>}
      {iconEnd && (
        <span className={'icon icon-end' + (children ? '' : ' no-margin')}>
          {iconEnd}
        </span>
      )}
    </StyledButton>
  );
};
