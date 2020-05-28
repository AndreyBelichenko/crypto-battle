import React from 'react';
import { Loader } from 'semantic-ui-react';

import { LoaderWrapper } from './styledLoader';

const LoaderExampleInlineCentered = () => (
  <LoaderWrapper>
    <Loader active inline="centered" size={'large'} />
  </LoaderWrapper>
);

export default LoaderExampleInlineCentered;
