import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Stack, EventTracker } from '@devexpress/dx-react-chart';

const AccountingSummaryChart = ({ title, data }) => {
  return (
    <Paper>
      <Chart data={data} height={400}>
        <ValueScale name='chfAmount' />

        <ArgumentAxis />
        <ValueAxis scaleName='chfAmount' />
        <Title text={title} />
        <BarSeries
          name={'HTE Products'}
          valueField='hteProducts'
          argumentField='month'
          scaleName='chfAmount'
        />
        <BarSeries
          name={'HTE Services'}
          valueField='hteServices'
          argumentField='month'
          scaleName='chfAmount'
        />
        <BarSeries
          name={'Comissions'}
          valueField='comissions'
          argumentField='month'
          scaleName='chfAmount'
        />
        <BarSeries
          name={'Dev World'}
          valueField='devWorld'
          argumentField='month'
          scaleName='chfAmount'
        />
        <BarSeries
          name={'Youtube'}
          valueField='youtube'
          argumentField='month'
          scaleName='chfAmount'
        />
        <EventTracker />
        <Tooltip />
        <Stack
          stacks={[
            {
              series: [
                'HTE Products',
                'HTE Services',
                'Comissions',
                'Dev World',
                'Youtube',
              ],
            },
          ]}
        />
        <Legend position={'right'} />
      </Chart>
    </Paper>
  );
};

export default AccountingSummaryChart;

//https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/getting-started/
