import * as React from 'react';

import{ LayoutWrapper, LayoutContentWrapper } from './styledComponents';

const Layout: React.FC = () => {
  return(
        <LayoutWrapper>
            <LayoutContentWrapper>
                I am layout
            </LayoutContentWrapper>
        </LayoutWrapper>
  );
};

export default Layout;
