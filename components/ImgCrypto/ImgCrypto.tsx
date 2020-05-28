import * as React from 'react';

import { Image } from 'semantic-ui-react';

import {
  Content,
  LogoContainer,
  MainContainer,
  ImagePerson,
  ContentImage,
  TextContainer,
  CheckButton,
} from './styledImgCrypto';

interface ImgCryptoProps {
  logo: string;
  person: string;
  name: string;
  mainColor: string;
  selected: number;
  index: number;
  callback: any;
}

const ImgCrypto = (props: ImgCryptoProps) => {
  const isSelected = props.selected === props.index;

  return (
    <MainContainer onClick={props.callback.bind(null, props.index)}>
      <LogoContainer mainColor={props.mainColor}>
        <Image src={props.logo} />
      </LogoContainer>
      {isSelected && (
        <CheckButton>
          <Image src="/static/check.svg" />
        </CheckButton>
      )}
      <Content mainColor={props.mainColor} borderColor={isSelected ? props.mainColor : 'none'}>
        <TextContainer>{props.name}</TextContainer>
      </Content>
      <ContentImage>
        <ImagePerson src={props.person} />
      </ContentImage>
    </MainContainer>
  );
};

export default ImgCrypto;
