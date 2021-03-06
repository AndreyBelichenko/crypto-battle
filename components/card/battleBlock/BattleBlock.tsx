import * as React from 'react';
import { Image } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import { BattleWrapper, KnifesBlock, BattleImg, WatchBattle } from './battleStyledComponent';

const BattleBlock: React.FC<any> = (props: any) => {
  const info = props.data;
  const router = useRouter();
  const handleRoute = () =>
    router.push({
      pathname: '/active-battle',
      query: {
        firstPlayer: info.firstPlayer.userInfo.alias,
        secondPlayer: info.secondPlayer.userInfo.alias,
        battleId: info._id,
      },
    });

  return (
    <BattleWrapper>
      <KnifesBlock>
        <Image src={'/static/gifSwords.gif'} />
      </KnifesBlock>
      <BattleImg src="/static/vs.png" />
      <WatchBattle color="orange" onClick={handleRoute}>
        Watch the battle
      </WatchBattle>
    </BattleWrapper>
  );
};

export default BattleBlock;
