import * as React from 'react';

import Header from '../header/Header';

import Sidebar from '../sidebar/Sidebar';

import{ LayoutWrapper,
    LayoutHeader,
    LayoutContentWrapper,
    LayoutSidebar,
    LayoutMainContent} from './styledComponents';

const Layout: React.FC = () => {
  return(
        <LayoutWrapper>
            <LayoutHeader>
                <Header/>
            </LayoutHeader>
            <LayoutSidebar>
                <LayoutContentWrapper>
                <Sidebar/>
                </LayoutContentWrapper>
                <LayoutMainContent>
                    <div >Request</div>
                </LayoutMainContent>
                <LayoutContentWrapper>
                <Sidebar/>
            </LayoutContentWrapper>
        </LayoutSidebar>
        </LayoutWrapper>
  );

};

export default Layout;
