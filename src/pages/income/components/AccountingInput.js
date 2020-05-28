import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '10px 0',
  },
  inputElement: {
    margin: theme.spacing(1),
    width: '220px',
  },
  fabBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '-38px',
  },
  fabCancel: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
}));

const currencies = [
  {
    value: 'USD',
    label: 'USD',
  },
  {
    value: 'CHF',
    label: 'CHF',
  },
  {
    value: 'COP',
    label: 'COP',
  },
];

const AccountingInput = () => {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [chfAmount, setChfAmounts] = useState('');
  const [document, setDocument] = useState('');
  const [category, setCategory] = useState('');

  const { addTransaction } = useContext(GlobalContext);
  const classes = useStyles();
  // Base ---------------------------------------------------

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const fxUsdToChf = 0.96;
  const fxCopToChf = 0.00025;

  const onInputSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      _id: Math.floor(Math.random() * 100000000),
      date,
      description,
      currency,
      amount: +amount,
      chf: +chfAmount,
      document,
      category,
    };

    addTransaction(newTransaction);
    resetData();
  };

  const amountChange = (e) => {
    setAmount(e);
    setChfAmounts(fxCalcChf(e, currency).toFixed(2));
  };

  const currencyChange = (e) => {
    setCurrency(e);
    setChfAmounts(fxCalcChf(amount, e).toFixed(2));
  };

  const fxCalcChf = (amount, currency) => {
    if (currency === 'USD') {
      return fxUsdToChf * amount;
    } else if (currency === 'COP') {
      return fxCopToChf * amount;
    } else if (currency === 'CHF') {
      return 1 * amount;
    } else {
      return 'Add Fields';
    }
  };

  function resetData() {
    setDate(new Date());
    setDescription('');
    setCurrency('');
    setAmount('');
    setChfAmounts('');
    setDocument('');
    setCategory('');
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Paper>
        <form
          noValidate
          autoComplete='off'
          style={{ padding: '10px', position: 'relative' }}
        >
          <Box className={classes.box}>
            <KeyboardDatePicker
              id='date'
              className={classes.inputElement}
              label='Date'
              format='MM/dd/yyyy'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Box>
          <Box className={classes.box}>
            <TextField
              id='description'
              className={classes.inputElement}
              label='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant='outlined'
            />

            <TextField
              id='currency'
              className={classes.inputElement}
              select
              label='Currency'
              value={currency}
              onChange={currencyChange}
              variant='outlined'
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id='amount'
              className={classes.inputElement}
              label='Amount'
              variant='outlined'
              onChange={amountChange}
            />

            <TextField
              id='document'
              className={classes.inputElement}
              label='Document'
              value={document}
              onChange={(e) => setDocument(e.target.value)}
              variant='outlined'
            />

            <TextField
              id='category'
              className={classes.inputElement}
              select
              label='Category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant='outlined'
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box className={classes.fabBox}>
            <Fab color='primary' aria-label='add'>
              <AddIcon />
            </Fab>
          </Box>
          <Fab
            color='secondary'
            aria-label='cancel'
            className={classes.fabCancel}
            size='small'
            onClick={resetData}
          >
            <CancelIcon />
          </Fab>
        </form>
      </Paper>
    </MuiPickersUtilsProvider>
  );
};

export default AccountingInput;
