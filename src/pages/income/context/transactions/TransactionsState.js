import React, { useReducer } from 'react';
import TransactionsContext from './transactionsContext';
import TransactionsReducer from './transactionsReducer';

// Provider Component
const TransactionsState = ({ children }) => {
  const initialState = {
    transactions: [
      {
        _id: 1111,
        amount: '111',
        category: 'hteProducts',
        currency: 'cop',
        chfAmount: '111',
        date: '2001-01-15',
        description: '111desc',
        document: 'Invoice 1122',
      },
      {
        _id: 2222,
        amount: '222',
        category: 'hteProducts',
        currency: 'usd',
        date: '2002-01-15',
        chfAmount: '222',
        description: '222desc',
        document: 'Invoice 11',
      },
      {
        _id: 3333,
        amount: '333',
        category: 'hteProducts',
        currency: 'usd',
        date: '2003-01-15',
        chfAmount: '333',
        description: '333desc',
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
