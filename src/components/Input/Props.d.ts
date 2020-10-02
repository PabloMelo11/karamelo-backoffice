import { Props as InputProps } from 'react-input-mask';
import { IconBaseProps } from 'react-icons';

export type IContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  borderColor?: 'purple' | 'primary';
};

export type IInputProps = InputProps & {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  containerStyle?: object;
  stylesInput?: object;
  borderColor?: 'purple' | 'primary';
};
