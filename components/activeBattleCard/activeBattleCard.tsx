import * as React from 'react';

import BattleBlock from './battleBlock/battleBLock';
import LeftGamer from './leftGamer/leftGamer';
import RightGamer from './rightGamer/rightGamer';

import {
  ParentDiv,
  MainDiv,
  ActiveCardWrapper,
  DownChartsBlock,
  ChartDownBlock,
  MainDivContent,
} from './styledActiveBattle';
import Chart from '../chart/chart';
import { returnCorrectCryptoData } from '../../utils/helpers';

const ActiveBattleCard: React.FC<any> = (props: any) => {
  const [width, setWidth] = React.useState(1200);
  React.useEffect(() => {
    setWidth(window.screen.width);
  }, []);
  window.addEventListener('resize', (e: any) => {
    setWidth(e.currentTarget.innerWidth);
  });
  const showDescription = width > 520;
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
