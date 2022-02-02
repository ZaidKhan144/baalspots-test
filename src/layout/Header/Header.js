import React from 'react';

import logo from '../../assests/images/logo.svg';
import hamburgerMenu from '../../assests/images/hamburger.svg'

import './Header.scss'

const Header = (props) => {

  console.log('ddddddddddddd', props.mobileWidth)
  return (
      <header role="banner">
        <img className='logo' src={logo} alt='logo' />
        { props.mobileWidth ? <img className='hamburger-menu' src={hamburgerMenu} alt='hamburgerMenu' /> : 
          <div>
            <a href="#">Deposit</a>
            <a href="#">Dashboard</a>
            <a href="#">Company</a>
            <a href="#">Pricing</a>
          </div>
        }
      </header>
  );
}

export default Header