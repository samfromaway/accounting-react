import React, { useState, useContext } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { INCOME_CATEGORIES, EXPENSES_CATEGORIES } from '../constants';
import TransactionsContext from '../context/income/incomeTransactionsContext';

//https://material-ui.com/components/chips/

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: '600px',
    height: '600px',
    padding: theme.spacing(2, 4, 3),
    '&:focus': {
      outline: 'none',
    },
  },
}));

const ChipsArray = (props) => {
  const classes = useStyles();
  const [chipData, setChipData] = useState(props.data);
  const { transactions } = useContext(TransactionsContext);

  console.log(transactions.map((transaction) => transaction.category));

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.value !== chipToDelete.value)
    );
  };

  return (
    <Paper component='ul' className={classes.root}>
      {chipData.map((data) => {
        return (
          <li key={data.value}>
            <Chip
              label={data.label}
              onDelete={false ? handleDelete(data) : undefined}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
};

const SettingsModal = ({ openSettingsModal, handleCloseSettingsModal }) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={openSettingsModal}
      onClose={handleCloseSettingsModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openSettingsModal}>
        <div className={classes.paper}>
          <Typography variant='h4'>Settings</Typography>

          <form
            noValidate
            autoComplete='off'
            style={{ padding: '10px', position: 'relative' }}
          >
            <Box className={classes.box}>
              <Typography variant='h5'>Income Categories</Typography>

              <TextField
                id='document'
                label='Document'
                value={'iiiiiiiiiiiiiiii'}
                variant='outlined'
              />
              <Button
                variant='contained'
                color='primary'
                className={classes.cancelBox}
                size='small'
                startIcon={<CancelIcon />}
              >
                Add
              </Button>
              <ChipsArray data={INCOME_CATEGORIES} />
            </Box>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default SettingsModal;
