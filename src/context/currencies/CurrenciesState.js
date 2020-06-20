import React, { useReducer } from 'react';
import CurrenciesContext from './currenciesContext';
import CurrenciesReducer from './currenciesReducer';

// Provider Component
const ExpensesTransactionsState = ({ children }) => {
  const initialState = {
    chosenSecondaryCurrencies: [
      {
        value: 'chf',
        label: 'CHF',
      },
      {
        value: 'usd',
        label: 'USD',
      },
      {
        value: 'cop',
        label: 'COP',
      },
      {
        value: 'eur',
        label: 'EUR',
      },
    ],
  };

  const [state, dispatch] = useReducer(CurrenciesReducer, initialState);

  //Actions
  function deleteSecondaryCurrencies(currency) {
    dispatch({
      type: 'DELETE_SECONDARY_CURRENCIES',
      payload: currency,
    });
  }

  function addSecondaryCurrencies(currency) {
    dispatch({
      type: 'ADD_SECONDARY_CURRENCIES',
      payload: currency,
    });
  }

  return (
    <CurrenciesContext.Provider
      value={{
        secondaryCurrencies: state.chosenSecondaryCurrencies,
        deleteSecondaryCurrencies,
        addSecondaryCurrencies,
      }}
    >
      {children}
    </CurrenciesContext.Provider>
  );
};

export default ExpensesTransactionsState;
