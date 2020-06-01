import * as React from 'react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';

import BattleCard from '../card/Card';

import { AppState } from '../../store/rootReducer';
import { setAuthUserDataFromCookies } from '../../store/redux/actionCreators/actionCreators';

import { LayoutWrapper } from './styledComponents';

const Layout: React.FC<any> = ({ setAuthUserDataFromCookies, allBattle }) => {
  React.useEffect(() => {
    const userDataCookie = Cookies.get('userData');
    if (typeof userDataCookie === 'string') {
      setAuthUserDataFromCookies(JSON.parse(userDataCookie));
    }
  }, []);
  const filterBattles = allBattle.filter((item: any) => item.gameStatus !== 'END');
  return (
    <LayoutWrapper>
      {filterBattles.map((item: any) => (
        <BattleCard item={item} key={item._id} />
      ))}
    </LayoutWrapper>
  );
};

export default connect(
  (state: AppState) => ({
    allBattle: state.allBattle.allBattleData,
  }),
  {
    setAuthUserDataFromCookies,
  },
)(Layout);
