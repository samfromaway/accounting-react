import React, { Fragment, useContext } from 'react';
import AccountingSummaryChart from './AccountingSummaryChart';
import TransactionsContext from '../context/transactions/transactionsContext';
import { useFilterPerMonth } from '../hooks/useFilterPerMonth';
import { Grid } from '@material-ui/core';

const AccountingSummary = () => {
  const { transactions } = useContext(TransactionsContext);
  const data = useFilterPerMonth(transactions);

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <AccountingSummaryChart title={'Turnover'} data={data} />
        </Grid>
        <Grid item xs={4}>
          <AccountingSummaryChart title={'Income2'} data={data} />
        </Grid>
        <Grid item xs={4}>
          <AccountingSummaryChart title={'Income2'} data={data} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AccountingSummary;
