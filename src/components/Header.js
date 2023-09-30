import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";

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
          <div className='row align-items-center'>
            <div className='col-2'></div>
            <h2>
              <Link className='text-white'>Developer.</Link>
            </h2>
            <div className='col-5'>
              <div className="input-group mb-3">
                <input 
                  type="text" 
                  className="form-control py-2" 
                  placeholder="Search here..." 
                  aria-label="Search here..." 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch></BsSearch>
                </span> 
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links-d-flex justify-content-between'>
                <div>
                  <Link>
                    <img src="image/compare.svg" alt="compare" />
                    <p>Compare <br /> Product_Can doi lai
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src="image/wishlist.svg" alt="wishlist" />
                    <p>Favourite  <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src="image/user.svg" alt="user" />
                    <p>Login/Register  <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap'>
                    <img src="image/cart.svg" alt="cart" />
                    <div className='d-flex flex-column'>
                      <span className='badge bg-white text-dark '>0</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
