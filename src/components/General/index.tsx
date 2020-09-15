import React from 'react';

import MainModal from '../MainModal';

import { Container } from './styles';

const General: React.FC = ({ children }) => {
  return (
    <Container>
      <MainModal
        containerStyles={{ height: '100%', maxHeight: '867px' }}
        headerStyle={{ height: '64px' }}
        headerBackgroundColor="red"
        isCrud
      >
        {children}
      </MainModal>
    </Container>
  );
};

export default General;
