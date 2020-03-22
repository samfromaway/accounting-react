import React from 'react';

export const Header = () => {
  return (
    <section>
      <nav>
        <div className='logo'>
          <a href='index'>
            {' '}
            <img className='header-logo' alt='Logo' src='images/logo.png' />
          </a>
          <p className='logo-desc'>CRM</p>
        </div>

        <div className='burger-wrapper'>
          <div className='burger'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </div>
      </nav>
    </section>
  );
};
