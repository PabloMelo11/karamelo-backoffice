import React from 'react';

import Skeleton from '../../Skeleton';

import { Container, ContainerGrid, Row } from './styles';

export const LoadingUserContent: React.FC = () => {
  return (
    <Container>
      <Skeleton className="li-users" />
      <Skeleton className="li-users" />
      <Skeleton className="li-users" />
      <Skeleton className="li-users" />
      <Skeleton className="li-users" />
      <Skeleton className="li-users" />
      <Skeleton className="li-users" />
      <Skeleton className="li-users" />
      <Skeleton className="li-users" />
    </Container>
  );
};

export const LoadingDetailsUser: React.FC = () => {
  return (
    <ContainerGrid>
      <div className="perfil">
        <div className="header">
          <Skeleton className="title" />
        </div>

        <Row>
          <Skeleton className="input" />
          <Skeleton className="input" />
        </Row>

        <Row>
          <Skeleton className="input" />
          <Skeleton className="input" />
        </Row>

        <Row>
          <Skeleton className="input" />
          <Skeleton className="input" />
        </Row>
      </div>

      <div className="orders">
        <div className="header">
          <Skeleton className="title" />
        </div>
        <Skeleton className="li" />
        <Skeleton className="li" />
        <Skeleton className="li" />
      </div>

      <div className="products">
        <div className="header">
          <Skeleton className="title" />
        </div>

        <Skeleton className="li" />
        <Skeleton className="li" />
        <Skeleton className="li" />
      </div>

      <div className="categories">
        <div className="header">
          <Skeleton className="title" />
        </div>

        <Skeleton className="li" />
        <Skeleton className="li" />
        <Skeleton className="li" />
      </div>
    </ContainerGrid>
  );
};
