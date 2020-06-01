import * as React from 'react';

import Chart from '../chart/chart';
import BattleBlock from './battleBlock/battleBLock';
import LeftGamer from './leftGamer/leftGamer';
import RightGamer from './rightGamer/rightGamer';

import { returnCorrectCryptoData } from '../../utils/helpers';
import { ParentDiv, MainDiv, ChartWrapper } from './styledActiveBattle';

const ActiveBattleCard: React.FC<any> = (props: any) => {
  const [chart, setIsChart] = React.useState(false);
  return (
    <>
      <ParentDiv>
        <MainDiv>
          <LeftGamer cardData={props.card} setIsChart={setIsChart} chart={chart} />
          <BattleBlock cardData={props.card} />
          <RightGamer cardData={props.card} setIsChart={setIsChart} chart={chart} />
        </MainDiv>
      </ParentDiv>
      {chart && (
        <ChartWrapper>
          <Chart crypto={returnCorrectCryptoData(chart.toString(), 'cryptoCode')} />
        </ChartWrapper>
      )}
    </>
  );
};

export default ActiveBattleCard;
