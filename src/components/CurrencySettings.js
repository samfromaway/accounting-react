import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChipsSettings01 from './ChipsSettings01';
import { DEFAULT_CURRENCIES } from '../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  inputElement: {
    width: '210px',
    height: '100%',
  },
  button: {
    marginLeft: '1rem',
  },
  text: {
    marginBottom: '0.3rem',
  },
}));

const CurrencySettings = ({
  title,
  id,
  transactions,
  currencies,
  deleteCurrency,
  addCurrency,
}) => {
  const [newCurrency, setNewCurrency] = useState('');
  const classes = useStyles();

  const handleAddCurrency = () => {
    if (newCurrency) {
      if (currencies.some((category) => category.value === newCurrency)) {
        alert('this currency already exists');
      } else {
        const categoryValue = newCurrency;

        const categoryLabel = newCurrency.toLocaleUpperCase();
        addCurrency({ value: categoryValue, label: categoryLabel });
      }
    } else {
      alert('please add a currency');
    }
    resetInput();
  };

  const resetInput = () => {
    setNewCurrency('');
  };
  return (
    <Box className={classes.root}>
      <Typography variant='h6' style={{ marginBottom: '9px' }}>
        {title}
      </Typography>
      <Box className={classes.input}>
        <TextField
          id={id}
          required={true}
          className={classes.inputElement}
          select
          size='small'
          label={title}
          value={newCurrency}
          onChange={(e) => setNewCurrency(e.target.value)}
          variant='outlined'
        >
          {DEFAULT_CURRENCIES.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant='contained'
          color='primary'
          size='small'
          onClick={handleAddCurrency}
          className={classes.button}
        >
          Add
        </Button>
      </Box>
      <Typography className={classes.text}>
        If the currency is in use it can't be deleted.
      </Typography>
      <ChipsSettings01
        data={currencies}
        checkIfInUseElements={transactions.map(
          (transaction) => transaction.currency
        )}
        deleteFunction={deleteCurrency}
      />
    </Box>
  );
};

export default CurrencySettings;
