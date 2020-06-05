import * as React from 'react';
// @ts-ignore
import { RealTimeChartWidget } from 'react-tradingview-widgets';

import { ChartWrapper } from './styledChart';

type ChartProps = {
  crypto: string;
};

const Chart: React.FC<ChartProps> = ({ crypto }) => (
  <ChartWrapper>
    <RealTimeChartWidget
      symbol={crypto}
      locale="en"
      interval={'1'}
      style={'2'}
      hide_top_toolbar={true}
      save_image={false}
      show_popup_button={false}
      withdateranges={false}
      allow_symbol_change={false}
      autosize={true}
      hide_legend={true}
    />
  </ChartWrapper>
);

export default Chart;
