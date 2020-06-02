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
  ImageImg,
  UserNameWrapper,
} from '../styledActiveBattle';

const LeftGamer: React.FC<any> = (props: any) => {
  const lastElementArray = props.cardData.steps.length - 1;
  const info = props.cardData.firstPlayer;
  const actualHealth =
    props.cardData.steps.length > 1
      ? props.cardData.steps[lastElementArray][info.cryptoName]
      : props.cardData.healthPoints;
  const handleOpenChart = () => {
    if (props.chart.side === 'left' && props.chart.index === props.index) {
      props.setIsChart(false);
    } else {
      props.setIsChart({
        index: props.index,
        cryptoName: info.cryptoName,
        side: 'left',
      });
    }
  };

  return (
    <GamerBlock>
      <GamerBlockOne>
        <AwardsBlock>
          <ImageAwards src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
        </AwardsBlock>
        <CryptoCard>
          <CryptoCardMain mainColor={returnCorrectCryptoData(info.cryptoName, 'mainColor')}>
            <CryptoCardLogo>
              <Image src={returnCorrectCryptoData(info.cryptoName, 'logo')} />
            </CryptoCardLogo>
            <CryptoCardPerson>
              <ImageImg src={returnCorrectCryptoData(info.cryptoName, 'person')} />
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
      </GamerBlockOne>
      <GamerBlockTwo>
        <UserBlock>
          <ImageUser src={info.userInfo.avatar} />
          <UserNameWrapper>
            <UserName>{info.userInfo.alias}</UserName>
          </UserNameWrapper>
        </UserBlock>
        <ChartTrigger>
          <Image src="/static/triggerChart.svg" onClick={handleOpenChart} />
        </ChartTrigger>
      </GamerBlockTwo>
    </GamerBlock>
  );
};

export default LeftGamer;
