import React, { useContext, useState, Fragment } from 'react';
//import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeContext from '../context/theme/themeContext';
import { CURRENT_YEAR } from '../constants';

const useStyles = makeStyles((theme) => ({
  tab: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const classes = useStyles();

  const toggleDarkMode = () => {
    setThemeMode(!themeMode);
  };

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6'>Dev World</Typography>
          <Typography variant='h6'>Accounting {CURRENT_YEAR}</Typography>
          <FormControlLabel
            value='start'
            control={<Switch color='primary' />}
            label='Toggle light/dark theme'
            labelPlacement='end'
            checked={themeMode}
            onChange={toggleDarkMode}
          />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
