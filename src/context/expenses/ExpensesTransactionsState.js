import React, { useReducer } from 'react';
import ExpensesTransactionsContext from './expensesTransactionsContext';
import ExpensesTransactionsReducer from './expensesTransactionsReducer';
import firebase from '../../firebase';

// Provider Component
const ExpensesTransactionsState = ({ children }) => {
  const initialState = {
    transactions: [],
    error: null,
  };

  const [state, dispatch] = useReducer(
    ExpensesTransactionsReducer,
    initialState
  );

  const ref = firebase.firestore().collection('expensesTransactions');

  function getTransactions() {
    ref
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        dispatch({
          type: 'GET_TRANSACTIONS',
          payload: items,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  function deleteTransaction(id) {
    ref
      .doc(id)
      .delete()
      .then(() => {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  function addTransaction(transaction) {
    ref
      .doc(transaction.id)
      .set(transaction)
      .then(() => {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  function editTransaction(updatedTransaction, id) {
    ref
      .doc(id)
      .update(updatedTransaction)
      .then(() => {
        dispatch({
          type: 'EDIT_TRANSACTION',
          payload: { updatedTransaction: updatedTransaction, id: id },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.response.data.error,
        });
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
