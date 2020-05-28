import * as React from 'react';
import { List, Image, Icon, Container, Divider } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import LoaderExampleInlineCentered from '../loader/Loader';
import cryptoData from '../../constants/cryptoData/cryptoData';
import { AppState } from '../../store/rootReducer';
import { setSidebarCrypto } from '../../store/redux/actionCreators/actionCreators';

import {
  SideBarWrapper,
  HeaderWrapper,
  ImageBlock,
  ItemList,
  ImageCountBlock,
  TitleImage,
  ShowMore,
  DividerCustomize,
  ListCustomize,
  HeaderCustomize,
  ListContentCustomize,
  ListHeader,
  ShowLess,
  ShowLessDivider,
} from './styledSidebarSelf';

interface SidebarProps {
  role: string;
  data: any;
  height: boolean;
  hasMore: boolean;
  load: boolean;
  callback?: any;
}

const getImageOfCrypto = (name: string) => cryptoData.filter((item) => item.name === name)[0].logo;

const SidebarSelf = (props: SidebarProps) => {
  const userData = useSelector((state: AppState) => state.user.userData);
  const dispatch = useDispatch();
  const imageInTitle = props.role === 'crypto' ? '/static/coins.svg' : '/static/sword.svg';
  const sidebarTitle = props.role === 'crypto' ? 'TOP Crypto' : 'TOP Warriors';
  const imageInClass = props.role === 'crypto' ? 'coinImage' : 'swordImage';
  const isCrypto = props.role === 'crypto';
  const isUser = !props.data.map((item: any) => item._id).includes(userData.id);
  const [skip, setIsSkip] = React.useState(0);

  React.useEffect(() => {
    dispatch(setSidebarCrypto('crypto-currencies', skip));
  }, [skip]);

  const onHandleSkip = (text: string) => {
    text === 'ahead' ? setIsSkip(skip + 10) : setIsSkip(skip - 10);
  };

  const dataToShow = props.data.map((item: any) =>
    isCrypto
      ? {
        id: item._id,
        alias: item.cryptoName,
        numberOfVictories: item.numberOfVictories,
        avatar: getImageOfCrypto(item.cryptoName),
      }
      : {
        id: item._id,
        alias: item.alias,
        numberOfVictories: item.numberOfVictories,
        avatar: item.avatar,
      },
  );

  return (
    <SideBarWrapper needHeight={props.height}>
      <HeaderWrapper>
        <HeaderCustomize textAlign="center">{sidebarTitle}</HeaderCustomize>
        <TitleImage className={imageInClass}>
          <Image src={imageInTitle} />
        </TitleImage>
      </HeaderWrapper>
      {props.load ? (
        <LoaderExampleInlineCentered />
      ) : (
        <>
          {isCrypto && !props.hasMore ? (
            <>
              <Container align="center" style={{ cursor: 'pointer' }}>
                <ShowLess onClick={onHandleSkip.bind(null, 'back')}>show less</ShowLess>
              </Container>
              <ShowLessDivider />
            </>
          ) : null}
          <ListCustomize divided relaxed>
            {dataToShow.map((item: any, index: number) => (
              <ItemList key={index}>
                <ImageBlock>
                  <Image src={item.avatar} verticalAlign="middle" />
                </ImageBlock>
                <ListContentCustomize>
                  <ListHeader>{item.alias}</ListHeader>
                  <ImageCountBlock>{item.numberOfVictories}</ImageCountBlock>
                </ListContentCustomize>
              </ItemList>
            ))}
          </ListCustomize>
          <DividerCustomize />
          <Container align="center" style={{ cursor: 'pointer' }}>
            {isCrypto ? (
              props.hasMore && <ShowMore onClick={onHandleSkip.bind(null, 'ahead')}>show more</ShowMore>
            ) : (
              <Icon disabled name="ellipsis horizontal" size="big" />
            )}
          </Container>
          {!isCrypto && userData && userData.name && isUser && (
            <>
              <Divider />
              <List>
                <ItemList>
                  <ImageBlock>
                    <Image src={userData.avatar} verticalAlign="middle" />
                  </ImageBlock>
                  <ListContentCustomize>
                    <ListHeader as="h3">{userData.name}</ListHeader>
                    <ImageCountBlock>{userData.numberOfVictories}</ImageCountBlock>
                  </ListContentCustomize>
                </ItemList>
              </List>
            </>
          )}
        </>
      )}
    </SideBarWrapper>
  );
};

export default SidebarSelf;
