import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AccountingTransaction } from './AccountingTransaction'

export const AccountingTable = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className='content-wrapper'>
      <h3 className='section-title'>History</h3>
      <table className='table'>
        <thead>
          <tr>
            <th className='borderless'></th>

            <th data-column='date' data-order='asc'>
              Date
            </th>
            <th data-column='description' data-order='asc'>
              Description
            </th>
            <th data-column='currency' data-order='asc'>
              Currency
            </th>
            <th data-column='amount' data-order='asc'>
              Amount
            </th>
            <th data-column='chf' data-order='asc'>
              CHF
            </th>
            <th data-column='document' data-order='asc'>
              Document
            </th>
            <th data-column='category' data-order='asc'>
              Category
            </th>
            <th className='borderless' data-order='asc'></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction =>( <AccountingTransaction key={transaction._id} transaction={transaction}/>


            ))}
          
        </tbody>
      </table>
    </div>
  );
};
