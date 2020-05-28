import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';

import { EventTracker } from '@devexpress/dx-react-chart';

const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.44 },
  { year: '1990', population: 5.31 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.93 },
];

const AccountingSummaryChart = () => {
  return (
    <Paper>
      <Chart data={data} height={300}>
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries valueField='population' argumentField='year' />
        <Title text='Income' />
        <EventTracker />
        <Tooltip />
      </Chart>
    </Paper>
  );
};

export default AccountingSummaryChart;

//https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/getting-started/