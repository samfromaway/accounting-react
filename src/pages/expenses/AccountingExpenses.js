import React, { Fragment, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ExpensesTransactionsContext from '../../context/expenses/expensesTransactionsContext';
import AccountingSummary from '../../components/AccountingSummary';
import AccountingInput from '../../components/AccountingInput';
import AccountingTable from '../../components/AccountingTable';
import CategoriesContext from '../../context/categories/categoriesContext';

const AccountingExpenses = () => {
  const {
    expensesTransactions,
    addTransaction,
    deleteTransaction,
    editTransaction,
  } = useContext(ExpensesTransactionsContext);
  const { expensesCategories } = useContext(CategoriesContext);
  return (
    <Fragment>
      <Box m={11} />
      <Container fixed maxWidth='lg'>
        <AccountingSummary
          transactions={expensesTransactions}
          title={'Expenses (CHF)'}
          categories={expensesCategories}
        />
        <Box m={6} />
        <AccountingInput
          categories={expensesCategories}
          addTransaction={addTransaction}
        />
        <Box m={6} />
        <AccountingTable
          transactions={expensesTransactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
          categories={expensesCategories}
        />
      </Container>
      <Box m={10} />
    </Fragment>
  );
};

export default AccountingExpenses;
