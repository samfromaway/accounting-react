import React, { useContext, useEffect } from 'react';
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
import TransactionsContext from '../context/transactions/transactionsContext';
import { useChartData } from '../data/turnover';

const AccountingSummaryChart = ({ title }) => {
  const { transactions } = useContext(TransactionsContext);

  const data = useChartData(transactions);
  console.log(transactions);
  console.log(data);

  return (
    <Paper>
      <button onClick={console.log(data)}>ggggggggg</button>
      <Chart data={data} height={500}>
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
        <Legend position={'bottom'} />
      </Chart>
    </Paper>
  );
};

export default AccountingSummaryChart;

//https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/getting-started/
