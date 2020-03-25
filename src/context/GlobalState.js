import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {
      _id: '5e762eba84de3860a8b5cd06',
      date: '2020-01-15',
      description: 'refund Jonny',
      currency: 'USD',
      amount: 1,
      chf: 111,
      document: '66',
      category: 'HTM',
      createdAt: '2020 - 03 - 21T15: 11: 54.741+00: 00'
    },
    {
      _id: '5e762eba860a8b5cd06',
      date: '2020-02-15',
      description: 'refund Jonny',
      currency: 'USD',
      amount: 2,
      chf: 222,
      document: '66',
      category: 'HTM',
      createdAt: '2020 - 03 - 21T15: 11: 54.741+00: 00'
    },
    {
      _id: '5e762eba84de386b5cd6',
      date: '2020-01-15',
      description: 'refund Jonny',
      currency: 'USD',
      amount: 3,
      chf: 333,
      document: '66',
      category: 'HTM',
      createdAt: '2020 - 03 - 21T15: 11: 54.741+00: 00'
    }
  ]
};

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function editTransaction(id) {
    dispatch({
      type: 'EDIT_TRANSACTION',
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        editTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
