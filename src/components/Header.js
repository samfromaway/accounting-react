import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InputIcon from '@material-ui/icons/Input';
import SettingsIcon from '@material-ui/icons/Settings';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { useReactPath } from '../hooks/useReactPath';
import { CURRENT_YEAR } from '../constants';

//https://stackoverflow.com/questions/58442168/why-useeffect-doesnt-run-on-window-location-pathname-changes

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  listItem: {
    paddingLeft: '23px',
  },
}));

export default function Header({
  themeMode,
  toggleDarkMode,
  handleOpenSettingsModal,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(activePageName());

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function activePageName() {
    const url = window.location.pathname;

    if (url.indexOf('expenses') > -1) {
      return 'Expenses';
    } else if (url.indexOf('income') > -1) {
      return 'Income';
    } else if (url.indexOf('capital') > -1) {
      return 'Capital';
    } else if (url.indexOf('settings') > -1) {
      return 'Settings';
    } else return 'Dashboard';
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap className={classes.title}>
            Accounting {CURRENT_YEAR}
          </Typography>
          <Typography variant='h6' noWrap className={classes.title}>
            {activePage}
          </Typography>
          <FormControlLabel
            value='start'
            control={<Switch color='default' />}
            label='Light/Dark'
            labelPlacement='end'
            checked={themeMode}
            onChange={toggleDarkMode}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            component={Link}
            to='/'
            className={classes.listItem}
            selected={activePage === 'Dashboard' ? true : false}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ListItem
            button
            //onClick={setTitleFromURL}
            component={Link}
            to='/income'
            className={classes.listItem}
            selected={activePage === 'Income' ? true : false}
          >
            <ListItemIcon>
              <InputIcon />
            </ListItemIcon>
            <ListItemText primary='Income' />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/expenses'
            className={classes.listItem}
            selected={activePage === 'Expenses' ? true : false}
          >
            <ListItemIcon>
              <CallMissedOutgoingIcon />
            </ListItemIcon>
            <ListItemText primary='Expenses' />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/capital'
            className={classes.listItem}
            selected={activePage === 'Capital' ? true : false}
          >
            <ListItemIcon>
              <EqualizerIcon />
            </ListItemIcon>
            <ListItemText primary='Capital' />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={handleOpenSettingsModal}
            className={classes.listItem}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
