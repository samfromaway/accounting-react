import React from 'react';
import { AccountingSummaryTotal } from './AccountingSummaryTotal';
import { AccountingSummaryDiagram } from './AccountingSummaryDiagram';

export const AccountingSummary = () => {
  return (
    <section className='summary-section section05'>
      <div className='content-wrapper'>
        <h3 className='section-title'>Summary</h3>
        <div className='sum-graph-wrapper'>
          <div className='sum-wrapper'>
            <h4 className='darktext'>Total:</h4>
            <h3 className='darktext'>
              <AccountingSummaryTotal />
            </h3>
          </div>
          <div className='graph-wrapper'>
            <div>
              <AccountingSummaryDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
