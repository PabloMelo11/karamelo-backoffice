import React from 'react';

import Skeleton from '../../Skeleton';

import {
  ContentMain,
  ContentInformations,
  ContentInformationsMain,
  MainInformations,
  FormInformations,
  ContentForm,
  Row,
} from './styles';

export const LoadingProfile: React.FC = () => {
  return (
    <ContentMain>
      <ContentInformations>
        <MainInformations>
          <Skeleton className="avatar" />

          <Skeleton className="description" />
        </MainInformations>
      </ContentInformations>
    </ContentMain>
  );
};

export const LoadingProfileContent: React.FC = () => {
  return (
    <ContentInformationsMain>
      <FormInformations>
        <Skeleton className="header" />
        <ContentForm>
          <Row>
            <Skeleton className="inputs" />
            <Skeleton className="inputs" />
            <Skeleton className="inputs" />
          </Row>

          <Row style={{ marginTop: 60 }}>
            <Skeleton className="inputs" />
            <Skeleton className="inputs" />
            <Skeleton className="inputs" />
          </Row>

          <Row style={{ marginTop: 60 }}>
            <Skeleton className="inputs" />
            <Skeleton className="inputs" />
          </Row>

          <Skeleton className="button-update" />
        </ContentForm>
      </FormInformations>
    </ContentInformationsMain>
  );
};
