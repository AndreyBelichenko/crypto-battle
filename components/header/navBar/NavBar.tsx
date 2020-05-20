import * as React from 'react';

import headerItem from '../../../constants/headerItem';

import { NavBarWrapper, Link } from './styledComponents';

const NavBar: React.FC = () => {
  return(
     <NavBarWrapper className="ui secondary menu">
       {headerItem.map(item => (
         <Link key={item.idItem}  className="item navBar">{item.name}</Link>
            ))}
        </NavBarWrapper>
  );
};

export default NavBar;
