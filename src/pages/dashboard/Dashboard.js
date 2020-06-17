import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputIcon from '@material-ui/icons/Input';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Modal from '../../modals/SettingsModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: theme.spacing(2),
    height: 200,
    width: 200,
    cursor: 'pointer',

    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.06)',
    },
  },
  icon: {
    fontSize: '50px',
    marginBottom: '4px',
  },
  text: {
    fontSize: '23px',
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Fragment>
      <Box m={14} />
      <Typography variant='h4' align='center' style={{ paddingBottom: '20px' }}>
        Choose:
      </Typography>
      <div className={classes.root}>
        <Link to={'/expenses'}>
          <Paper className={classes.paper}>
            <InputIcon className={classes.icon} />
            <Typography className={classes.text}>Income</Typography>
          </Paper>
        </Link>

        <Link to={'/income'}>
          <Paper className={classes.paper}>
            <CallMissedOutgoingIcon className={classes.icon} />
            <Typography className={classes.text}>Expenses</Typography>
          </Paper>
        </Link>

        <Link to={'/capital'}>
          <Paper className={classes.paper}>
            <EqualizerIcon className={classes.icon} />
            <Typography className={classes.text}>Capital</Typography>
          </Paper>
        </Link>
      </div>
    </Fragment>
  );
}
