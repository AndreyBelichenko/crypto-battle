import React from 'react';

import { ProgressWrapper, Progress } from './styledComponentProgress';

interface PropsProgress {
  hp: number;
}

const ProgressSelf = (props: PropsProgress) => (
  <ProgressWrapper>
    <Progress percent={props.hp} />
  </ProgressWrapper>
);

export default ProgressSelf;
