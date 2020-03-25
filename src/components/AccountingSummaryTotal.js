import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AccountingSummaryTotal = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.chf);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return <div>CHF {total}</div>;
};
