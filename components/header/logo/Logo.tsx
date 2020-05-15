import * as React from 'react';
import {LogoWrapper, ImageWrapper, LabelWrapper} from './styledComponents';
import {Image} from 'semantic-ui-react';
import logo from '../../../constans/image';

const Logo: React.FC = () => {
    return(
        <LogoWrapper>
            <ImageWrapper>
            <Image src={logo}/>
            </ImageWrapper>
            <LabelWrapper>
                Crypto battle
            </LabelWrapper>
        </LogoWrapper>
    )
};

export default Logo;