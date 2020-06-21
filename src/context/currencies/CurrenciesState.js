import React, { useReducer } from 'react';
import CurrenciesContext from './currenciesContext';
import CurrenciesReducer from './currenciesReducer';
import firebase from '../../firebase';

// Provider Component
const ExpensesTransactionsState = ({ children }) => {
  const initialState = {
    chosenSecondaryCurrencies: [],
    error: null,
  };

  const [state, dispatch] = useReducer(CurrenciesReducer, initialState);

  const ref = firebase.firestore().collection('chosenSecondaryCurrencies');

  function getSecondaryCurrencies() {
    ref
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        dispatch({
          type: 'GET_SECONDARY_CURRENCIES',
          payload: items,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'SECONDARY_CURRENCIES_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  function deleteSecondaryCurrencies(currency) {
    ref
      .doc(currency)
      .delete()
      .then(() => {
        dispatch({
          type: 'DELETE_SECONDARY_CURRENCIES',
          payload: currency,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'SECONDARY_CURRENCIES_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  function addSecondaryCurrencies(currency) {
    ref
      .doc(currency.value)
      .set(currency)
      .then(() => {
        dispatch({
          type: 'ADD_SECONDARY_CURRENCIES',
          payload: currency,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'SECONDARY_CURRENCIES_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  return (
    <CurrenciesContext.Provider
      value={{
        secondaryCurrencies: state.chosenSecondaryCurrencies,
        getSecondaryCurrencies,
        deleteSecondaryCurrencies,
        addSecondaryCurrencies,
      }}
    >
      {children}
    </CurrenciesContext.Provider>
  );
};

export default ExpensesTransactionsState;
