import * as React from 'react';

import { headerItem } from '../../../constants/itemConstants';

import { NavBarMenu, Link } from './styledComponents';

const NavBar: React.FC = () => {
  return (
    <NavBarMenu className="ui secondary menu">
      {headerItem.map((item) => (
        <Link key={item.idItem} className="item navBar">
          {item.name}
        </Link>
      ))}
    </NavBarMenu>
  );
};

export default NavBar;
