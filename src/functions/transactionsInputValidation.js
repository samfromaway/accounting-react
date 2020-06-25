import { currentYear } from '../constants';

export const transactionsInputValidation = (newData) => {
  if (
    newData.description === '' ||
    newData.currency === '' ||
    newData.amount === '' ||
    newData.exRate === '' ||
    newData.exRate === '0' ||
    newData.document === '' ||
    newData.category === ''
  ) {
    alert('Please fill out all the fields');
    return false;
  } else if (newData.date === null || newData.date === undefined) {
    alert(`Please enter a date in the year ${currentYear}`);
    return false;
  } else if (new Date(newData.date).getFullYear() !== currentYear) {
    alert(`Please enter a date in the year ${currentYear}`);
    return false;
  } else {
    return true;
  }
};
