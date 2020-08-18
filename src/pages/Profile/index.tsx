import React, { useEffect } from 'react';

import { Container } from './styles';

const Profile: React.FC = () => {
  useEffect(() => {
    console.log('acessou');
  }, []);

  return (
    <Container>
      <span>Profile</span>
    </Container>
  );
};

export default Profile;
