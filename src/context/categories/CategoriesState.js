import React, { useReducer } from 'react';
import CategoriesContext from './categoriesContext';
import CategoriesReducer from './categoriesReducer';
import firebase from '../../firebase';

// Provider Component
const CategoriesState = ({ children }) => {
  const initialState = {
    incomeCategories: [],
    expensesCategories: [],
    error: null,
  };

  const [state, dispatch] = useReducer(CategoriesReducer, initialState);

  const refIncome = firebase.firestore().collection('incomeCategories');

  //INCOME--------------

  function getIncomeCategories() {
    refIncome
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        dispatch({
          type: 'GET_INCOME_CATEGORIES',
          payload: items,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'INCOME_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  function deleteIncomeCategory(category) {
    refIncome
      .doc(category)
      .delete()
      .then(() => {
        dispatch({
          type: 'DELETE_INCOME_CATEGORY',
          payload: category,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'CATEGORY_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  function addIncomeCategory(category) {
    refIncome
      .doc(category.value)
      .set(category)
      .then(() => {
        dispatch({
          type: 'ADD_INCOME_CATEGORY',
          payload: category,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'CATEGORY_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  // EXPENSES------------------
  const refExpenses = firebase.firestore().collection('expenseCategories');

  function getExpensesCategories() {
    refExpenses
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        dispatch({
          type: 'GET_EXPENSES_CATEGORIES',
          payload: items,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'INCOME_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  function deleteExpensesCategory(category) {
    refExpenses
      .doc(category)
      .delete()
      .then(() => {
        dispatch({
          type: 'DELETE_EXPENSES_CATEGORY',
          payload: category,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'CATEGORY_ERROR',
          payload: err.response.data.error,
        });
      });
  }

  function addExpensesCategory(category) {
    refExpenses
      .doc(category.value)
      .set(category)
      .then(() => {
        dispatch({
          type: 'ADD_EXPENSES_CATEGORY',
          payload: category,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'CATEGORY_ERROR',
          payload: err.response.data.error,
        });
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
