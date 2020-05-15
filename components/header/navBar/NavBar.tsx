import * as React from 'react';

import { NavBarWrapper, ItemWrapper } from './styledComponents';

const NavBar: React.FC = () => {
  return(
        <NavBarWrapper>
            <ItemWrapper>
                Request
            </ItemWrapper>
            <ItemWrapper>
                Battles
            </ItemWrapper>
            <ItemWrapper>
                Story
            </ItemWrapper>
        </NavBarWrapper>
  );
};

export default NavBar;
