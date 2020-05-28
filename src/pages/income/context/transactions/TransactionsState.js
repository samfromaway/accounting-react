import React, { useReducer, useEffect } from 'react';
import TransactionsContext from './transactionsContext';
import TransactionsReducer from './transactionsReducer';
import { USD_TO_CHF, COP_TO_CHF } from '../../../../constants';

// Provider Component
const TransactionsState = ({ children }) => {
  const initialState = {
    transactions: [
      {
        _id: 1111,
        amount: 111,
        category: 'hteProducts',
        currency: 'cop',
        chfAmount: 111,
        date: '2001-01-15',
        description: '111desc',
        document: 'Invoice 1122',
      },
      {
        _id: 2222,
        amount: 222,
        category: 'hteProducts',
        currency: 'usd',
        chfAmount: 222,
        date: '2002-01-15',
        description: '222desc',
        document: 'Invoice 11',
      },
      {
        _id: 3333,
        amount: 333,
        category: 'hteProducts',
        currency: 'usd',
        chfAmount: 333,
        date: '2003-01-15',
        description: '333desc',
        document: 'Invoice 1122',
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
    console.log(state.transactions);
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