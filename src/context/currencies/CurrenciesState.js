import React, { useReducer } from 'react';
import CurrenciesContext from './currenciesContext';
import CurrenciesReducer from './currenciesReducer';

// Provider Component
const ExpensesTransactionsState = ({ children }) => {
  const initialState = {
    chosenSecondaryCurrencies: [
      {
        value: 'cop',
        label: 'COP',
      },
      {
        value: 'usd',
        label: 'USD',
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
