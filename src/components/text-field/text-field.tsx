import { StyledInput } from './text-field.styled';
import { TextFieldProps } from './text-field.type';

export const TextField = (props: TextFieldProps) => {
  return <StyledInput type="text" {...props} />;
};
