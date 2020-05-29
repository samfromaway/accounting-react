import React, { useConext } from 'react';
//import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TransactionsContext from '../context/transactions/transactionsContext';

const useStyles = makeStyles((theme) => ({
  tab: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6'>Dev World</Typography>

          <Tabs
            //value={value}
            //onChange={handleChange}
            className={classes.tab}
            indicatorColor='primary'
            textColor='primary'
            centered
          >
            <Tab label='Income' />
            <Tab label='Expenses' />
            <Tab label='Summary' />
          </Tabs>
          <FormControlLabel
            value='start'
            control={<Switch color='primary' />}
            label='Toggle light/dark theme'
            labelPlacement='end'
          />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
