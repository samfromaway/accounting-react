import React, { useContext } from 'react';
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
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
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
          <Typography variant='h6' className={classes.title}>
            Dev World
          </Typography>

          <Tabs>
            <Tab label='Income' />
            <Tab label='Income' />
            <Tab label='Income' />
          </Tabs>
          <FormControlLabel
            value='start'
            control={<Switch color='primary' />}
            label='Dark/Light Mode'
            labelPlacement='end'
          />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
