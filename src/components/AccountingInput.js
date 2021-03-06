import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import { currencyEx } from '../functions/currencyEx';
import { transactionsInputValidation } from '../functions/transactionsInputValidation';
import CurrenciesContext from '../context/currencies/currenciesContext';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0 0 40px 0',
  },
  boxDate: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '10px 0 20px 0',
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
  cancelBox: {
    display: 'flex',
    position: 'absolute',
    top: '13px',
    right: '10px',
  },
  chfValue: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  },
  exRate: {
    position: 'absolute',
    bottom: '34px',
    right: '10px',
  },
  title: {
    position: 'absolute',
    top: '10px',
    left: '24px',
  },
}));

const AccountingInput = ({ categories, addTransaction }) => {
  const { secondaryCurrencies } = useContext(CurrenciesContext);

  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [exRate, setExRate] = useState('');
  const [chfAmount, setChfAmounts] = useState('');
  const [document, setDocument] = useState('');
  const [category, setCategory] = useState('');

  const classes = useStyles();

  const onInputSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      date: date.toISOString(),
      description,
      currency,
      amount: +amount,
      exRate: +exRate,
      chfAmount: +chfAmount,
      document,
      category,
    };
    if (transactionsInputValidation(newTransaction)) {
      addTransaction(newTransaction);
      resetData();
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setChfAmounts(e.target.value * exRate);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    setExRate(currencyEx(e.target.value));
    setChfAmounts(amount * currencyEx(e.target.value));
  };

  const formatedChfAmount = () => {
    if (chfAmount) {
      return 'CHF ' + chfAmount.toFixed(2);
    }
  };

  const formatedExRate = () => {
    if (exRate) {
      return exRate + ' Ex';
    }
  };

  const resetData = () => {
    setDate(new Date());
    setDescription('');
    setCurrency('');
    setAmount('');
    setExRate('');
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
          <Typography variant='h6' className={classes.title}>
            Add New
          </Typography>
          <Box className={classes.boxDate}>
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
              {secondaryCurrencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id='amount'
              required={true}
              type='number'
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
          <Typography variant='body2' className={classes.exRate}>
            {formatedExRate()}
          </Typography>
          <Typography className={classes.chfValue}>
            {formatedChfAmount()}
          </Typography>
          <Box className={classes.fabBox}>
            <Fab color='primary' aria-label='add' onClick={onInputSubmit}>
              <AddIcon />
            </Fab>
          </Box>
          <Button
            variant='contained'
            color='secondary'
            className={classes.cancelBox}
            size='small'
            onClick={resetData}
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
        </form>
      </Paper>
    </MuiPickersUtilsProvider>
  );
};

export default AccountingInput;
