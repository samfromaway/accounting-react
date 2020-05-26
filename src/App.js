import React from 'react';
import Header from './pages/income/components/Header';
import './App.css';
import AccountingSummary from './pages/income/components/AccountingSummary';
import AccountingTransaction from './pages/income/components/AccountingTransaction';
import { GlobalProvider } from './pages/income/context/GlobalState';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

const App = () => {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Container fixed maxWidth='lg'>
          <AccountingSummary />
          <AccountingTransaction />
        </Container>
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default App;

// Edit
// Save?
// Post
// resetinput
//reseteditmode
//
