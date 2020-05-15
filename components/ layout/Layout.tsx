import * as React from 'react';

import Header from '../header/Header';

import{ LayoutWrapper, LayoutHeader, LayoutContentWrapper } from './styledComponents';

const Layout: React.FC = () => {
  return(
        <LayoutWrapper>
            <LayoutHeader>
                <Header/>
            </LayoutHeader>
            <LayoutContentWrapper>
                I am layout
            </LayoutContentWrapper>
        </LayoutWrapper>
  );
};

export default Layout;
