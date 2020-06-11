import * as React from 'react';

import BattleBlock from './battleBlock/battleBLock';
import LeftGamer from './leftGamer/leftGamer';
import RightGamer from './rightGamer/rightGamer';
import Chart from '../chart/chart';
import { returnCorrectCryptoData } from '../../utils/helpers';

import {
  ParentDiv,
  MainDiv,
  ActiveCardWrapper,
  DownChartsBlock,
  ChartDownBlock,
  MainDivContent,
} from './styledActiveBattle';

const ActiveBattleCard: React.FC<any> = (props: any) => {
  const [width, setWidth] = React.useState(1200);
  const showDescription = width > 520;

  React.useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  window.addEventListener('resize', (e: any) => {
    setWidth(e.currentTarget.innerWidth);
  });
  return (
    <ActiveCardWrapper>
      <ParentDiv>
        <MainDiv>
          <MainDivContent>
            <LeftGamer cardData={props.card} />
            <BattleBlock cardData={props.card} />
            <RightGamer cardData={props.card} />
          </MainDivContent>
          <DownChartsBlock>
            <ChartDownBlock>
              <Chart
                crypto={returnCorrectCryptoData(props.card.firstPlayer.cryptoName, 'cryptoCode')}
                description={showDescription}
              />
            </ChartDownBlock>
            <ChartDownBlock>
              <Chart
                crypto={returnCorrectCryptoData(props.card.secondPlayer.cryptoName, 'cryptoCode')}
                description={showDescription}
              />
            </ChartDownBlock>
          </DownChartsBlock>
        </MainDiv>
      </ParentDiv>
    </ActiveCardWrapper>
  );
};

export default ActiveBattleCard;
