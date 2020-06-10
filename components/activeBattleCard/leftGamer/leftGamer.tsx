import * as React from 'react';
import { Image, Progress } from 'semantic-ui-react';

import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';

import {
  UserName,
  CryptoBlock,
  AvatarBlock,
  AwardsBlock,
  UserNameWrapper,
  CryptoCardMain,
  CryptoCardPerson,
  ImageCardLogoLeft,
  ImageCardPerson,
  CryptoCardName,
  ImageAvatar,
  AwardText,
} from './styledLeftGamer';
import { GamerBlock, PlayerBlock, UserBlock, CryptoCardLogo, CryptoCardHp, ProgressText } from '../styledActiveBattle';

const LeftGamer: React.FC<any> = (props: any) => {
  const lastElementArray = props.cardData.steps.length - 1;
  const info = props.cardData.firstPlayer;
  const actualHealth =
    props.cardData.steps.length > 1
      ? props.cardData.steps[lastElementArray][info.cryptoName]
      : props.cardData.healthPoints;
  return (
    <GamerBlock>
      <PlayerBlock>
        <UserBlock>
          <AwardsBlock>
            <Image src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
            <AwardText>{info.userInfo.numberOfVictories}</AwardText>
          </AwardsBlock>
          <AvatarBlock>
            <ImageAvatar src={info.userInfo.avatar} />
          </AvatarBlock>
          <UserNameWrapper>
            <UserName>{info.userInfo.alias}</UserName>
          </UserNameWrapper>
        </UserBlock>
      </PlayerBlock>
      <CryptoBlock>
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
          <ProgressText>{actualHealth} HP</ProgressText>
          <Progress percent={giveProgressPercent(props.cardData.healthPoints, actualHealth)} color={'red'} />
        </CryptoCardHp>
      </CryptoBlock>
    </GamerBlock>
  );
};

export default LeftGamer;
