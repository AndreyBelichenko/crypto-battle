import * as React from 'react';
import Link from 'next/link';

import headerItem from '../../../constants/headerItem';

import { Item } from './styledComponent';

const LinkIt = () => {
  return(
  headerItem.map(item => (
    <Link key={item.idItem} as={`/${item.path}`} href={`/${item.name}`}>
      <Item key={item.idItem}>{item.name}</Item>
    </Link>
  ))
  );
};

export default LinkIt;
