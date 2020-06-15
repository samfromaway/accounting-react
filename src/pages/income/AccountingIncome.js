import React, { Fragment, useContext } from 'react';
import IncomeTransactionsContext from '../../context/income/incomeTransactionsContext';
import AccountingSummary from '../../components/AccountingSummary';
import AccountingInput from '../../components/AccountingInput';
import AccountingTable from '../../components/AccountingTable';

import { INCOME_CATEGORIES } from '../../constants';
import Box from '@material-ui/core/Box';

const AccountingIncome = () => {
  const {
    transactions,
    addTransactions,
    deleteTransaction,
    editTransaction,
  } = useContext(IncomeTransactionsContext);

  return (
    <Fragment>
      <AccountingSummary
        transactions={transactions}
        title={'Income (CHF)'}
        categories={INCOME_CATEGORIES}
      />
      <Box m={6} />
      <AccountingInput categories={INCOME_CATEGORIES} />
      <Box m={6} />
      <AccountingTable
        transactions={transactions}
        addTransactions={addTransactions}
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}
        categories={INCOME_CATEGORIES}
      />
    </Fragment>
  );
};

export default AccountingIncome;
