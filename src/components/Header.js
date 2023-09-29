import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>FREEESHIP WITH INVOICES FROM 499K</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline: <a className='text-white mb-0' href="tel: +84 123454678">+84 12345678</a> (Free)
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2'></div>
            <h2>
              <Link className='text-white'>Developer.</Link>
            </h2>
            <div className='col-5'></div>
            <div className='col-5'></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
