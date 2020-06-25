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
    <ThemeProvider theme={theme}>
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
                  <Route exact path='/income' component={AccountingIncome} />
                  <Route
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
    </ThemeProvider>
  );
};

export default App;
