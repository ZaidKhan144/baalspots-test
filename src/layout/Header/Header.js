import React from 'react';

import logo from '../../assests/images/logo.svg';

import './Header.scss'

const Header = () => {
  return (
      <header role="banner">
        <img className='logo' src={logo} alt='logo' />
        <div>
          <a href="#">Deposit</a>
          <a href="#">Dashboard</a>
          <a href="#">Company</a>
          <a href="#">Pricing</a>
        </div>
      </header>
  );
}

export default Header