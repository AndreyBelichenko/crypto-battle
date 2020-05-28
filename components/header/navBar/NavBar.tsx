import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headerItem } from '../../../constants/itemConstants';

import { NavBarMenu, LinkItem } from './styledComponents';

const NavBar: React.FC = () => {
  const route = useRouter();
  const activeLink = (path: string) => path === route.pathname;

  return (
    <NavBarMenu>
      {headerItem.map((item) => (
        <Link href={item.path} key={item.idItem}>
          <LinkItem theme={{ active: activeLink(item.path) }}>{item.name}</LinkItem>
        </Link>
      ))}
    </NavBarMenu>
  );
};

export default NavBar;
