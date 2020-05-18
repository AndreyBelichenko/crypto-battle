import * as React from 'react';

import headerItem from '../../../constants/headerItem';
import Link from '../link/Link';

import { NavBarWrapper } from './styledComponents';

const NavBar: React.FC = () => {
  return (
    <NavBarWrapper>
      {headerItem.map((item, index) => (
        <Link key={item.idItem} name={item.name} path={item.path} />
      ))}
    </NavBarWrapper>
  );
};

export default NavBar;
