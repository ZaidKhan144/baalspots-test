import React, { useEffect } from 'react';
import gsap from 'gsap'

import logo from '../../assets/images/logo.svg';
import hamburgerMenu from '../../assets/images/hamburger.svg'

import './Header.scss'

const Header = (props) => {

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2}})

    if (!props.mobileWidth) {
      tl.to('header', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.5, delay: 1})
    } else {
      gsap.set('header', {
        width: '80%',
        clearProps: "all"
      })
    }
  }, [props.mobileWidth]);
  

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