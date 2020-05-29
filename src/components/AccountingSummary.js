import React, { Fragment, useContext } from 'react';
import AccountingSummaryChart from './AccountingSummaryChart';
import { useFilterPerMonth } from '../hooks/useFilterPerMonth';
import { Grid } from '@material-ui/core';

const AccountingSummary = ({ transactions, title, categories }) => {
  const dataIncome = useFilterPerMonth(transactions, categories);
  const total = transactions
    .map((transaction) => transaction.chfAmount)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <AccountingSummaryChart
            title={title}
            data={dataIncome}
            total={total}
            categories={categories}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AccountingSummary;
