import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import {
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip,
  CartesianGrid,
  BarChart,
  LabelList,
} from 'recharts';
import { Typography } from '@material-ui/core';

const AccountingSummaryChart = ({ title, data, total, categories }) => {
  const theme = useTheme();
  console.log(theme.palette.text.primary);
  const ColorConfig = categories.map((category) => category.value);

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
      <BarChart
        width={730}
        height={400}
        data={data}
        margin={{
          top: 16,
          right: 16,
          bottom: 0,
          left: 24,
        }}
      >
        <XAxis
          dataKey='month'
          interval={0}
          background={theme.palette.text.primary}
        />
        <YAxis fill={theme.palette.text.primary} />
        <Tooltip />
        <Legend verticalAlign='top' height={36} />
        {categories.map((category) => (
          <Bar
            key={category.value}
            dataKey={category.value}
            label={category.label}
            stackId='x'
            fill={ColorConfig[category.value]}
          >
            <LabelList dataKey={category.value} />
          </Bar>
        ))}
      </BarChart>
    </Paper>
  );
};

export default AccountingSummaryChart;

//https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/getting-started/
//https://medium.com/@kogy92/recharts-stack-order-bf22c245d0be
