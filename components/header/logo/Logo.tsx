import * as React from 'react';

import { LogoWrapper, Label, LogoImage } from './styledComponents';

const Logo: React.FC = () => {
  return(
        <LogoWrapper>
                <LogoImage  src="./static/logo.svg"/>
            <Label>
                Crypto battle
            </Label>
        </LogoWrapper>
  );
};

export default Logo;
