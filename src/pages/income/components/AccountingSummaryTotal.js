import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const AccountingSummaryTotal = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.chf);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <Paper>
      <Typography component='div'>CHF {total}</Typography>
    </Paper>
  );
};

export default AccountingSummaryTotal;
