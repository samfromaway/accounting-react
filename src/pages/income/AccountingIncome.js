import React, { useContext, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import IncomeTransactionsContext from '../../context/income/incomeTransactionsContext';
import AccountingSummary from '../../components/AccountingSummary';
import AccountingInput from '../../components/AccountingInput';
import AccountingTable from '../../components/AccountingTable';
import CategoriesContext from '../../context/categories/categoriesContext';
import { INCOME_CATEGORIES } from '../../constants';

const AccountingIncome = () => {
  const {
    incomeTransactions,
    addTransactions,
    deleteTransaction,
    editTransaction,
  } = useContext(IncomeTransactionsContext);
  const { incomeCategories } = useContext(CategoriesContext);

  return (
    <Fragment>
      <Box m={11} />
      <Container fixed maxWidth='lg'>
        <Typography
          variant='h4'
          align='center'
          style={{ paddingBottom: '20px' }}
        >
          Income
        </Typography>
        <AccountingSummary
          transactions={incomeTransactions}
          title={'Income (CHF)'}
          categories={incomeCategories} // this is the issue
        />
        <Box m={6} />
        <AccountingInput categories={incomeCategories} />
        <Box m={6} />
        <AccountingTable
          transactions={incomeTransactions}
          addTransactions={addTransactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
          categories={incomeCategories}
        />
      </Container>
      <Box m={10} />
    </Fragment>
  );
};

export default AccountingIncome;
