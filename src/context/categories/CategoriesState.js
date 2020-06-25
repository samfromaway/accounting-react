import React, { useReducer, useEffect } from 'react';
import CategoriesContext from './categoriesContext';
import CategoriesReducer from './categoriesReducer';

// Provider Component
const CategoriesState = ({ children }) => {
  const initialState = {
    incomeCategories: [
      { label: 'Online', value: 'online' },
      { label: 'Products', value: 'products' },
      { label: 'Services', value: 'services' },
    ],
    expensesCategories: [
      { label: 'Online', value: 'online' },
      { label: 'Google Ads', value: 'googleads' },
      { label: 'Rent', value: 'rent' },
    ],
    error: null,
  };

  const [state, dispatch] = useReducer(CategoriesReducer, initialState);

  //INCOME--------------

  useEffect(() => {
    getIncomeCategories();
    getExpensesCategories();
    // eslint-disable-next-line
  }, []);

  function getIncomeCategories() {
    return state.incomeCategories;
  }

  function deleteIncomeCategory(category) {
    dispatch({
      type: 'DELETE_INCOME_CATEGORY',
      payload: category,
    });
  }

  function addIncomeCategory(category) {
    dispatch({
      type: 'ADD_INCOME_CATEGORY',
      payload: category,
    });
  }

  // EXPENSES------------------

  function getExpensesCategories() {
    return state.expensesCategories;
  }

  function deleteExpensesCategory(category) {
    dispatch({
      type: 'DELETE_EXPENSES_CATEGORY',
      payload: category,
    });
  }

  function addExpensesCategory(category) {
    dispatch({
      type: 'ADD_EXPENSES_CATEGORY',
      payload: category,
    });
  }

  return (
    <CategoriesContext.Provider
      value={{
        incomeCategories: state.incomeCategories,
        expensesCategories: state.expensesCategories,
        getIncomeCategories,
        deleteIncomeCategory,
        addIncomeCategory,
        getExpensesCategories,
        deleteExpensesCategory,
        addExpensesCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesState;
