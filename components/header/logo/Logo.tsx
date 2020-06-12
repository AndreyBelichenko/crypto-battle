import * as React from 'react';
import Router from 'next/router';

import { LogoWrapper, Label, LogoImage } from './styledComponents';

const Logo: React.FC = (): any => {
  const handleRoute = () => {
    Router.push('/');
  };

  return (
    <LogoWrapper onClick={handleRoute}>
      <LogoImage src="./static/logo.svg" />
      <Label>Crypto battle</Label>
    </LogoWrapper>
  );
};

export default Logo;
