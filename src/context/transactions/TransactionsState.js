import React, { useReducer, useEffect } from 'react';
import TransactionsContext from './transactionsContext';
import TransactionsReducer from './transactionsReducer';
import { USD_TO_CHF, COP_TO_CHF } from '../../constants';

// Provider Component
const TransactionsState = ({ children }) => {
  const initialState = {
    transactions: [
      {
        _id: 11073046,
        date: '2020-01-01T11:22:55.763Z',
        description: 'dfefe',
        currency: 'usd',
        amount: 100,
        chfAmount: 96,
        document: 'dsdfa',
        category: 'hteServices',
      },
      {
        _id: 11044066,
        date: '2020-04-29T11:22:55.763Z',
        description: 'dfefe',
        currency: 'usd',
        amount: 100,
        chfAmount: 96,
        document: 'dsdfa',
        category: 'comissions',
      },
      {
        _id: 13073066,
        date: '2020-04-29T11:22:55.763Z',
        description: 'dfefe',
        currency: 'usd',
        amount: 200,
        chfAmount: 192,
        document: 'dsdfa',
        category: 'hteServices',
      },
      {
        _id: 11073566,
        date: '2020-03-29T11:22:55.763Z',
        description: 'dfefe',
        currency: 'usd',
        amount: 200,
        chfAmount: 192,
        document: 'dsdfa',
        category: 'hteProducts',
      },
    ],
  };

  const [state, dispatch] = useReducer(TransactionsReducer, initialState);

  const addChfValue = () => {
    state.transactions.map(
      (transaction) =>
        (transaction.chfAmount = fxCalcChf(
          transaction.amount,
          transaction.currency
        ))
    );
  };

  const fxCalcChf = (amount, currency) => {
    switch (currency) {
      case 'usd':
        return USD_TO_CHF * amount;
      case 'cop':
        return COP_TO_CHF * amount;
      case 'chf':
        return amount;
      default:
        return 'Error';
      //error can be deleted in prod
    }
  };

  useEffect(() => {
    addChfValue();
  });

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  function editTransaction(updatedTransaction, id) {
    dispatch({
      type: 'EDIT_TRANSACTION',
      payload: { updatedTransaction: updatedTransaction, id: id },
    });
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        editTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsState;
