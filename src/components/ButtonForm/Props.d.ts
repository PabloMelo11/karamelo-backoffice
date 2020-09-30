import { ButtonHTMLAttributes } from 'react';

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  background?: 'purple' | 'red';
};
