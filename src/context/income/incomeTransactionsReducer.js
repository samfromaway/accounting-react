export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
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
          if (transaction._id !== action.payload.id) {
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
