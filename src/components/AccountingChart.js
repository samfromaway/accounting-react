import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import {
  ResponsiveContainer,
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
  const createColorConfig = () => {
    const colorConfig = [];
    const availableColors = [
      '#03396C',
      '#2FA207',
      '#6516D2',
      '#16A3D2',
      '#D2A116',
      '#D23016',
      '#CDD216',
      '#D21688',
    ];
    let colorCount = 0;
    const categoriesValues = categories.map((category) => category.value);
    categoriesValues.forEach((category) => {
      const incrementColorCount = () => {
        if (colorCount >= availableColors.length - 1) {
          colorCount = 0;
        } else {
          colorCount++;
        }
      };

      incrementColorCount();
      {
        colorConfig[category] = availableColors[colorCount];
      }
    });
    return colorConfig;
  };
  const colorConfig = createColorConfig();
  console.log(data);
  const legendFormatter = (value, entry, index) => {
    const category = categories.filter((category) => category.value === value);
    return category[0].label;
  };

  const tooltipFormatter = (value, name) => {
    const category = categories.filter((category) => category.value === name);
    return [value, category[0].label];
  };

  return (
    <Paper style={{ position: 'relative' }}>
      <Typography variant='h6' style={{ padding: '10px 0px 10px 24px' }}>
        {title}
      </Typography>
      <Typography
        variant='h6'
        style={{ position: 'absolute', top: '10px', right: '24px' }}
      >
        Total CHF: {total.toFixed(2)}
      </Typography>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 80,
            bottom: 0,
            left: 16,
          }}
        >
          <XAxis
            dataKey='month'
            interval={0}
            background={theme.palette.text.primary}
            stroke={theme.palette.text.primary}
          />
          <YAxis
            fill={theme.palette.text.primary}
            stroke={theme.palette.text.primary}
          />
          <Tooltip formatter={tooltipFormatter} />
          <Legend verticalAlign='top' height={36} formatter={legendFormatter} />
          {categories.map((category) => (
            <Bar
              key={category.value}
              dataKey={category.value}
              stackId='x'
              fill={colorConfig[category.value]}
            >
              <LabelList dataKey={category.value} stroke='white' />
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default AccountingSummaryChart;

//https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/getting-started/
//https://medium.com/@kogy92/recharts-stack-order-bf22c245d0be
