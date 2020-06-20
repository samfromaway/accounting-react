import { USD_TO_CHF, COP_TO_CHF, EUR_TO_CHF } from '../constants';

export const currencyEx = (amount, currency) => {
  if (currency) {
    switch (currency) {
      case 'usd':
        return USD_TO_CHF * amount;
      case 'cop':
        return COP_TO_CHF * amount;
      case 'eur':
        return EUR_TO_CHF * amount;
      case 'chf':
        return amount;
      default:
        return amount;
      //error can be deleted in prod}
    }
  }
};
