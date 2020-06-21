export default (state, action) => {
  switch (action.type) {
    case 'GET_SECONDARY_CURRENCIES':
      return {
        ...state,
        chosenSecondaryCurrencies: action.payload,
      };
    case 'DELETE_SECONDARY_CURRENCIES':
      return {
        ...state,
        chosenSecondaryCurrencies: state.chosenSecondaryCurrencies.filter(
          (currency) => currency.value !== action.payload
        ),
      };
    case 'ADD_SECONDARY_CURRENCIES':
      return {
        ...state,
        chosenSecondaryCurrencies: [
          action.payload,
          ...state.chosenSecondaryCurrencies,
        ],
      };
    case 'SECONDARY_CURRENCIES_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
