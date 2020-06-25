import React, { useState } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AccountingIncome from './pages/income/AccountingIncome';
import Home from './pages/home/Home';
import AccountingExpenses from './pages/expenses/AccountingExpenses';
import IncomeTransactionsState from './context/income/IncomeTransactionsState';
import ExpensesTransactionsState from './context/expenses/ExpensesTransactionsState';
import CategoriesState from './context/categories/CategoriesState';
import CurrenciesState from './context/currencies/CurrenciesState';
import { AuthProvider } from './auth/Auth';
import SettingsModal from './modals/SettingsModal';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PrivateRoute from './auth/PrivateRoute';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openSettingsModal, setOpenSettingsModal] = useState(false);

  const handleOpenSettingsModal = () => {
    setOpenSettingsModal(true);
  };

  const handleCloseSettingsModal = () => {
    setOpenSettingsModal(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      // primary: { main: '#2c63bf', light: '#a6c7ff', dark: '#002159' },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CategoriesState>
          <CurrenciesState>
            <IncomeTransactionsState>
              <ExpensesTransactionsState>
                <Router>
                  <Header
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                    handleOpenSettingsModal={handleOpenSettingsModal}
                  />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <PrivateRoute
                      exact
                      path='/income'
                      component={AccountingIncome}
                    />
                    <PrivateRoute
                      exact
                      path='/expenses'
                      component={AccountingExpenses}
                    />
                  </Switch>
                </Router>
                <SettingsModal
                  openSettingsModal={openSettingsModal}
                  handleCloseSettingsModal={handleCloseSettingsModal}
                />
              </ExpensesTransactionsState>
            </IncomeTransactionsState>
          </CurrenciesState>
        </CategoriesState>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

// master currency
// ENV Variables   https://www.youtube.com/watch?v=unr4s3jd9qA&t=1s
// feedback if transaction added
// master year?
// max and min display size
// Alert() in other element from Material UI
// 100,000 trennzeichen
// proptypes
// export to pdf

//ISSUES
// material ui table date format when edit
// if by coincidence the new and old currency exchange should be the exact same you can't update just the currence when editing via the table.

// nice to have
// tooltip buttons input
// Button Add confimration
// user currency add in settings
// undo delete
// inform if no intenret
// Charts tooltip styling

//Could have a look into:
// permanent scrollbar when select dropdown is open?

//Don't forget
//css baseline?
// uninstall unesed chart library

//Similar App
//https://codesandbox.io/s/dark-theme-switch-tp37c?from-embed=&file=/src/Dashboard/Dashboard.js:5322-5339
//https://github.com/uds5501/dashboard-switch-themes/tree/5a71a39fe3cf443826054da48b645fbc7803e40f
//https://medium.com/heuristics/react-dark-mode-switch-in-material-ui-dashboard-82fcf1cded66
