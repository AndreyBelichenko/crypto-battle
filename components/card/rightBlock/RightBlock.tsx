import * as React from 'react';
import { Progress } from 'semantic-ui-react';

import { secondWarrior } from '../mockData';

import {GamerBlock,
  CryptoCard,
  CryptoCardName,
  ImageCardLogo,
  ImageCardPerson,
  UserBlock,
  AwardsBlock } from './rightStyledComponent';
import {
  CryptoCardPerson,
  CryptoCardLogo,
  CryptoCardHp,
  CryptoCardMain,
  UserName,
  ProgressText,
  UserPhoto,
  AvardsImage,
} from '../styledComponent';

const RightBlock: React.FC = () => {
  return (
  <>
    {secondWarrior.map((item: any) => (
      <GamerBlock key={item.idWarrior}>
        <CryptoCard key={item.idWarrior}>
          <CryptoCardMain>
            <CryptoCardLogo>
              <ImageCardLogo src={item.logo} />
            </CryptoCardLogo>
            <CryptoCardPerson>
              <ImageCardPerson src={item.person} />
            </CryptoCardPerson>
            <CryptoCardName>{item.name}</CryptoCardName>
          </CryptoCardMain>
          <CryptoCardHp>
            <ProgressText>220hp</ProgressText>
            <Progress percent={220} color="orange" />
          </CryptoCardHp>
        </CryptoCard>
        <UserBlock key={item.idWarrior}>
          <UserPhoto src="/static/user.svg"/>
          <UserName>{item.warriorName}</UserName>
        </UserBlock>
        <AwardsBlock key={item.idWarrior}>
          <AvardsImage src={item.flag} />
        </AwardsBlock>
      </GamerBlock>
    ))}
    </>
  );
};

export default RightBlock;
