import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonForm: React.FC<IButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default ButtonForm;
