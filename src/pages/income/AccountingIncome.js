import React, { useContext, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IncomeTransactionsContext from '../../context/income/incomeTransactionsContext';
import AccountingSummary from '../../components/AccountingSummary';
import AccountingInput from '../../components/AccountingInput';
import AccountingTable from '../../components/AccountingTable';

import { INCOME_CATEGORIES } from '../../constants';

const AccountingIncome = () => {
  const {
    transactions,
    addTransactions,
    deleteTransaction,
    editTransaction,
  } = useContext(IncomeTransactionsContext);

  return (
    <Fragment>
      <Box m={14} />
      <Container fixed maxWidth='lg'>
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
      </Container>
      <Box m={10} />
    </Fragment>
  );
};

export default AccountingIncome;
