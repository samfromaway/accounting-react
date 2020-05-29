import React from 'react';
import Header from './components/Header';
import AccountingIncome from './pages/income/AccountingIncome';
import AccountingExpenses from './pages/expenses/AccountingExpenses';
import IncomeTransactionsState from './context/income/IncomeTransactionsState';
import ExpensesTransactionsState from './context/expenses/ExpensesTransactionsState';
import ThemeState from './context/theme/ThemeState';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './styles/theme';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import './app.css';

const App = () => {
  return (
    <IncomeTransactionsState>
      <ExpensesTransactionsState>
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
      </ExpensesTransactionsState>
    </IncomeTransactionsState>
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
// export to pdf
