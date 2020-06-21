import React, { useReducer } from 'react';
import IncomeTransactionsContext from './incomeTransactionsContext';
import IncomeTransactionsReducer from './incomeTransactionsReducer';

// Provider Component
const IncomeTransactionsState = ({ children }) => {
  const initialState = {
    transactions: [
      {
        id: 11073046,
        date: '2020-01-01T11:22:55.763Z',
        description: 'dfefe',
        currency: 'usd',
        amount: 100,
        chfAmount: 96,
        document: 'dsdfa',
        category: 'hteservices',
      },
      {
        id: 11044066,
        date: '2020-04-29T11:22:55.763Z',
        description: 'dfefe',
        currency: 'usd',
        amount: 100,
        chfAmount: 96,
        document: 'dsdfa',
        category: 'comissions',
      },
      {
        id: 13073066,
        date: '2020-04-29T11:22:55.763Z',
        description: 'dfefe',
        currency: 'usd',
        amount: 200,
        chfAmount: 192,
        document: 'dsdfa',
        category: 'hteservices',
      },
      {
        id: 11073566,
        date: '2020-03-29T11:22:55.763Z',
        description: 'dfefe',
        currency: 'usd',
        amount: 200,
        chfAmount: 192,
        document: 'dsdfa',
        category: 'hteproducts',
      },
    ],
  };

  const [state, dispatch] = useReducer(IncomeTransactionsReducer, initialState);

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
    <IncomeTransactionsContext.Provider
      value={{
        incomeTransactions: state.transactions,
        deleteTransaction,
        addTransaction,
        editTransaction,
      }}
    >
      {children}
    </IncomeTransactionsContext.Provider>
  );
};

export default IncomeTransactionsState;
