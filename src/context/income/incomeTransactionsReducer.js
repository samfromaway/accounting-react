export default (state, action) => {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'EDIT_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.map((transaction) => {
          if (transaction.id !== action.payload.id) {
            return transaction;
          }
          return {
            ...action.payload.updatedTransaction,
          };
        }),
      };
    default:
      return state;
  }
};
