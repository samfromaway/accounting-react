import React, { useReducer } from 'react';
import TransactionsContext from './transactionsContext';
import TransactionsReducer from './transactionsReducer';

// Provider Component
const TransactionsState = ({ children }) => {
  const initialState = {
    transactions: [
      {
        amount: '100000',
        category: 'hteProducts',
        currency: 'cop',
        chfAmount: '23445',
        date: '2020-01-15',
        description: 'Sam payment',
        document: 'Invoice 1122',
      },
      {
        amount: '222',
        category: 'hteProducts',
        currency: 'usd',
        date: '2020-01-15',
        chfAmount: '23445',
        description: 'Sam payment',
        document: 'Invoice 11',
      },
      {
        amount: '222',
        category: 'hteProducts',
        currency: 'usd',
        date: '2020-01-15',
        chfAmount: '23445',
        description: 'Sam payment',
        document: 'Invoice 1122',
      },
    ],
  };

  const [state, dispatch] = useReducer(TransactionsReducer, initialState);

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

  function editTransaction(id) {
    dispatch({
      type: 'EDIT_TRANSACTION',
      payload: id,
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
