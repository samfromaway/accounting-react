import React, { useReducer } from 'react';
import IncomeTransactionsContext from './incomeTransactionsContext';
import IncomeTransactionsReducer from './incomeTransactionsReducer';

// Provider Component
const IncomeTransactionsState = ({ children }) => {
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
        category: 'products',
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
        category: 'services',
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
        category: 'products',
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
        chfAmount: 140,
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
        category: 'services',
        chfAmount: 45,
        currency: 'chf',
        date: '2020-04-25T19:06:30.289Z',
        description: 'Sam Website',
        document: '202000437',
        exRate: '1',
        id: '000006',
      },
    ],
  };

  const [state, dispatch] = useReducer(IncomeTransactionsReducer, initialState);

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
