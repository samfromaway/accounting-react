import React, { useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
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
import TransactionsContext from '../context/transactions/transactionsContext';
import { USD_TO_CHF, COP_TO_CHF } from '../../../constants';

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
  chfValue: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  },
}));

const currencies = [
  {
    value: 'usd',
    label: 'USD',
  },
  {
    value: 'chf',
    label: 'CHF',
  },
  {
    value: 'cop',
    label: 'COP',
  },
];

const categories = [
  {
    value: 'hteServices',
    label: 'HTE Services',
  },
  {
    value: 'hteProducts',
    label: 'HTE Products',
  },
  {
    value: 'comissions',
    label: 'Comissions',
  },
  {
    value: 'devWorld',
    label: 'Dev World',
  },
  {
    value: 'youtube',
    label: 'Youtube',
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

  const { addTransaction } = useContext(TransactionsContext);
  const classes = useStyles();

  const onInputSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      // id will be generated from mongoDB
      _id: Math.floor(Math.random() * 100000000),
      date: date.toISOString(),
      description,
      currency,
      amount: +amount,
      chfAmount: +chfAmount,
      document,
      category,
    };

    addTransaction(newTransaction);
    resetData();
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setChfAmounts(fxCalcChf(e.target.value, currency));
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    setChfAmounts(fxCalcChf(amount, e.target.value));
  };

  const fxCalcChf = (amount, currency) => {
    if (amount && currency) {
      switch (currency) {
        case 'usd':
          return USD_TO_CHF * amount;
        case 'cop':
          return COP_TO_CHF * amount;
        case 'chf':
          return amount;
        default:
          return 'Currency/Amount missing';
      }
    }
  };

  const resetData = () => {
    setDate(new Date());
    setDescription('');
    setCurrency('');
    setAmount('');
    setChfAmounts('');
    setDocument('');
    setCategory('');
  };

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
              onChange={(e) => setDate(e)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Box>
          <Box className={classes.box}>
            <TextField
              id='description'
              required={true}
              className={classes.inputElement}
              label='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant='outlined'
            />

            <TextField
              id='currency'
              required={true}
              className={classes.inputElement}
              select
              label='Currency'
              value={currency}
              onChange={handleCurrencyChange}
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
              required={true}
              type={'number'}
              className={classes.inputElement}
              value={amount}
              label='Amount'
              variant='outlined'
              onChange={handleAmountChange}
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
              required={true}
              className={classes.inputElement}
              select
              label='Category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant='outlined'
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Typography className={classes.chfValue}>CHF {chfAmount}</Typography>
          <Box className={classes.fabBox}>
            <Fab color='primary' aria-label='add' onClick={onInputSubmit}>
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
