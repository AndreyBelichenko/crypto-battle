import * as React from 'react';
import { Image, Progress } from 'semantic-ui-react';

import {
  PlayerHp,
  AvatarBlock,
  AwardsBlock,
  UserName,
  CryptoCardMain,
  CryptoCardPerson,
  ImageCardLogoLeft,
  ImageCardPerson,
  CryptoCardName,
  ChartBlock,
} from './styledRightGamer';
import {
  GamerBlock,
  PlayerBlock,
  PlayerInfo,
  UserBlock,
  CryptoBlock,
  UserNameWrapper,
  CryptoCardLogo,
  CryptoCardHp,
  ProgressText,
} from '../styledActiveBattle';
import { giveProgressPercent, returnCorrectCryptoData } from '../../../utils/helpers';
import Chart from '../../chart/chart';

const RightGamer: React.FC<any> = (props: any) => {
  const lastElementArray = props.cardData.steps.length - 1;
  const info = props.cardData.secondPlayer;
  const actualHealth =
    props.cardData.steps.length > 1
      ? props.cardData.steps[lastElementArray][info.cryptoName]
      : props.cardData.healthPoints;
  return (
    <GamerBlock>
      <PlayerBlock>
        <PlayerInfo>
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
          <UserBlock>
            <AwardsBlock>
              <Image src={returnCorrectCryptoData(info.cryptoName, 'flag')} />
            </AwardsBlock>
            <AvatarBlock>
              <Image src={info.userInfo.avatar} />
            </AvatarBlock>
            <UserNameWrapper>
              <UserName>{info.userInfo.alias}</UserName>
            </UserNameWrapper>
          </UserBlock>
        </PlayerInfo>
        <PlayerHp>
          <CryptoCardHp>
            <ProgressText>{actualHealth} HP</ProgressText>
            <Progress percent={giveProgressPercent(props.cardData.healthPoints, actualHealth)} color={'red'} />
          </CryptoCardHp>
        </PlayerHp>
      </PlayerBlock>
      <ChartBlock>
        <Chart crypto={returnCorrectCryptoData(info.cryptoName, 'cryptoCode')} />
      </ChartBlock>
    </GamerBlock>
  );
};

export default RightGamer;
