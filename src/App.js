import React from 'react';
import Header from './pages/income/components/Header';
import './App.css';
import AccountingSummary from './pages/income/components/AccountingSummary';
import AccountingInput from './pages/income/components/AccountingInput';
import Inputold from './pages/income/components/inputold';
import AccountingTable from './pages/income/components/AccountingTable';
import { GlobalProvider } from './pages/income/context/GlobalState';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#2c63bf', light: '#a6c7ff', dark: '#002159' },
    secondary: { light: '#0066ff', main: '#0044ff' },
  },
});

const App = () => {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Box m={8} />
        <Container fixed maxWidth='lg'>
          <AccountingSummary />
          <Box m={6} />
          <AccountingInput />
          <Box m={6} />
          <AccountingTable />
        </Container>
        <Box m={10} />
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default App;
