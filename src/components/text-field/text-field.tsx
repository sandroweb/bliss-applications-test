import { forwardRef } from 'react';

import { StyledInput } from './text-field.styled';
import { TextFieldProps } from './text-field.type';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return <StyledInput {...props} type="text" ref={ref} />;
  }
);
