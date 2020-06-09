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
  return (
    <ActiveCardWrapper>
      <ParentDiv>
        <MainDiv>
          <MainDivContent>
            <LeftGamer cardData={props.card} setIsChart={props.setIsChart} chart={props.chart} index={props.index} />
            <BattleBlock cardData={props.card} />
            <RightGamer cardData={props.card} setIsChart={props.setIsChart} chart={props.chart} index={props.index} />
          </MainDivContent>
          <DownChartsBlock>
            <ChartDownBlock>
              <Chart crypto={returnCorrectCryptoData(props.card.firstPlayer.cryptoName, 'cryptoCode')} />
            </ChartDownBlock>
            <ChartDownBlock>
              <Chart crypto={returnCorrectCryptoData(props.card.secondPlayer.cryptoName, 'cryptoCode')} />
            </ChartDownBlock>
          </DownChartsBlock>
        </MainDiv>
      </ParentDiv>
    </ActiveCardWrapper>
  );
};

export default ActiveBattleCard;
