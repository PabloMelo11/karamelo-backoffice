import React, { memo } from 'react';
import Loader from 'react-loader-spinner';

const Loading: React.FC = () => {
  return <Loader type="Oval" color="#FFF" height={19} width={19} />;
};

export default memo(Loading);
