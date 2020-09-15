import { Props as InputProps } from 'react-input-mask';

export type IContainerProps = {
  isErrored: boolean;
  isFocused: boolean;
  isFilled: boolean;
  isValue?: boolean;
  color?: 'purple' | 'green';
  disabled?: boolean;
};

export type IInputProps = InputProps & {
  name: string;
  placeholder?: string;
  color?: 'purple' | 'green';
  disabled?: boolean;
};
