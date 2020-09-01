import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export type IContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
};

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
};
