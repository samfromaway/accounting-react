export default (state, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};
