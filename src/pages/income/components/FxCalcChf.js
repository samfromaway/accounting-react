import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const FxCalcChfOLD = () => {
  const date = useState('');

  const { transactions } = useContext(GlobalContext);
  const chf = transactions.map(transaction => transaction.chf * 22);
  console.log(chf);
  return chf;
};
