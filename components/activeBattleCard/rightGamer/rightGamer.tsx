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
  const lastElementArray = props.cardData.steps.length - 1;
  const info = props.cardData.secondPlayer;
  const actualHealth = props.cardData.steps[lastElementArray]
    ? props.cardData.steps[lastElementArray][info.cryptoName]
    : props.cardData.healthPoints;

  const handleOpenChart = () => {
    if (props.chart.side === 'right' && props.chart.index === props.index) {
      props.setIsChart(false);
    } else {
      props.setIsChart({
        index: props.index,
        cryptoName: info.cryptoName,
        side: 'right',
      });
    }
  };
  return (
    <GamerBlock>
      <GamerBlockOne>
        <CryptoCard>
          <CryptoCardMain>
            <CryptoCardLogo>
              <Image src={returnCorrectCryptoData(info.cryptoName, 'logo')} />
            </CryptoCardLogo>
            <CryptoCardPerson>
              <Image src={returnCorrectCryptoData(info.cryptoName, 'person')} />
            </CryptoCardPerson>
            <CryptoCardName>{info.cryptoName}</CryptoCardName>
          </CryptoCardMain>
          <CryptoCardHp>
            <ProgressText>{actualHealth}hp</ProgressText>
            <Progress
              percent={giveProgressPercent(props.cardData.healthPoints, actualHealth)}
              color={returnCorrectCryptoData(info.cryptoName, 'progressColor')}
            />
          </CryptoCardHp>
        </CryptoCard>
        <AwardsBlock>
          <ImageAwards src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
        </AwardsBlock>
      </GamerBlockOne>
      <GamerBlockTwo>
        <UserBlock>
          <ImageUser src={info.userInfo.avatar} />
          <UserName>{info.userInfo.alias}</UserName>
        </UserBlock>
        <ChartTrigger>
          <Image src="/static/triggerChart.svg" onClick={handleOpenChart} />
        </ChartTrigger>
      </GamerBlockTwo>
    </GamerBlock>
  );
};

export default RightGamer;
