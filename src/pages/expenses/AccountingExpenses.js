import React, { Fragment, useContext } from 'react';
import ExpensesTransactionsContext from '../../context/expenses/expensesTransactionsContext';
import AccountingSummary from '../../components/AccountingSummary';
import AccountingInput from '../../components/AccountingInput';
import AccountingTable from '../../components/AccountingTable';

import { EXPENSES_CATEGORIES } from '../../constants';
import Box from '@material-ui/core/Box';

const AccountingIncome = () => {
  const {
    transactions,
    addTransactions,
    deleteTransaction,
    editTransaction,
  } = useContext(ExpensesTransactionsContext);

  return (
    <Fragment>
      <AccountingSummary
        transactions={transactions}
        title={'Expenses (CHF)'}
        categories={EXPENSES_CATEGORIES}
      />
      <Box m={6} />
      <AccountingInput categories={EXPENSES_CATEGORIES} />
      <Box m={6} />
      <AccountingTable
        transactions={transactions}
        addTransactions={addTransactions}
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}
      />
    </Fragment>
  );
};

export default AccountingIncome;
