import * as React from 'react';
import { List, Image, Icon, Container, Divider } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import LoaderSemantic from '../loader/Loader';
import cryptoData from '../../constants/cryptoData/cryptoData';
import { AppState } from '../../store/rootReducer';
import { showMoreCrypto } from '../../store/redux/actionCreators/actionCreators';

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
  ImageAvatar,
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
  const dispatch = useDispatch();
  const userData = useSelector((state: AppState) => state.user.userData);
  const isUser = !props.data.some((item: any) => item._id === userData.id);
  const isCrypto = props.role === 'crypto';
  const showUser = !isCrypto && userData && userData.name && isUser;
  const imageInTitle = isCrypto ? '/static/coins.svg' : '/static/sword.svg';
  const sidebarTitle = isCrypto ? 'TOP Crypto' : 'TOP Warriors';
  const imageInClass = isCrypto ? 'coinImage' : 'swordImage';

  const handleShowMore = () => {
    dispatch(showMoreCrypto('crypto-currencies', props.data.length));
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
        <LoaderSemantic marginNeed={false} />
      ) : (
        <>
          <ListCustomize divided relaxed>
            {dataToShow.map((item: any, index: number) => (
              <ItemList key={index}>
                {/*<ImageBlock>*/}
                <ImageAvatar src={item.avatar} />
                {/*</ImageBlock>*/}
                <ListContentCustomize>
                  <ListHeader>{item.alias}</ListHeader>
                  <ImageCountBlock>{item.numberOfVictories}</ImageCountBlock>
                </ListContentCustomize>
              </ItemList>
            ))}
          </ListCustomize>
          <Container align="center" style={{ cursor: 'pointer' }}>
            {isCrypto
              ? props.hasMore && (
                  <>
                    <DividerCustomize />
                    <ShowMore onClick={handleShowMore}>show more</ShowMore>
                  </>
                )
              : showUser && (
                  <>
                    <DividerCustomize />
                    <Icon disabled name="ellipsis horizontal" size="big" />
                  </>
                )}
          </Container>
          {showUser && (
            <>
              <Divider />
              <List>
                <ItemList>
                  <ImageBlock>
                    <ImageAvatar src={userData.avatar} />
                  </ImageBlock>
                  <ListContentCustomize>
                    <ListHeader>{userData.name}</ListHeader>
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
