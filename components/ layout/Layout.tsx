import * as React from 'react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';

import BattleCard from '../card/Card';

import { LayoutWrapper } from './styledComponents';
import { AppState } from '../../store/rootReducer';
import * as actions from '../../store/redux/actionCreators/actionCreators';

const Layout: React.FC<any> = ({ setAuthUserDataFromCookies, allBattle }) => {
  React.useEffect(() => {
    const userDataCookie = Cookies.get('userData');
    if (typeof userDataCookie === 'string') {
      setAuthUserDataFromCookies(JSON.parse(userDataCookie));
    }
  }, []);

  return (
    <LayoutWrapper>
      {allBattle
        .filter((item: any) => item.gameStatus !== 'END')
        .map((item: any) => (
          <BattleCard item={item} key={item._id} />
        ))}
    </LayoutWrapper>
  );
};

const mapStateToProps = (state: AppState) => ({
  allBattle: state.allBattle.allBattleData,
});

const mapDispatchToProps = (dispatch: any) => ({
  setAuthUserDataFromCookies: (payload: any) => dispatch(actions.setAuthUserDataFromCookies(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
