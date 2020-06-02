import * as React from 'react';
import { Progress, Image } from 'semantic-ui-react';

import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';

import {
  GamerBlock,
  GamerBlockOne,
  GamerBlockTwo,
  UserBlock,
  UserName,
  AwardsBlock,
  ProgressText,
  ImageAwards,
  UserNameWrapper,
  UserPhoto,
} from '../styledActiveBattle';
import { ChartTrigger } from './styledLeftGamer';
import { CryptoCard, CryptoCardMain, CryptoCardLogo, CryptoCardHp } from '../../card/styledComponent';
import {
  ImageCardPerson,
  CryptoCardPerson,
  CryptoCardName,
  ImageCardLogoLeft,
} from '../../card/leftBlock/leftStyledComponent';

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
            <Progress
              percent={giveProgressPercent(props.cardData.healthPoints, actualHealth)}
              color={returnCorrectCryptoData(info.cryptoName, 'progressColor')}
            />
          </CryptoCardHp>
        </CryptoCard>
      </GamerBlockOne>
      <GamerBlockTwo>
        <UserBlock>
          <UserPhoto src={info.userInfo.avatar} />
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
