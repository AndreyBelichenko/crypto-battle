import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoaderSemantic from '../loader/Loader';
import BattleBlock from './battleBlock/battleBLock';
import LeftGamer from './leftGamer/leftGamer';
import RightGamer from './rightGamer/rightGamer';
import Chart from '../chart/chart';
import { returnCorrectCryptoData } from '../../utils/helpers';
import { AppState } from '../../store/rootReducer';
import { getActiveCardData } from '../../store/redux/actionCreators/actionCreators';

import {
  ParentDiv,
  MainDiv,
  ActiveCardWrapper,
  DownChartsBlock,
  ChartDownBlock,
  MainDivContent,
} from './styledActiveBattle';

interface ActiveBattleCardProps {
  battleId: string | string[] | undefined;
}

const ActiveBattleCard = (props: ActiveBattleCardProps) => {
  const dispatch = useDispatch();
  const [width, setWidth] = React.useState(1200);
  const showDescription = width > 520;
  const cardData = useSelector((state: AppState) => state.allBattle.allBattleData).filter(
    (item) => item._id === props.battleId,
  )[0];

  React.useEffect(() => {
    dispatch(getActiveCardData(props.battleId));
    setWidth(window.screen.width);
  }, []);

  window.addEventListener('resize', (e: any) => {
    setWidth(e.currentTarget.innerWidth);
  });

  return cardData ? (
    <ActiveCardWrapper>
      <ParentDiv>
        <MainDiv>
          <MainDivContent>
            <LeftGamer cardData={cardData} />
            <BattleBlock cardData={cardData} />
            <RightGamer cardData={cardData} />
          </MainDivContent>
          <DownChartsBlock>
            <ChartDownBlock>
              <Chart
                crypto={returnCorrectCryptoData(cardData.firstPlayer.cryptoName, 'cryptoCode')}
                description={showDescription}
              />
            </ChartDownBlock>
            <ChartDownBlock>
              <Chart
                crypto={returnCorrectCryptoData(cardData.secondPlayer.cryptoName, 'cryptoCode')}
                description={showDescription}
              />
            </ChartDownBlock>
          </DownChartsBlock>
        </MainDiv>
      </ParentDiv>
    </ActiveCardWrapper>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default ActiveBattleCard;
