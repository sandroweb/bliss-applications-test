import { ButtonHTMLAttributes } from 'react';

export type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: 'primary' | 'secondary';
};

export type ButtonProps = Omit<StyledButtonProps, 'color'> & {
  color?: StyledButtonProps['color'];
};
