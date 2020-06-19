import React, { useContext, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import IncomeTransactionsContext from '../../context/income/incomeTransactionsContext';
import AccountingSummary from '../../components/AccountingSummary';
import AccountingInput from '../../components/AccountingInput';
import AccountingTable from '../../components/AccountingTable';
import CategoriesContext from '../../context/categories/categoriesContext';

const AccountingIncome = () => {
  const {
    incomeTransactions,
    addTransaction,
    deleteTransaction,
    editTransaction,
    addChfValue,
  } = useContext(IncomeTransactionsContext);
  const { incomeCategories } = useContext(CategoriesContext);
  return (
    <Fragment>
      <Box m={11} />
      <Container fixed maxWidth='lg'>
        <AccountingSummary
          transactions={incomeTransactions}
          title={'Income (CHF)'}
          categories={incomeCategories}
        />
        <Box m={6} />
        <AccountingInput
          categories={incomeCategories}
          addTransaction={addTransaction}
        />
        <Box m={6} />
        <AccountingTable
          transactions={incomeTransactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
          categories={incomeCategories}
          addChfValue={addChfValue}
        />
      </Container>
      <Box m={10} />
    </Fragment>
  );
};

export default AccountingIncome;
