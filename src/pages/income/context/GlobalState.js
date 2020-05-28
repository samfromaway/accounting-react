import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {
      amount: '100000',
      category: 'hteProducts',
      currency: 'cop',
      date: '2020-01-15',
      description: 'Sam payment',
      document: 'Invoice 1122',
    },
    {
      amount: '222',
      category: 'hteProducts',
      currency: 'usd',
      date: '2020-01-15',
      description: 'Sam payment',
      document: 'Invoice 11',
    },
    {
      amount: '222',
      category: 'hteProducts',
      currency: 'usd',
      date: '2020-01-15',
      description: 'Sam payment',
      document: 'Invoice 1122',
    },
  ],
};

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        editTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
