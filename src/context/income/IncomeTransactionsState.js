import React, { useReducer } from 'react';
import IncomeTransactionsContext from './incomeTransactionsContext';
import IncomeTransactionsReducer from './incomeTransactionsReducer';
import firebase from '../../firebase';

// Provider Component
const IncomeTransactionsState = ({ children }) => {
  const initialState = {
    transactions: [],
  };

  const [state, dispatch] = useReducer(IncomeTransactionsReducer, initialState);

  const ref = firebase.firestore().collection('incomeTransactions');

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
      .catch((err) => console.log(err));
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
        console.error(err);
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
      });
  }

  return (
    <IncomeTransactionsContext.Provider
      value={{
        incomeTransactions: state.transactions,
        getTransactions,
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
