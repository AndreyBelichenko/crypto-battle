import * as React from 'react';
import { Progress } from 'semantic-ui-react';

import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';

import {
  GamerBlock,
  CryptoCard,
  CryptoCardName,
  ImageCardLogo,
  ImageCardPerson,
  UserBlock,
  AwardsBlock,
} from './rightStyledComponent';
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

const RightBlock: React.FC<any> = (props: any) => {
  const lastElementArray = props.data.steps.length - 1;
  const info = props.data.secondPlayer;
  const actualHealth = props.data.steps[lastElementArray]
    ? props.data.steps[lastElementArray][info.cryptoName]
    : props.data.healthPoints;
  return (
    <GamerBlock>
      <CryptoCard>
        <CryptoCardMain>
          <CryptoCardLogo>
            <ImageCardLogo src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
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
      <UserBlock>
        <UserPhoto src={info.userInfo.avatar} />
        <UserName>{info.userInfo.alias}</UserName>
      </UserBlock>
      <AwardsBlock>
        <AvardsImage src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
      </AwardsBlock>
    </GamerBlock>
  );
};

export default RightBlock;
