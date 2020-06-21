import React, { useState } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AccountingIncome from './pages/income/AccountingIncome';
import Dashboard from './pages/dashboard/Dashboard';
import AccountingExpenses from './pages/expenses/AccountingExpenses';
import IncomeTransactionsState from './context/income/IncomeTransactionsState';
import ExpensesTransactionsState from './context/expenses/ExpensesTransactionsState';
import CategoriesState from './context/categories/CategoriesState';
import CurrenciesState from './context/currencies/CurrenciesState';
import SettingsModal from './modals/SettingsModal';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
    <CategoriesState>
      <CurrenciesState>
        <IncomeTransactionsState>
          <ExpensesTransactionsState>
            <ThemeProvider theme={theme}>
              <Router>
                <Header
                  themeMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  handleOpenSettingsModal={handleOpenSettingsModal}
                />
                <Switch>
                  <Route exact path='/income'>
                    <AccountingIncome />
                  </Route>
                  <Route exact path='/'>
                    <Dashboard />
                  </Route>
                  <Route exact path='/expenses'>
                    <AccountingExpenses />
                  </Route>
                </Switch>
              </Router>
              <SettingsModal
                openSettingsModal={openSettingsModal}
                handleCloseSettingsModal={handleCloseSettingsModal}
              />
            </ThemeProvider>
          </ExpensesTransactionsState>
        </IncomeTransactionsState>
      </CurrenciesState>
    </CategoriesState>
  );
};

export default App;

// master currency
// exchange rate change automatically or by user and if yes what happens to exisiting chfAmount and what happens if that's changed
// master year?
// max and min display size
// Alert() in other element from Material UI
// 100,000 trennzeichen
// proptypes
// export to pdf

//ISSUES
// material ui table date format when edit

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
