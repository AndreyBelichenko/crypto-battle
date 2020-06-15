import * as React from 'react';
import { Image } from 'semantic-ui-react';

import ProgressSelf from '../../progress/Progress';
import { giveProgressPercent, returnCorrectCryptoData } from '../../../utils/helpers';

import {
  CryptoBlock,
  AvatarBlock,
  AwardsBlock,
  UserName,
  UserNameWrapper,
  CryptoCardMain,
  CryptoCardPerson,
  ImageCardLogoLeft,
  ImageCardPerson,
  CryptoCardName,
  ImageAvatar,
  AwardText,
} from './styledRightGamer';
import { GamerBlock, PlayerBlock, UserBlock, CryptoCardLogo, CryptoCardHp, ProgressText } from '../styledActiveBattle';

const RightGamer: React.FC<any> = (props: any) => {
  const lastElementArray = props.cardData.steps.length - 1;
  const info = props.cardData.secondPlayer;
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
          <ProgressSelf hp={giveProgressPercent(props.data.healthPoints, actualHealth)} />
        </CryptoCardHp>
      </CryptoBlock>
    </GamerBlock>
  );
};

export default RightGamer;
