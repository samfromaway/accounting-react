import React from 'react';
import { Header } from './components/Header';
import { AccountingSummary } from './components/AccountingSummary';
import { AccountingInput } from './components/AccountingInput';
import { AccountingTable } from './components/AccountingTable';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <section className='summary-section section05'>
        <AccountingSummary />
      </section>
      <section className='input-section section05'>
        <AccountingInput />
      </section>
      <section className='table-section section05'>
        <AccountingTable />
      </section>
    </GlobalProvider>
  );
}

export default App;

// Edit
// Save?
// Post
// resetinput
//reseteditmode
//
