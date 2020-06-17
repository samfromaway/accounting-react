import React, { Fragment, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import ExpensesTransactionsContext from '../../context/expenses/expensesTransactionsContext';
import AccountingSummary from '../../components/AccountingSummary';
import AccountingInput from '../../components/AccountingInput';
import AccountingTable from '../../components/AccountingTable';
import CategoriesContext from '../../context/categories/categoriesContext';

const AccountingIncome = () => {
  const {
    expensesTransactions,
    addTransactions,
    deleteTransaction,
    editTransaction,
  } = useContext(ExpensesTransactionsContext);
  const { expensesCategories } = useContext(CategoriesContext);

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
          categories={expensesCategories}
        />
        <Box m={6} />
        <AccountingInput categories={expensesCategories} />
        <Box m={6} />
        <AccountingTable
          transactions={expensesTransactions}
          addTransactions={addTransactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
          categories={expensesCategories}
        />
      </Container>
      <Box m={10} />
    </Fragment>
  );
};

export default AccountingIncome;
