export default (state, action) => {
  switch (action.type) {
    case 'GET_INCOME_CATEGORIES':
      return {
        ...state,
        incomeCategories: action.payload,
      };
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
    case 'GET_EXPENSES_CATEGORIES':
      return {
        ...state,
        expensesCategories: action.payload,
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
    case 'CATEGORY_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
