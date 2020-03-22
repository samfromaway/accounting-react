import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AccountingTransaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <tr>
      <td className='borderless'>
        <button
          className='delete-btn'
          onClick={() => deleteTransaction(transaction._id)}
        >
          <i className='far fa-times-circle'></i>
        </button>
      </td>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.currency}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.chf}</td>
      <td>{transaction.document}</td>
      <td>{transaction.category}</td>
      <td className='borderless'>
        <button className='edit-btn'>
          <i className='fas fa-edit'></i>
        </button>{' '}
        <button className='exit-edit-btn'>
          <i className='fas fa-undo'></i>
        </button>
      </td>
    </tr>
  );
};
