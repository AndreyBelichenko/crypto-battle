import * as React from 'react';

import { BattleWrapper, KnifesBlock, BattleDescriptionBlock, KnifeOne, KnifeTwo } from './styledActiveBattle';

const BattleBlock: React.FC<any> = (props: any) => {
  const scroll: any = React.useRef();
  React.useEffect(() => {
    scroll.current.scrollTop = scroll.current.scrollHeight;
  });

  return (
    <BattleWrapper>
      <KnifesBlock>
        <KnifeOne src="/static/knife.svg" />
        <KnifeTwo src="/static/knife.svg" />
      </KnifesBlock>
      <BattleDescriptionBlock ref={scroll}>
        {props.cardData.steps.map((item: any, index: number) => (
          <p key={index}>{item.message}</p>
        ))}
      </BattleDescriptionBlock>
    </BattleWrapper>
  );
};

export default BattleBlock;
