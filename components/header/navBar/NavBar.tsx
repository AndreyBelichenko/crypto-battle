import * as React from 'react';

import { headerItem } from '../../../constants/itemConstants';

import { NavBarMenu, LinkNavbar } from './styledComponents';

const NavBar: React.FC = () => {
  return (
    <NavBarMenu className="ui secondary menu">
      {headerItem.map((item) => (
        <LinkNavbar key={item.idItem} className="item navBar">
          {item.name}
        </LinkNavbar>
      ))}
    </NavBarMenu>
  );
};

export default NavBar;
