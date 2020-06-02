import * as React from 'react';
import { Progress, Image } from 'semantic-ui-react';

import { giveProgressPercent, returnCorrectCryptoData } from '../../../utils/helpers';

import {
  GamerBlock,
  GamerBlockOne,
  GamerBlockTwo,
  UserBlock,
  UserName,
  AwardsBlock,
  ProgressText,
  ImageUser,
  ImageAwards,
  UserNameWrapper,
} from '../styledActiveBattle';
import { ChartTrigger } from './styledRightGamer';
import { ImageCardLogo, CryptoCard, CryptoCardMain, CryptoCardLogo, CryptoCardHp } from '../../card/styledComponent';
import { ImageCardPerson, CryptoCardPerson, CryptoCardName } from '../../card/rightBlock/rightStyledComponent';

const RightGamer: React.FC<any> = (props: any) => {
  const lastElementArray = props.cardData.steps.length - 1;
  const info = props.cardData.secondPlayer;
  const actualHealth =
    props.cardData.steps.length > 1
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
          <CryptoCardMain mainColor={returnCorrectCryptoData(info.cryptoName, 'mainColor')}>
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

export default RightGamer;
