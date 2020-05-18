import * as React from 'react';
import LinkIt from '../link/Link';

import { NavBarWrapper } from './styledComponents';

const NavBar: React.FC = () => {
  return(
     <NavBarWrapper>
       <LinkIt/>
        </NavBarWrapper>
  );
};

export default NavBar;
