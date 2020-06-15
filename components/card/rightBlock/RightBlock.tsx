import * as React from 'react';

import ProgressSelf from '../../progress/Progress';
import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';

import {
  CryptoCardName,
  ImageCardPerson,
  AwardsBlock,
  CryptoCardPerson,
  ImageCardLogoRight,
} from './rightStyledComponent';
import {
  CryptoCardLogo,
  CryptoCardHp,
  CryptoCardMain,
  UserName,
  ProgressText,
  UserPhoto,
  AvardsImage,
  UserNameWrapper,
  GamerBlock,
  CryptoCard,
  UserBlock,
} from '../styledComponent';

const RightBlock: React.FC<any> = (props: any) => {
  const lastElementArray = props.data.steps.length - 1;
  const info = props.data.secondPlayer;
  const actualHealth =
    props.data.steps.length > 1 ? props.data.steps[lastElementArray][info.cryptoName] : props.data.healthPoints;
  return (
    <GamerBlock>
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
      </UserBlock>
      <AwardsBlock>
        <AvardsImage src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
      </AwardsBlock>
    </GamerBlock>
  );
};

export default RightBlock;
