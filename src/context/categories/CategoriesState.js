import React, { useReducer } from 'react';
import CategoriesContext from './categoriesContext';
import CategoriesReducer from './categoriesReducer';

// Provider Component
const CategoriesState = ({ children }) => {
  const initialState = {
    incomeCategories: [
      {
        value: 'hteservices',
        label: 'HTE Services',
      },
      {
        value: 'hteproducts',
        label: 'HTE Products',
      },
      {
        value: 'comissions',
        label: 'Comissions',
      },
      {
        value: 'devworld',
        label: 'Dev World',
      },
      {
        value: 'youtube',
        label: 'Youtube',
      },
      {
        value: 'youtube2',
        label: 'Youtube2',
      },
    ],
    expensesCategories: [
      {
        value: 'online',
        label: 'Online',
      },
      {
        value: 'rent',
        label: 'Rent',
      },
    ],
  };

  const [state, dispatch] = useReducer(CategoriesReducer, initialState);

  //Actions
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
        deleteIncomeCategory,
        addIncomeCategory,
        deleteExpensesCategory,
        addExpensesCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesState;
