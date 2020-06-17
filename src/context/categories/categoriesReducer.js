export default (state, action) => {
  switch (action.type) {
    case 'DELETE_INCOME_CATEGORY':
      return {
        ...state,
        incomeCategories: state.incomeCategories.filter(
          (incomeCategory) => incomeCategory.value !== action.payload
        ),
      };
    case 'ADD_INCOME_CATEGORY':
      return {
        ...state,
        incomeCategories: [action.payload, ...state.incomeCategories],
      };
    case 'DELETE_EXPENSES_CATEGORY':
      return {
        ...state,
        expensesCategories: state.expensesCategories.filter(
          (categories) => categories.value !== action.payload
        ),
      };
    case 'ADD_EXPENSES_CATEGORY':
      return {
        ...state,
        expensesCategories: [action.payload, ...state.expensesCategories],
      };
    default:
      return state;
  }
};
