import React, { Fragment, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ExpensesTransactionsContext from '../../context/expenses/expensesTransactionsContext';
import AccountingSummary from '../../components/AccountingSummary';
import AccountingInput from '../../components/AccountingInput';
import AccountingTable from '../../components/AccountingTable';

import { EXPENSES_CATEGORIES } from '../../constants';

const AccountingIncome = () => {
  const {
    transactions,
    addTransactions,
    deleteTransaction,
    editTransaction,
  } = useContext(ExpensesTransactionsContext);

  return (
    <Fragment>
      <Box m={14} />
      <Container fixed maxWidth='lg'>
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
          categories={EXPENSES_CATEGORIES}
        />
      </Container>
      <Box m={10} />
    </Fragment>
  );
};

export default AccountingIncome;
