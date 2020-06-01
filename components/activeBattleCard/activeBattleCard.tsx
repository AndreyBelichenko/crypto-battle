import * as React from 'react';

import Chart from '../chart/chart';
import BattleBlock from './battleBlock/battleBLock';
import LeftGamer from './leftGamer/leftGamer';
import RightGamer from './rightGamer/rightGamer';

import { returnCorrectCryptoData } from '../../utils/helpers';

import { ParentDiv, MainDiv, ChartWrapper, ActiveCardWrapper } from './styledActiveBattle';

const ActiveBattleCard: React.FC<any> = (props: any) => {
  const currentSide = (side: string) => props.chart && props.chart.index === props.index && props.chart.side === side;
  return (
    <ActiveCardWrapper>
      <ParentDiv>
        <MainDiv>
          <LeftGamer cardData={props.card} setIsChart={props.setIsChart} chart={props.chart} index={props.index} />
          <BattleBlock cardData={props.card} />
          <RightGamer cardData={props.card} setIsChart={props.setIsChart} chart={props.chart} index={props.index} />
        </MainDiv>
      </ParentDiv>
      {currentSide('left') && (
        <ChartWrapper>
          <Chart crypto={returnCorrectCryptoData(props.chart.cryptoName.toString(), 'cryptoCode')} />
        </ChartWrapper>
      )}
      {currentSide('right') && (
        <ChartWrapper>
          <Chart crypto={returnCorrectCryptoData(props.chart.cryptoName.toString(), 'cryptoCode')} />
        </ChartWrapper>
      )}
    </ActiveCardWrapper>
  );
};

export default ActiveBattleCard;
