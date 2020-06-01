import * as React from 'react';

import { BattleWrapper, KnifesBlock, BattleDescriptionBlock, KnifeOne, KnifeTwo } from './styledActiveBattle';

const BattleBlock: React.FC<any> = (props: any) => {
  return (
    <BattleWrapper>
      <KnifesBlock>
        <KnifeOne src="/static/knife.svg" />
        <KnifeTwo src="/static/knife.svg" />
      </KnifesBlock>
      <BattleDescriptionBlock>
        {props.cardData.steps.map((item, index) => (
          <p key={index}>{item.message}</p>
        ))}
      </BattleDescriptionBlock>
    </BattleWrapper>
  );
};

export default BattleBlock;
