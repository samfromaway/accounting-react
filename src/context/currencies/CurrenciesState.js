import React, { useReducer } from 'react';
import CurrenciesContext from './currenciesContext';
import CurrenciesReducer from './currenciesReducer';
import { useEffect } from 'react';

// Provider Component
const ExpensesTransactionsState = ({ children }) => {
  const initialState = {
    chosenSecondaryCurrencies: [
      { label: 'CHF', value: 'chf' },
      { label: 'EUR', value: 'eur' },
      { label: 'USD', value: 'usd' },
      { label: 'COP', value: 'cop' },
    ],
    error: null,
  };

  const [state, dispatch] = useReducer(CurrenciesReducer, initialState);

  useEffect(() => {
    getSecondaryCurrencies();
    // eslint-disable-next-line
  }, []);

  function getSecondaryCurrencies() {
    return state.chosenSecondaryCurrencies;
  }

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
