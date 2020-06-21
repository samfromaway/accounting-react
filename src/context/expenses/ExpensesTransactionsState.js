import React, { useReducer, useEffect } from 'react';
import ExpensesTransactionsContext from './expensesTransactionsContext';
import ExpensesTransactionsReducer from './expensesTransactionsReducer';
import firebase from '../../firebase';

// Provider Component
const ExpensesTransactionsState = ({ children }) => {
  const initialState = {
    transactions: [],
  };

  const [state, dispatch] = useReducer(
    ExpensesTransactionsReducer,
    initialState
  );

  console.log(state.transactions);
  const ref = firebase.firestore().collection('expensesTransactions');
  //functional
  function getTransactions() {
    ref.get().then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(items);
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: items,
      });
    });
  }

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getOne() {
    const expensesTransactions2 = ref.doc('DJDffytqxKOyPOypH3s3');

    expensesTransactions2.get().then((collection) => {
      const id = collection.id;
      const itemData = collection.data();
      const item = { id, ...itemData };
    });
  }

  getOne();

  //Actions
  function deleteTransaction(id) {
    ref.doc(id).delete().then(console.log('delted'));
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    ref.add(transaction);

    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  function editTransaction(updatedTransaction, id) {
    ref.doc(id).set(updatedTransaction);
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

//https://softauthor.com/firestore-querying-filtering-data-for-web/
