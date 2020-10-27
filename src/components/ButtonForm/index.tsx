import React from 'react';

import { Container } from './styles';

import { IButtonProps } from './Props';

const ButtonForm: React.FC<IButtonProps> = ({
  children,
  background,
  ...rest
}) => (
  <Container type="button" {...rest} background={background || 'purple'}>
    {children}
  </Container>
);

export default ButtonForm;
