import * as React from 'react';
import { Progress } from 'semantic-ui-react';

import { warrior } from '../mockData';

import { CryptoCard,
  CryptoCardPerson,
  CryptoCardName,
  ImageCardPerson,
  ImageCardLogo,
  UserPhoto,
  AwardsBlock,
  AvardsImage,
  AwardsText,
  UserBlock } from './leftStyledComponent';
import {
  GamerBlock,
  CryptoCardLogo,
  CryptoCardHp,
  CryptoCardMain,
  UserName,
  ProgressText,
} from '../styledComponent';

const LeftBlock: React.FC = () => {
  return (
    <>
    {warrior.map((item: any) => (
    <GamerBlock key={item.idWarrior}>
        <AwardsBlock key={item.idWarrior}>
          <AwardsText>
            place
            <br/> for
            <br/> awards
          </AwardsText>
          <AvardsImage src={item.flag} />
        </AwardsBlock>
        <UserBlock key={item.idWarrior}>
        <UserPhoto src="/static/user.svg" />
        <UserName>{item.warriorName}</UserName>
        </UserBlock>
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
    </GamerBlock>
      ))}
      </>
  );
};

export default LeftBlock;
