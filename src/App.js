import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AccountingIncome from './pages/income/AccountingIncome';
import Home from './pages/home/Home';
import AccountingExpenses from './pages/expenses/AccountingExpenses';
import IncomeTransactionsState from './context/income/IncomeTransactionsState';
import ExpensesTransactionsState from './context/expenses/ExpensesTransactionsState';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//import Theme from './styles/theme';
import './app.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      primary: { main: '#2c63bf', light: '#a6c7ff', dark: '#002159' },
      //secondary: { light: '#0066ff', main: '#0044ff' },
    },
  });

  return (
    <IncomeTransactionsState>
      <ExpensesTransactionsState>
        <ThemeProvider theme={theme}>
          <Router>
            <Header themeMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Switch>
              <Route exact path='/income'>
                <AccountingIncome />
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/expenses'>
                <AccountingExpenses />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </ExpensesTransactionsState>
    </IncomeTransactionsState>
  );
};

export default App;

//Charts
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
