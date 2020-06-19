import React, { useReducer } from 'react';
import ExpensesTransactionsContext from './expensesTransactionsContext';
import ExpensesTransactionsReducer from './expensesTransactionsReducer';

// Provider Component
const ExpensesTransactionsState = ({ children }) => {
  const initialState = {
    transactions: [
      {
        _id: 1107304446,
        date: '2020-01-01T11:22:55.763Z',
        description: 'exp',
        currency: 'usd',
        amount: 100,
        chfAmount: 96,
        document: 'dsdfa',
        category: 'rent',
      },
      {
        _id: 1104443066,
        date: '2020-04-29T11:22:55.763Z',
        description: 'exp',
        currency: 'usd',
        amount: 100,
        chfAmount: 96,
        document: 'dsdfa',
        category: 'rent',
      },
      {
        _id: 130733066,
        date: '2020-04-29T11:22:55.763Z',
        description: 'exp',
        currency: 'usd',
        amount: 2002,
        chfAmount: 192,
        document: 'dsdfa',
        category: 'online',
      },
      {
        _id: 1107366566,
        date: '2020-03-29T11:22:55.763Z',
        description: 'dfefe',
        currency: 'cop',
        amount: 2000003,
        chfAmount: 192,
        document: 'dsdfa',
        category: 'online',
      },
    ],
  };

  const [state, dispatch] = useReducer(
    ExpensesTransactionsReducer,
    initialState
  );

  // const addChfValue = () => {
  //   state.transactions.forEach((transaction) => {
  //     transaction.chfAmount = currencyEx(
  //       transaction.amount,
  //       transaction.currency
  //     );
  //   });
  // };

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
    <ExpensesTransactionsContext.Provider
      value={{
        expensesTransactions: state.transactions,
        deleteTransaction,
        addTransaction,
        editTransaction,
      }}
    >
      {children}
    </ExpensesTransactionsContext.Provider>
  );
};

export default ExpensesTransactionsState;
