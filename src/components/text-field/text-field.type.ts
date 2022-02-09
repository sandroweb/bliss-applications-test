import { InputHTMLAttributes } from 'react';

export type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  error?: boolean;
};
