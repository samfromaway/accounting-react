import React from 'react';
import { Header } from './components/Header';
import { AccountingSummary } from './components/AccountingSummary';
import { AccountingTransaction } from './components/AccountingTransaction';
import { Grid } from '@material-ui/core';
import { GlobalProvider } from './context/GlobalState';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';
const theme = createMuiTheme();

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Grid container direction='column'>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <AccountingSummary />
              <AccountingTransaction />
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;

// Edit
// Save?
// Post
// resetinput
//reseteditmode
//
