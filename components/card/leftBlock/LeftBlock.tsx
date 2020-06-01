import * as React from 'react';
import { Progress } from 'semantic-ui-react';

import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';

import {
  GamerBlock,
  CryptoCard,
  CryptoCardName,
  ImageCardPerson,
  ImageCardLogo,
  AwardsBlock,
  UserBlock,
} from './leftStyledComponent';
import {
  CryptoCardPerson,
  CryptoCardLogo,
  CryptoCardHp,
  CryptoCardMain,
  UserName,
  UserPhoto,
  ProgressText,
  AvardsImage,
} from '../styledComponent';

const LeftBlock: React.FC<any> = (props: any) => {
  const info = props.data.firstPlayer;
  const lastElementArray = props.data.steps.length - 1;
  const actualHealth = props.data.steps[lastElementArray]
    ? props.data.steps[lastElementArray][info.cryptoName]
    : props.data.healthPoints;
  return (
    <GamerBlock>
      <AwardsBlock>
        <AvardsImage src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
      </AwardsBlock>
      <UserBlock>
        <UserPhoto src={info.userInfo.avatar} />
        <UserName>{info.userInfo.alias}</UserName>
      </UserBlock>
      <CryptoCard>
        <CryptoCardMain>
          <CryptoCardLogo>
            <ImageCardLogo src={returnCorrectCryptoData(info.cryptoName, 'logo')} />
          </CryptoCardLogo>
          <CryptoCardPerson>
            <ImageCardPerson src={returnCorrectCryptoData(info.cryptoName, 'person')} />
          </CryptoCardPerson>
          <CryptoCardName>{info.cryptoName}</CryptoCardName>
        </CryptoCardMain>
        <CryptoCardHp>
          <ProgressText>{actualHealth}hp</ProgressText>
          <Progress
            percent={giveProgressPercent(props.data.healthPoints, actualHealth)}
            color={returnCorrectCryptoData(info.cryptoName, 'progressColor')}
          />
        </CryptoCardHp>
      </CryptoCard>
    </GamerBlock>
  );
};

export default LeftBlock;
