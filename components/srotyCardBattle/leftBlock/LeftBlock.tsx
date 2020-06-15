import * as React from 'react';

import ProgressSelf from '../../progress/Progress';
import { giveProgressPercent, returnCorrectCryptoData } from '../../../utils/helpers';

import {
  CryptoCardName,
  ImageCardPerson,
  AwardsBlock,
  CryptoCardPerson,
  ImageCardLogoLeft,
  ImageSword,
  GamerBlockLeft,
} from './styledLeftBlock';
import {
  CryptoCardLogo,
  CryptoCardHp,
  CryptoCardMain,
  UserName,
  UserPhoto,
  ProgressText,
  AvardsImage,
  UserNameWrapper,
  CryptoCard,
  UserBlock,
} from '../styledStoryCard';

const LeftBlock: React.FC<any> = (props: any) => {
  const info = props.data.firstPlayer;
  const penultElementArray = props.data.steps.length - 2;
  const actualHealth =
    props.data.steps.length > 1 ? props.data.steps[penultElementArray][info.cryptoName] : props.data.healthPoints;
  const statusPlayer = info.playerID === props.data.winner.playerID;
  const swordShow = statusPlayer ? '/static/greenSword.svg' : '/static/redSword.svg';
  return (
    <GamerBlockLeft statusPlayer={statusPlayer}>
      <AwardsBlock>
        <AvardsImage src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
      </AwardsBlock>
      <UserBlock>
        <UserPhoto src={info.userInfo.avatar} />
        <UserNameWrapper>
          <UserName>{info.userInfo.alias}</UserName>
        </UserNameWrapper>
        <ImageSword src={swordShow} />
      </UserBlock>
      <CryptoCard>
        <CryptoCardMain mainColor={returnCorrectCryptoData(info.cryptoName, 'mainColor')}>
          <CryptoCardLogo>
            <ImageCardLogoLeft src={returnCorrectCryptoData(info.cryptoName, 'logo')} />
          </CryptoCardLogo>
          <CryptoCardPerson>
            <ImageCardPerson src={returnCorrectCryptoData(info.cryptoName, 'person')} />
          </CryptoCardPerson>
          <CryptoCardName colorBorder={returnCorrectCryptoData(info.cryptoName, 'borderText')}>
            {info.cryptoName}
          </CryptoCardName>
        </CryptoCardMain>
        <CryptoCardHp>
          <ProgressText>{actualHealth}hp</ProgressText>
          <ProgressSelf hp={giveProgressPercent(props.data.healthPoints, actualHealth)} />
        </CryptoCardHp>
      </CryptoCard>
    </GamerBlockLeft>
  );
};
export default LeftBlock;
