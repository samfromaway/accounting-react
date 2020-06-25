import { USD_TO_CHF, COP_TO_CHF, EUR_TO_CHF } from '../constants';

export const mainCurrency = 'chf';

export const currencyEx = (currency) => {
  if (currency) {
    switch (currency) {
      case 'usd':
        return USD_TO_CHF;
      case 'cop':
        return COP_TO_CHF;
      case 'eur':
        return EUR_TO_CHF;
      case 'chf':
        return 1;
      default:
        return 1;
      //error can be deleted in prod}
    }
  }
};
