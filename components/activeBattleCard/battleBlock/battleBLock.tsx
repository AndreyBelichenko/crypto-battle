import * as React from 'react';
import { Image } from 'semantic-ui-react';

import {
  BattleWrapper,
  KnifesBlock,
  BattleDescriptionBlock,
  KnifeOne,
  KnifeTwo,
  BattleInfo,
  BattleInfoText,
  BattleInfoBet,
  BetMount,
  BetCrypto,
  BetCryptoLogo,
  BattleInfoShare,
  CryptoLogoImage,
} from './styledActiveBattle';

const BattleBlock: React.FC<any> = (props: any) => {
  const scroll: any = React.useRef();
  React.useEffect(() => {
    scroll.current.scrollTop = scroll.current.scrollHeight;
  });
  const arrowLayout = (status: string): React.ReactElement => {
    switch (status) {
      case 'UP':
        return <img src={'/static/arrowUp.svg'} alt="up" />;
      case 'DOWN':
        return <img src={'/static/arrowDown.svg'} alt="down" />;
      default:
        return <React.Fragment />;
    }
  };
  return (
    <BattleWrapper>
      <BattleInfo>
        <BattleInfoText>Награда за победу</BattleInfoText>
        <BattleInfoBet>
          <BetMount>2</BetMount>
          <BetCrypto>HIVE</BetCrypto>
          <BetCryptoLogo>
            <Image src="/static/hive.svg" />
          </BetCryptoLogo>
        </BattleInfoBet>
        <BattleInfoShare>
          <Image src={'/static/share.svg'} style={{ height: '100%', width: '100%' }} />
        </BattleInfoShare>
      </BattleInfo>
      <KnifesBlock>
        <KnifeOne src="/static/knife.svg" />
        <KnifeTwo src="/static/knife.svg" />
      </KnifesBlock>
      <BattleDescriptionBlock ref={scroll}>
        {props.cardData.steps.map((item: any, index: number) => (
          <p key={index}>
            {arrowLayout(item.status)}
            {item.message}
          </p>
        ))}
      </BattleDescriptionBlock>
    </BattleWrapper>
  );
};

export default BattleBlock;
