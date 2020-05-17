import * as React from 'react';

import { Item } from './styledComponent';

interface IProps {
  name: string;

  path: any;
}

const Link = (props: IProps) => (
    <Item href={props.path}>{props.name}</Item>
);

export default Link;
