import React from 'react';

import Skeleton from '../../Skeleton';

import { Container } from './styles';

export const LoadingUserContent: React.FC = () => {
  return (
    <Container>
      <Skeleton className="list-users" />
      <Skeleton className="list-users" />
      <Skeleton className="list-users" />
      <Skeleton className="list-users" />
      <Skeleton className="list-users" />
      <Skeleton className="list-users" />
      <Skeleton className="list-users" />
      <Skeleton className="list-users" />
      <Skeleton className="list-users" />
    </Container>
  );
};
