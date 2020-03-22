import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AccountingInput = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [document, setDocument] = useState('');
  const [category, setCategory] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      _id: Math.floor(Math.random() * 100000000),
      date,
      description,
      currency,
      amount: +amount,
      chf: +amount,
      document,
      category
    };

    addTransaction(newTransaction);
  };

  return (
    <form className='input-section-form'>
      <div className='content-wrapper'>
        <h3 className='section-title'>Add New</h3>
        <div className='input-wrapper'>
          <div className='form-element'>
            <span className='label-input2'>Date</span>

            <input
              className='input'
              type='date'
              name='date'
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>

          <div className='form-element'>
            <span className='label-input2'>Description</span>
            <input
              className='input'
              type='text'
              name='description'
              placeholder='Description'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className='form-element'>
            <label htmlFor='currency-input' className='label-input2'>
              Currency
            </label>

            <select
              name='currency'
              className='input'
              value={currency}
              onChange={e => setCurrency(e.target.value)}
            >
              <option value=''>Currency</option>
              <option value='USD'>USD</option>
              <option value='COP'>COP</option>
              <option value='CHF'>CHF</option>
            </select>
          </div>

          <div className='form-element'>
            <span className='label-input2'>Amount</span>
            <input
              className='input'
              type='number'
              step='any'
              name='amount'
              placeholder='Amount'
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>

          <div className='form-element'>
            <span className='label-input2'>Document</span>
            <input
              className='input'
              type='text'
              name='document'
              placeholder='Document'
              value={document}
              onChange={e => setDocument(e.target.value)}
            />
          </div>

          <div className='form-element'>
            <label
              name='currency'
              htmlFor='category-input'
              className='label-input2'
              value={currency}
              onChange={e => setCurrency(e.target.value)}
            >
              Category
            </label>

            <select
              name='category'
              className='input'
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value=''>Category</option>
              <option value='HTE'>HTE</option>
              <option value='HTE Products'>HTE Products</option>
              <option value='HTM'>HTM</option>
              <option value='CH'>CH</option>
              <option value='Online'>Online</option>
            </select>
          </div>

          <div className='form-element'>
            <span id='amount-chf-nr'></span>
          </div>
        </div>
      </div>

      <div className='button-wrapper'>
        <button className='button save-btn'>Save</button>
        <button onClick={onSubmit} className='button submit-btn'>
          Enter
        </button>
        <button className='button cancel-btn'>Cancel</button>
      </div>
    </form>
  );
};
