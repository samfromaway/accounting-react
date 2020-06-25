import React, { useReducer } from 'react';
import ExpensesTransactionsContext from './expensesTransactionsContext';
import ExpensesTransactionsReducer from './expensesTransactionsReducer';

// Provider Component
const ExpensesTransactionsState = ({ children }) => {
  const initialState = {
    transactions: [
      {
        amount: 22,
        category: 'online',
        chfAmount: 22,
        currency: 'chf',
        date: '2020-03-25T19:06:30.289Z',
        description: 'John Website',
        document: '202000432',
        exRate: '1',
        id: '000001',
      },
      {
        amount: 22,
        category: 'googleads',
        chfAmount: 220,
        currency: 'chf',
        date: '2020-05-25T19:06:30.289Z',
        description: 'Jim Website',
        document: '202000433',
        exRate: '1',
        id: '000002',
      },
      {
        amount: 22,
        category: 'googleads',
        chfAmount: 202,
        currency: 'chf',
        date: '2020-06-25T19:06:30.289Z',
        description: 'Jen Website',
        document: '202000434',
        exRate: '1',
        id: '000003',
      },
      {
        amount: 22,
        category: 'rent',
        chfAmount: 12,
        currency: 'chf',
        date: '2020-05-25T19:06:30.289Z',
        description: 'Mag Website',
        document: '202000435',
        exRate: '1',
        id: '000004',
      },
      {
        amount: 22,
        category: 'rent',
        chfAmount: 140,
        currency: 'rent',
        date: '2020-06-25T19:06:30.289Z',
        currency: 'chf',
        category: 'online',
        description: 'Sara Website',
        document: '202000452',
        exRate: '1',
        id: '000005',
      },
      {
        amount: 22,
        category: 'rent',
        chfAmount: 45,
        currency: 'chf',
        date: '2020-04-25T19:06:30.289Z',
        description: 'Sam Website',
        document: '202000437',
        exRate: '1',
        id: '000006',
      },
    ],
    error: null,
  };

  const [state, dispatch] = useReducer(
    ExpensesTransactionsReducer,
    initialState
  );

  function getTransactions() {
    return state.transactions;
  }

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
        getTransactions,
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

//https://softauthor.com/firestore-querying-filtering-data-for-web/
//https://github.com/bradtraversy/expense-tracker-mern/blob/master/client/src/context/GlobalState.js
//https://console.firebase.google.com/u/2/
