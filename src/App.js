import React, { useContext } from 'react';
import Header from './components/Header';
import AccountingSummary from './components/AccountingSummary';
import AccountingInput from './components/AccountingInput';
import AccountingIncome from './pages/income/AccountingIncome';
import TransactionsState from './context/transactions/TransactionsState';
import ThemeState from './context/theme/ThemeState';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './styles/theme';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const App = () => {
  return (
    <TransactionsState>
      <ThemeState>
        <ThemeProvider theme={Theme}>
          <Header />
          <Box m={8} />
          <Container fixed maxWidth='lg'>
            <AccountingIncome />
          </Container>
          <Box m={10} />
        </ThemeProvider>
      </ThemeState>
    </TransactionsState>
  );
};

export default App;

//Charts
// Button Add confimration
// CHf total input style
// 100,000 trennzeichen
// dark mode toggle
//title fuer import box
// left align title chart
// style cancle button
//proptypes
// better tooltip chart
// tooltip buttons input
//
