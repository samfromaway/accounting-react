import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Stack, EventTracker } from '@devexpress/dx-react-chart';
import { Typography } from '@material-ui/core';

const AccountingSummaryChart = ({ title, data, total, categories }) => {
  return (
    <Paper style={{ position: 'relative' }}>
      <Typography variant='h6' style={{ padding: '10px 0px 10px 24px' }}>
        {title}
      </Typography>
      <Typography
        variant='h6'
        style={{ position: 'absolute', top: '10px', right: '24px' }}
      >
        Total CHF: {total}
      </Typography>
      <Chart data={data} height={400}>
        <ValueScale name='chfAmount' />

        <ArgumentAxis />
        <ValueAxis scaleName='chfAmount' />

        {categories.map((category) => (
          <BarSeries
            key={category.value}
            name={category.label}
            valueField={category.value}
            argumentField='month'
            scaleName='chfAmount'
          />
        ))}
        <EventTracker />
        <Tooltip />
        <Stack
          stacks={[
            {
              series: categories.map((category) => category.label),
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
