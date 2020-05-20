import * as React from 'react';

import Header from '../header/Header';

import{ LayoutWrapper, LayoutContentWrapper } from './styledComponents';

const Layout: React.FC = () => {
  return(
        <LayoutWrapper>
            <Header/>
            <LayoutContentWrapper>
                I am Layout
            </LayoutContentWrapper>
        </LayoutWrapper>
  );
};

export default Layout;
