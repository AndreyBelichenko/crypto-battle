import * as React from 'react';
// @ts-ignore
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';


import { ChartWrapper } from './styledChart';

type ChartProps = {
  crypto: string;
  description: boolean;
};

const Chart: React.FC<ChartProps> = ({ crypto, description }) => (
  <ChartWrapper>
    {/* @ts-ignore*/}
    <AdvancedRealTimeChart
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
      hide_legend={description}
    />
  </ChartWrapper>
);

export default Chart;
