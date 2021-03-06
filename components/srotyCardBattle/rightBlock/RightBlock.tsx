import * as React from 'react';

import ProgressSelf from '../../progress/Progress';
import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';

import {
  CryptoCardName,
  ImageCardPerson,
  AwardsBlock,
  CryptoCardPerson,
  ImageCardLogoRight,
  ImageSword,
  GamerBlockRight,
} from './styledRightBlock';
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
  AwardsBlockWrapper,
  AwardText,
} from '../styledStoryCard';

const RightBlock: React.FC<any> = (props: any) => {
  const info = props.data.secondPlayer;
  const penultElementArray = props.data.steps.length - 2;
  const actualHealth =
    props.data.steps.length > 1 ? props.data.steps[penultElementArray][info.cryptoName] : props.data.healthPoints;
  const statusPlayer = info.playerID === props.data.winner.playerID;
  const swordShow = statusPlayer ? '/static/greenSword.svg' : '/static/redSword.svg';
  return (
    <GamerBlockRight statusPlayer={statusPlayer}>
      <CryptoCard>
        <CryptoCardMain mainColor={returnCorrectCryptoData(info.cryptoName, 'mainColor')}>
          <CryptoCardLogo>
            <ImageCardLogoRight src={returnCorrectCryptoData(info.cryptoName, 'logo')} />
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
      <UserBlock>
        <UserPhoto src={info.userInfo.avatar} />
        <UserNameWrapper>
          <UserName>{info.userInfo.alias}</UserName>
        </UserNameWrapper>
        <ImageSword src={swordShow} />
      </UserBlock>
      <AwardsBlock>
        <AwardsBlockWrapper>
          <AvardsImage src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
          <AwardText>{info.userInfo.numberOfVictories}</AwardText>
        </AwardsBlockWrapper>
      </AwardsBlock>
    </GamerBlockRight>
  );
};

export default RightBlock;
