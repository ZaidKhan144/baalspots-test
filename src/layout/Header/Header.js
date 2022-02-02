import React, { useEffect } from 'react';
import gsap from 'gsap'

import logo from '../../assets/images/logo.svg';
import hamburgerMenu from '../../assets/images/hamburger.svg'

import './Header.scss'

const Header = (props) => {

  useEffect(() => {
    headerAnimation()
  }, []);
  

  const headerAnimation = () => {
    gsap.from('header', {
        width: '0%',
        duration: 0.8,
        delay: 0.5,
        y: '-100px',
        opacity: 0.5,
    })
  }

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