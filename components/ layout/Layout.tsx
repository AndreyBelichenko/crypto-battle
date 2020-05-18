import * as React from 'react';

import Header from '../header/Header';

import{ LayoutWrapper, LayoutContentWrapper, LayoutHeader } from './styledComponents';

const Layout: React.FC = () => {
  return(
        <LayoutWrapper>
          <LayoutHeader>
            <Header/>
          </LayoutHeader>
            <LayoutContentWrapper>
                I am Layout
            </LayoutContentWrapper>
        </LayoutWrapper>
  );
};

export default Layout;
