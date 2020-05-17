import * as React from 'react';
import { ChartWrapper } from './styledComponent';
// @ts-ignore
import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

type ChartProps = {
  crypto: string,
};

const Chart: React.FC<ChartProps> = ({ crypto }) => (
    <ChartWrapper>
        <TradingViewEmbed
            widgetType={widgetType.ADVANCED_CHART}
            widgetConfig={{
              colorTheme: 'light',
              symbol: crypto,
              width: '100%',
            }}
        />
    </ChartWrapper>
);

export default Chart;
