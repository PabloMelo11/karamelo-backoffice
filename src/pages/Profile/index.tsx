import React, { useEffect } from 'react';

import { Container } from './styles';

const Profile: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <h1>Profile</h1>
    </Container>
  );
};

export default Profile;
