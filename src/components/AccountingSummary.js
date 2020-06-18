import React, { Fragment } from 'react';
//import AccountingSummaryChart from './AccountingSummaryChart';
import AccountingChart from './AccountingChart';
import { useFilterPerMonth } from '../hooks/useFilterPerMonth';
import { Grid } from '@material-ui/core';

const AccountingSummary = ({ transactions, title, categories }) => {
  const chartData = useFilterPerMonth(transactions, categories);
  const total = transactions
    .map((transaction) => transaction.chfAmount)
    .reduce((acc, item) => (acc += item), 0);
  // console.log(chartData);
  // console.log(transactions);
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <AccountingChart
            title={title}
            data={chartData}
            total={total}
            categories={categories}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AccountingSummary;
