import * as React from 'react';
import { Progress, Image } from 'semantic-ui-react';

import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';

import { CryptoCardPerson, CryptoCardName, ChartTrigger } from './styledLeftGamer';
import {
  GamerBlock,
  CryptoCard,
  GamerBlockOne,
  GamerBlockTwo,
  CryptoCardLogo,
  CryptoCardHp,
  CryptoCardMain,
  UserBlock,
  UserName,
  AwardsBlock,
  ProgressText,
  ImageUser,
  ImageAwards,
} from '../styledActiveBattle';

const LeftGamer: React.FC<any> = (props: any) => {
  const actualHealth = props.cardData.steps[props.cardData.steps.length - 1]
    ? props.cardData.steps[props.cardData.steps.length - 1][props.cardData.firstPlayer.cryptoName]
    : props.cardData.healthPoints;
  const handleOpenChart = () => {
    props.chart === props.cardData.firstPlayer.cryptoName
      ? props.setIsChart(false)
      : props.setIsChart(props.cardData.firstPlayer.cryptoName);
  };
  return (
    <GamerBlock>
      <GamerBlockOne>
        <AwardsBlock>
          <ImageAwards src={returnCorrectCryptoData(props.cardData.firstPlayer.cryptoName, 'flag')} />
        </AwardsBlock>
        <CryptoCard>
          <CryptoCardMain>
            <CryptoCardLogo>
              <Image src={returnCorrectCryptoData(props.cardData.firstPlayer.cryptoName, 'logo')} />
            </CryptoCardLogo>
            <CryptoCardPerson>
              <Image src={returnCorrectCryptoData(props.cardData.firstPlayer.cryptoName, 'person')} />
            </CryptoCardPerson>
            <CryptoCardName>{props.cardData.firstPlayer.cryptoName}</CryptoCardName>
          </CryptoCardMain>
          <CryptoCardHp>
            <ProgressText>{actualHealth}hp</ProgressText>
            <Progress
              percent={giveProgressPercent(props.cardData.healthPoints, actualHealth)}
              color={returnCorrectCryptoData(props.cardData.firstPlayer.cryptoName, 'progressColor')}
            />
          </CryptoCardHp>
        </CryptoCard>
      </GamerBlockOne>
      <GamerBlockTwo>
        <UserBlock>
          <ImageUser src={props.cardData.firstPlayer.userInfo.avatar} />
          <UserName>{props.cardData.firstPlayer.userInfo.alias}</UserName>
        </UserBlock>
        <ChartTrigger>
          <Image src="/static/triggerChart.svg" onClick={handleOpenChart} />
        </ChartTrigger>
      </GamerBlockTwo>
    </GamerBlock>
  );
};

export default LeftGamer;
