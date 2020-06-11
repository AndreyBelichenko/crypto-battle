import * as React from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { Grid, Sidebar, Menu, Image } from 'semantic-ui-react';
import { SemanticToastContainer } from 'react-semantic-toasts';
import { useRouter } from 'next/router';

import Header from '../header/Header';
import Banner from '../banner/Banner';
import LoaderSemantic from '../loader/Loader';
import SidebarSelf from '../sidebarSelf/SidebarSelf';
import ModalWindow from '../modalWindow/modalWindow';

import ModalWindowSidebars from '../modalWindowSidebars/modalWindowSidebars';
import { SocketConnection } from '../../socketConnection/socketConnection';
import { sidebarItems } from '../../constants/itemConstants';
import * as actions from '../../store/redux/actionCreators/actionCreators';
import { AppState } from '../../store/rootReducer';

import {
  AppWrapper,
  MainContent,
  AppContainer,
  MenuItem,
  ItemCreateBattle,
  ItemMenuWrapper,
  ItemMenuImage,
  ItemMenuName,
  ItemMenuImageHover,
  ToastWrapper,
  LoaderAuthWrapper,
} from '../../commonStyles/styledApp';

const WrapMarkUp: React.FC<any> = ({
  children,
  setSidebarWarriors,
  userData,
  topWarriors,
  topCrypto,
  setSidebarCrypto,
  setRequestBattles,
  setAllBattlesConnect,
  setAllBattlesCreate,
  setAllBattlesUpdate,
  startFinishBattle,
  setAuthUserDataFromCookies,
  logOutStore,
}) => {
  const [visible, setVisible] = React.useState(false);
  const router = useRouter();

  const setVisibleSideBar = React.useCallback(() => {
    setVisible(false);
  }, []);

  React.useEffect(() => {
    const userDataCookie = Cookies.get('userData');

    if (typeof userDataCookie === 'string') {
      setAuthUserDataFromCookies(JSON.parse(userDataCookie));
    }

    const paramsOfGetBattlesWait = {
      skip: 0,
      limit: 5,
      sort: 'desc',
      state: 'waiting',
    };

    const paramsOfGetBattlesStart = {
      skip: 0,
      limit: 5,
      sort: 'desc',
      state: 'start',
    };

    const paramsOfGetBattlesEnd = {
      skip: 0,
      limit: 5,
      sort: 'desc',
      state: 'end',
    };

    setSidebarWarriors('top-warriors');
    setSidebarCrypto('crypto-currencies');
    setRequestBattles(paramsOfGetBattlesWait);
    setRequestBattles(paramsOfGetBattlesStart);
    setRequestBattles(paramsOfGetBattlesEnd);

    new SocketConnection('ws://crypto-battle.pp.ua/socket');
    SocketConnection.getSocket().onmessage = (response: any) => {
      const readyResponse = JSON.parse(response.data);
      switch (readyResponse.message) {
        case 'start_battle':
          return setAllBattlesConnect(readyResponse.battle);
        case 'create_battle':
          return setAllBattlesCreate(readyResponse.battle);
        case 'update_battle':
          readyResponse.battles.map((item: any) => {
            const steps = item.steps;
            const isEnd = Object.values(steps[steps.length - 1]).length;
            isEnd > 1 ? setAllBattlesUpdate(item) : startFinishBattle(item);
          });
      }
    };
    setInterval(() => SocketConnection.getSocket().send(JSON.stringify({ method: 'ping' })), 60000);
  }, []);

  const logOut = () => {
    Cookies.remove('userData');
    setVisibleSideBar();
    logOutStore(userData.access_token, userData.id);
  };

  const showItems = (item: any) => {
    switch (item.type) {
      case 'link':
        return (
          <MenuItem onClick={setVisibleSideBar}>
            <Link href={item.path}>
              <ItemMenuWrapper>
                <ItemMenuImage>
                  <Image src={item.image} />
                </ItemMenuImage>
                <ItemMenuImageHover>
                  <Image src={item.imageHover} />
                </ItemMenuImageHover>
                <ItemMenuName>{item.name}</ItemMenuName>
              </ItemMenuWrapper>
            </Link>
          </MenuItem>
        );
      case 'modal':
        return <ModalWindowSidebars setVisible={(a: boolean) => setVisible(a)} content={item} role={item.idItem} />;
      case 'logout':
        return (
          userData &&
          Boolean(userData.id) && (
            <MenuItem onClick={logOut}>
              <ItemMenuWrapper>
                <ItemMenuImage>
                  <Image src={item.image} />
                </ItemMenuImage>
                <ItemMenuImageHover>
                  <Image src={item.imageHover} />
                </ItemMenuImageHover>
                <ItemMenuName>{item.name}</ItemMenuName>
              </ItemMenuWrapper>
            </MenuItem>
          )
        );
    }
  };
  return (
    <AppWrapper>
      {userData.isLoading && (
        <LoaderAuthWrapper>
          <LoaderSemantic marginNeed={true} />
        </LoaderAuthWrapper>
      )}
      <Header setVisible={setVisible} visible={visible} />
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={setVisibleSideBar}
          vertical
          visible={visible}
          direction="right"
          className="sidebar"
        >
          <MenuItem onClick={setVisibleSideBar}>
            <ItemCreateBattle>
              <ModalWindow role="create" />
            </ItemCreateBattle>
          </MenuItem>
          {sidebarItems.map((item, index) => (
            <div key={index}>{showItems(item)}</div>
          ))}
        </Sidebar>
        <AppContainer>
          <Sidebar.Pusher>
            <Banner />
            <Grid stackable columns="equal">
              {router.pathname !== '/active-battle' && (
                <Grid.Column tablet={6} computer={4} only="tablet computer" className="customColumnSidebars">
                  <SidebarSelf
                    role="warriors"
                    data={topWarriors.users}
                    height={false}
                    hasMore={topWarriors.hasMore}
                    load={topWarriors.load}
                  />
                </Grid.Column>
              )}
              <Grid.Column>
                <MainContent>{children}</MainContent>
              </Grid.Column>
              {router.pathname !== '/active-battle' && (
                <Grid.Column width={4} only="computer">
                  <SidebarSelf
                    role="crypto"
                    data={topCrypto.crypto}
                    height={false}
                    hasMore={topCrypto.hasMore}
                    load={topCrypto.load}
                  />
                </Grid.Column>
              )}
            </Grid>
            <ToastWrapper>
              <SemanticToastContainer position={'bottom-left'} />;
            </ToastWrapper>
          </Sidebar.Pusher>
        </AppContainer>
      </Sidebar.Pushable>
    </AppWrapper>
  );
};

export default connect(
  (state: AppState) => ({
    userData: state.user.userData,
    topWarriors: state.sideBar.warriors,
    topCrypto: state.sideBar.crypto,
  }),
  (dispatch: any) => ({
    setSidebarWarriors: (type: string) => dispatch(actions.setSidebarWarriors(type)),
    setSidebarCrypto: (type: string, skip: number | undefined) => dispatch(actions.setSidebarCrypto(type, skip)),
    setRequestBattles: (payload: any) => dispatch(actions.SetRequestBattles(payload)),
    setAllBattlesConnect: (payload: any) => dispatch(actions.SetAllBattlesConnect(payload)),
    setAllBattlesCreate: (payload: any) => dispatch(actions.SetAllBattlesCreate(payload)),
    setAllBattlesUpdate: (payload: any) => dispatch(actions.SetAllBattlesUpdate(payload)),
    startFinishBattle: (payload: any) => dispatch(actions.StartFinishBattle(payload)),
    setAuthUserDataFromCookies: (payload: any) => dispatch(actions.setAuthUserDataFromCookies(payload)),
    logOutStore: (token: number, id: number) => dispatch(actions.logOutStore(token, id)),
  }),
)(WrapMarkUp);
