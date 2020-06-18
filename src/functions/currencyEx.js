import { USD_TO_CHF, COP_TO_CHF } from '../constants';

export const currencyEx = (amount, currency) => {
  switch (currency) {
    case 'usd':
      return USD_TO_CHF * amount;
    case 'cop':
      return COP_TO_CHF * amount;
    case 'chf':
      return amount;
    default:
      return 'Error';
    //error can be deleted in prod
  }
};
