import React, { Fragment, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import ExpensesTransactionsContext from '../../context/expenses/expensesTransactionsContext';
import AccountingSummary from '../../components/AccountingSummary';
import AccountingInput from '../../components/AccountingInput';
import AccountingTable from '../../components/AccountingTable';

import { EXPENSES_CATEGORIES } from '../../constants';

const AccountingIncome = () => {
  const {
    expensesTransactions,
    addTransactions,
    deleteTransaction,
    editTransaction,
  } = useContext(ExpensesTransactionsContext);

  return (
    <Fragment>
      <Box m={11} />
      <Container fixed maxWidth='lg'>
        <Typography
          variant='h4'
          align='center'
          style={{ paddingBottom: '20px' }}
        >
          Expenses
        </Typography>

        <AccountingSummary
          transactions={expensesTransactions}
          title={'Expenses (CHF)'}
          categories={EXPENSES_CATEGORIES}
        />
        <Box m={6} />
        <AccountingInput categories={EXPENSES_CATEGORIES} />
        <Box m={6} />
        <AccountingTable
          transactions={expensesTransactions}
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
