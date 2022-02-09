import { ButtonHTMLAttributes } from 'react';

export type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: 'primary' | 'secondary';
  size: 'medium' | 'large';
};

export type ButtonProps = Omit<StyledButtonProps, 'color' | 'size'> & {
  iconStart?: JSX.Element;
  color?: StyledButtonProps['color'];
  size?: 'medium' | 'large';
  iconEnd?: JSX.Element;
};
