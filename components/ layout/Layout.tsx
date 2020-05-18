import * as React from 'react';

import{ LayoutWrapper, LayoutContentWrapper } from './styledComponents';

const Layout: React.FC = () => {
  return(
        <LayoutWrapper>
            <LayoutContentWrapper>
                I am Layout
            </LayoutContentWrapper>
        </LayoutWrapper>
  );
};

export default Layout;
