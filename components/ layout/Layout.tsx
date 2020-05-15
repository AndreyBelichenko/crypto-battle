import * as React from 'react';
import{LayoutWrapper, LayoutHeader, LayoutContentWrapper} from './styledComponents';
import Header from '../header/Header';

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
    )
};

export default Layout;