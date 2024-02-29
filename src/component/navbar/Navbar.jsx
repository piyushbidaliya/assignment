import React from 'react';
import './navbar.css';

const Menu = () => {


  return (
    <>
      <a href='#a'>
        <p>Categories</p>
      </a>
      <a href='#a'>
        <p>Website Builders</p>
      </a>
      <a href='#a'>
        <p>Today's deals</p>
      </a>
    </>
  );
};


const Nav = () => {

  return (
    <div className='navbar'>
        <div className="navbar-items">
        <div className="navbar_logo">
            <img src='' alt="" />
        </div>
        <div className="navbar-search">
            <i className='fa fa-search'></i>
          <input type="text" />
        </div>
      <div className='navbar_menu'>
        <Menu />
      </div>
    </div>
  </div>
  );
};

export default Nav;





