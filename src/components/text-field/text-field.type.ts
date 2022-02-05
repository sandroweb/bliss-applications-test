import { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
};
