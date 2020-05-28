import React, { useState, useContext } from 'react';
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
import TransactionsContext from '../context/transactions/transactionsContext';

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

  const { addTransaction, transactions } = useContext(TransactionsContext);
  const classes = useStyles();
  console.log(transactions);

  const USD_TO_CHF = 0.96;
  const COP_TO_CHF = 0.00025;

  const onInputSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      // id will be generated from mongoDB
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

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setChfAmounts(fxCalcChf(e.target.value, currency));
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    setChfAmounts(fxCalcChf(amount, e.target.value));
  };

  const fxCalcChf = (amount, currency) => {
    if (currency === 'USD') {
      return USD_TO_CHF * amount;
    } else if (currency === 'COP') {
      return COP_TO_CHF * amount;
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
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <h3>CHF{chfAmount}</h3>
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
