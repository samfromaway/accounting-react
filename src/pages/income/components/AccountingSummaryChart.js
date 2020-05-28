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
import turnover from '../data/turnover';

const AccountingSummaryChart = ({ title }) => {
  const { transactions } = useContext(TransactionsContext);

  function generateMonthDataSum(from, to) {
    const total = transactions.filter(
      (transaction) =>
        transaction.date >= 2020 + from && transaction.date <= 2020 + to
    );

    return total;
  }

  const sumByCategoryByMonth = (month, monthData) => {
    const hteProducts = [0];
    const hteServices = [0];
    const comissions = [0];
    const devWorld = [0];
    const youtube = [0];

    monthData.forEach((e) => {
      switch (e.category) {
        case 'hteProducts':
          hteProducts.push(e.chfAmount);
          break;
        case 'hteServices':
          hteServices.push(e.chfAmount);
          break;
        case 'comissions':
          comissions.push(e.chfAmount);
          break;
        case 'devWorld':
          devWorld.push(e.chfAmount);
          break;
        case 'youtube':
          youtube.push(e.chfAmount);
          break;

        default:
          alert('error in generating chart');
        //error can be deleted in production
      }
    });

    return {
      month: month,
      hteProducts: hteProducts.reduce((acc, item) => (acc += item), 0),
      hteServices: hteServices.reduce((acc, item) => (acc += item), 0),
      comissions: comissions.reduce((acc, item) => (acc += item), 0),
      devWorld: devWorld.reduce((acc, item) => (acc += item), 0),
      youtube: youtube.reduce((acc, item) => (acc += item), 0),
    };
  };

  useEffect(() => {});
  const janTotal = sumByCategoryByMonth(
    'Jan',
    generateMonthDataSum('-01-01', '-01-31')
  );
  const febTotal = sumByCategoryByMonth(
    'Feb',
    generateMonthDataSum('-02-01', '-02-31')
  );
  const marTotal = sumByCategoryByMonth(
    'Mar',
    generateMonthDataSum('-03-01', '-03-31')
  );
  const aprTotal = sumByCategoryByMonth(
    'Apr',
    generateMonthDataSum('-04-01', '-04-31')
  );
  const mayTotal = sumByCategoryByMonth(
    'May',
    generateMonthDataSum('-05-01', '-05-31')
  );
  const junTotal = sumByCategoryByMonth(
    'Jun',
    generateMonthDataSum('-06-01', '-06-31')
  );
  const julTotal = sumByCategoryByMonth(
    'Jul',
    generateMonthDataSum('-07-01', '-07-31')
  );
  const augTotal = sumByCategoryByMonth(
    'Aug',
    generateMonthDataSum('-08-01', '-08-31')
  );
  const sepTotal = sumByCategoryByMonth(
    'Sep',
    generateMonthDataSum('-09-01', '-09-31')
  );
  const octTotal = sumByCategoryByMonth(
    'Oct',
    generateMonthDataSum('-10-01', '-10-31')
  );
  const novTotal = sumByCategoryByMonth(
    'Nov',
    generateMonthDataSum('-11-01', '-11-31')
  );
  const decTotal = sumByCategoryByMonth(
    'Dec',
    generateMonthDataSum('-12-01', '-12-31')
  );

  const data = [
    janTotal,
    febTotal,
    marTotal,
    aprTotal,
    mayTotal,
    junTotal,
    julTotal,
    augTotal,
    sepTotal,
    octTotal,
    novTotal,
    decTotal,
  ];

  console.log(janTotal);

  return (
    <Paper>
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
