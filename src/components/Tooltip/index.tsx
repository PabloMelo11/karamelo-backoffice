import React from 'react';

import { Container } from './styles';

interface ITooltipPros {
  title: string;
  className?: string;
}

const Tooltip: React.FC<ITooltipPros> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
