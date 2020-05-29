import React, { Fragment, useContext } from 'react';
import AccountingSummaryChart from './AccountingSummaryChart';
import TransactionsContext from '../context/transactions/transactionsContext';
import { useFilterPerMonth } from '../hooks/useFilterPerMonth';
import { Grid } from '@material-ui/core';

const AccountingSummary = () => {
  const { transactions } = useContext(TransactionsContext);
  const dataIncome = useFilterPerMonth(transactions);

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <AccountingSummaryChart title={'Income (CHF)'} data={dataIncome} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AccountingSummary;
