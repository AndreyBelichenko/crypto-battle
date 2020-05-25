import * as React from 'react';
import { Progress, Image } from 'semantic-ui-react';

import { CryptoCardPerson, CryptoCardName, ChartTrigger } from './styledLeftGamer';
import {
  GamerBlock,
  CryptoCard,
  GamerBlockOne,
  GamerBlockTwo,
  CryptoCardLogo,
  CryptoCardHp,
  CryptoCardMain,
  UserBlock,
  UserName,
  AwardsBlock,
  AwardsText,
  ProgressText,
} from '../styledActiveBattle';

const LeftGamer: React.FC = () => {
  return (
    <GamerBlock>
      <GamerBlockOne>
        <AwardsBlock>
          <AwardsText>
            место
            <br /> для
            <br /> наград
          </AwardsText>
          <Image src="/static/cryptoList/icx/flag-icx.svg" size="small" />
        </AwardsBlock>
        <CryptoCard>
          <CryptoCardMain>
            <CryptoCardLogo>
              <Image src="/static/cryptoList/bat/logo-bat.svg" />
            </CryptoCardLogo>
            <CryptoCardPerson>
              <Image src="/static/cryptoList/bat/person-bat.svg" />
            </CryptoCardPerson>
            <CryptoCardName>BTC</CryptoCardName>
          </CryptoCardMain>
          <CryptoCardHp>
            <ProgressText>50hp</ProgressText>
            <Progress percent={50} color="red" />
          </CryptoCardHp>
        </CryptoCard>
      </GamerBlockOne>
      <GamerBlockTwo>
        <UserBlock>
          <Image src="/static/user.svg" />
          <UserName>alexeygrigurko</UserName>
        </UserBlock>
        <ChartTrigger>
          <Image src="/static/triggerChart.svg" />
        </ChartTrigger>
      </GamerBlockTwo>
    </GamerBlock>
  );
};

export default LeftGamer;
