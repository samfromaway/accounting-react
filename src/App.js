import React from 'react';
import Header from './pages/income/components/Header';
import './App.css';
import AccountingSummary from './pages/income/components/AccountingSummary';
import AccountingList from './pages/income/components/AccountingList';
import { GlobalProvider } from './pages/income/context/GlobalState';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
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
          <Box m={6} />
          <AccountingList />
        </Container>
        <Box m={10} />
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default App;
