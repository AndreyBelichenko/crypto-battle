import * as React from 'react';

import ProgressSelf from '../../progress/Progress';
import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';

import {
  CryptoCardName,
  ImageCardPerson,
  AwardsBlock,
  CryptoCardPerson,
  ImageCardLogoLeft,
} from './leftStyledComponent';
import {
  CryptoCardLogo,
  CryptoCardHp,
  CryptoCardMain,
  UserName,
  UserPhoto,
  ProgressText,
  AvardsImage,
  UserNameWrapper,
  GamerBlock,
  CryptoCard,
  UserBlock,
  AwardText,
  AwardsBlockWrapper,
} from '../styledComponent';

const LeftBlock: React.FC<any> = (props: any) => {
  const info = props.data.firstPlayer;
  const lastElementArray = props.data.steps.length - 1;
  const actualHealth =
    props.data.steps.length > 1 ? props.data.steps[lastElementArray][info.cryptoName] : props.data.healthPoints;
  return (
    <GamerBlock>
      <AwardsBlock>
        <AwardsBlockWrapper>
          <AvardsImage src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
          <AwardText>{info.userInfo.numberOfVictories}</AwardText>
        </AwardsBlockWrapper>
      </AwardsBlock>
      <UserBlock>
        <UserPhoto src={info.userInfo.avatar} />
        <UserNameWrapper>
          <UserName>{info.userInfo.alias}</UserName>
        </UserNameWrapper>
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
    </GamerBlock>
  );
};

export default LeftBlock;
