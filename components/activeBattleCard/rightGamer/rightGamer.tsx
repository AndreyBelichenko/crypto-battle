import * as React from 'react';
import { Progress, Image } from 'semantic-ui-react';

import { CryptoCardPerson, CryptoCardName, ChartTrigger } from './styledRightGamer';
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
import { giveProgressPercent, returnCorrectCryptoData } from '../../../utils/helpers';

const RightGamer: React.FC<any> = (props: any) => {
  const actualHealth = props.cardData.steps[props.cardData.steps.length - 1]
    ? props.cardData.steps[props.cardData.steps.length - 1][props.cardData.secondPlayer.cryptoName]
    : props.cardData.healthPoints;
  const handleOpenChart = () => {
    props.chart === props.cardData.secondPlayer.cryptoName
      ? props.setIsChart(false)
      : props.setIsChart(props.cardData.secondPlayer.cryptoName);
  };
  return (
    <GamerBlock>
      <GamerBlockOne>
        <CryptoCard>
          <CryptoCardMain>
            <CryptoCardLogo>
              <Image src={returnCorrectCryptoData(props.cardData.secondPlayer.cryptoName, 'logo')} />
            </CryptoCardLogo>
            <CryptoCardPerson>
              <Image src={returnCorrectCryptoData(props.cardData.secondPlayer.cryptoName, 'person')} />
            </CryptoCardPerson>
            <CryptoCardName>{props.cardData.secondPlayer.cryptoName}</CryptoCardName>
          </CryptoCardMain>
          <CryptoCardHp>
            <ProgressText>{actualHealth}hp</ProgressText>
            <Progress
              percent={giveProgressPercent(props.cardData.healthPoints, actualHealth)}
              color={returnCorrectCryptoData(props.cardData.secondPlayer.cryptoName, 'progressColor')}
            />
          </CryptoCardHp>
        </CryptoCard>
        <AwardsBlock>
          <ImageAwards src={returnCorrectCryptoData(props.cardData.secondPlayer.cryptoName, 'flag')} />
        </AwardsBlock>
      </GamerBlockOne>
      <GamerBlockTwo>
        <UserBlock>
          <ImageUser src={props.cardData.secondPlayer.userInfo.avatar} />
          <UserName>{props.cardData.secondPlayer.userInfo.alias}</UserName>
        </UserBlock>
        <ChartTrigger>
          <Image src="/static/triggerChart.svg" onClick={handleOpenChart} />
        </ChartTrigger>
      </GamerBlockTwo>
    </GamerBlock>
  );
};

export default RightGamer;
