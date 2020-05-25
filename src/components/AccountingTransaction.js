import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AccountingTransaction = ({ transaction }) => {
  const { deleteTransaction, editTransaction } = useContext(GlobalContext);

  return (
    <tr>
      <td className='borderless'>
        <button
          className='delete-btn'
          onClick={() => deleteTransaction(transaction._id)}
        >
          <div>circle</div>
        </button>
      </td>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.currency}</td>
      <td>{transaction.amount.toFixed(2)}</td>
      <td>{transaction.chf.toFixed(2)}</td>
      <td>{transaction.document}</td>
      <td>{transaction.category}</td>
      <td className='borderless'>
        <button
          className='edit-btn'
          onClick={() => editTransaction(transaction._id)}
        >
          <div>edit</div>
        </button>{' '}
        <button className='exit-edit-btn'>
          <div>undo</div>
        </button>
      </td>
    </tr>
  );
};
