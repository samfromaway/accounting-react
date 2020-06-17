import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AccountingIncome from './pages/income/AccountingIncome';
import Dashboard from './pages/dashboard/Dashboard';
import AccountingExpenses from './pages/expenses/AccountingExpenses';
import IncomeTransactionsState from './context/income/IncomeTransactionsState';
import ExpensesTransactionsState from './context/expenses/ExpensesTransactionsState';
import SettingsModal from './modals/SettingsModal';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//import Theme from './styles/theme';
import './app.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openSettingsModal, setOpenSettingsModal] = useState(true);

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
  );
};

export default App;

// Modal Setting
//Charts tooltip
// max and min display size
// permanent scrollbar
//css baseline?
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

//Similar App
//https://codesandbox.io/s/dark-theme-switch-tp37c?from-embed=&file=/src/Dashboard/Dashboard.js:5322-5339
//https://github.com/uds5501/dashboard-switch-themes/tree/5a71a39fe3cf443826054da48b645fbc7803e40f
//https://medium.com/heuristics/react-dark-mode-switch-in-material-ui-dashboard-82fcf1cded66
