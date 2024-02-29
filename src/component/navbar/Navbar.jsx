import React, { useState, useEffect, useRef} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

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
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

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
            <div className="navbar-menu-icon" ref={menuRef}>
        {toggleMenu ? (
          <RiCloseLine color='#ffff' size={24} onClick={() => setToggleMenu(!toggleMenu)} className='navbar-closeline'/>
        ) : (
          <RiMenu3Line color='#ffff' size={24} onClick={() => setToggleMenu(!toggleMenu)} className='navbar-menuline'/>
        )}
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
      </div>

      </div>
  );
};

export default Nav;





