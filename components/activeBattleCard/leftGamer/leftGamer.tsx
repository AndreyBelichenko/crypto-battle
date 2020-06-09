import * as React from 'react';
import { Image, Progress } from 'semantic-ui-react';

import Chart from '../../chart/chart';
import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';

import {
  PlayerHp,
  CryptoBlock,
  AvatarBlock,
  AwardsBlock,
  UserName,
  UserNameWrapper,
  CryptoCardMain,
  CryptoCardPerson,
  ImageCardLogoLeft,
  ImageCardPerson,
  CryptoCardName,
  ChartBlock,
  ImageAvatar,
} from './styledLeftGamer';
import {
  GamerBlock,
  PlayerBlock,
  PlayerInfo,
  UserBlock,
  CryptoCardLogo,
  CryptoCardHp,
  ProgressText,
  UserBlockAdapt,
} from '../styledActiveBattle';

const LeftGamer: React.FC<any> = (props: any) => {
  const lastElementArray = props.cardData.steps.length - 1;
  const info = props.cardData.firstPlayer;
  const actualHealth =
    props.cardData.steps.length > 1
      ? props.cardData.steps[lastElementArray][info.cryptoName]
      : props.cardData.healthPoints;
  return (
    <GamerBlock>
      <PlayerBlock>
        <PlayerInfo>
          <UserBlock>
            <AwardsBlock>
              <Image src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
            </AwardsBlock>
            <AvatarBlock>
              <ImageAvatar src={info.userInfo.avatar} />
            </AvatarBlock>
            <UserNameWrapper>
              <UserName>{info.userInfo.alias}</UserName>
            </UserNameWrapper>
          </UserBlock>
          <CryptoBlock>
            <CryptoCardMain mainColor={returnCorrectCryptoData(info.cryptoName, 'mainColor')}>
              <CryptoCardLogo>
                <ImageCardLogoLeft src={returnCorrectCryptoData(info.cryptoName, 'logo')} />
              </CryptoCardLogo>
              <CryptoCardPerson>
                <ImageCardPerson src={returnCorrectCryptoData(info.cryptoName, 'person')} />
              </CryptoCardPerson>
              <CryptoCardName colorBorder={returnCorrectCryptoData(info.cryptoName, 'borderText')}>
                {info.cryptoName}
              </CryptoCardName>
            </CryptoCardMain>
          </CryptoBlock>
        </PlayerInfo>
        <PlayerHp>
          <CryptoCardHp>
            <ProgressText>{actualHealth} HP</ProgressText>
            <Progress percent={giveProgressPercent(props.cardData.healthPoints, actualHealth)} color={'red'} />
          </CryptoCardHp>
        </PlayerHp>
      </PlayerBlock>
      <UserBlockAdapt>
        <AvatarBlock>
          <ImageAvatar src={info.userInfo.avatar} />
        </AvatarBlock>
        <UserNameWrapper>
          <UserName>{info.userInfo.alias}</UserName>
        </UserNameWrapper>
      </UserBlockAdapt>
      <ChartBlock>
        <Chart crypto={returnCorrectCryptoData(info.cryptoName, 'cryptoCode')} />
      </ChartBlock>
    </GamerBlock>
  );
};

export default LeftGamer;
