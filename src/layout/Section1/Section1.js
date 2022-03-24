import React, { useEffect } from 'react';
import gsap from 'gsap'

import background from '../../assets/images/background.png';
import stars from '../../assets/images/stars.svg';
import arrow from '../../assets/images/arrow.svg';
import arrowIcon from '../../assets/images/arrow-icon.svg';
import cardoCard from '../../assets/images/cardo_card.png';

import './Section1.scss'

const activeBarData = [
  {
    title: "Active users",
    number: "5000+"
  },
  {
    title: "Download",
    number: "30.3k"
  },
  {
    title: "Reviews",
    number: "1200+"
  }
]

const Section1 = (props) => {

useEffect(() => {

  if(!props.mobileWidth) {
    gsap.from('.background', {
      width: '0%',
      duration: 0.5,
      right: '-100px',
      opacity: 0.5,
      ease: 'power.out',
      onComplete: () => {
        leftAnimation()
      }
    })
  } else {
    gsap.set('.cardo-card', {
      width: '100%',
      clearProps: "all"
    })
  }
}, [props.mobileWidth]);


const leftAnimation = () => {
  
  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2}})
  if (!props.mobileWidth) {

  tl.to('.stars', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
  tl.to('.heading', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=2")
  tl.to('.arrow', { stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=2")
  tl.to('.text', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=2")
  tl.to('.cta', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=2")
  tl.to('.active-bar', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=2")
  } else {
    gsap.set(tl, {
      clearProps: "all"
    })
  } 
 }


  let activeBar = activeBarData.map((item, index) => {
    return (
      <div key={index} className={`active-bar-items active-bar-items-${index}`}>
          <p>{item.title}</p>
          <p>{item.number}</p>
      </div>
    )
  })

  return (
      <section id="one">
        <div className='left'>
          <div className='ellipse1'></div>
          <div className='ellipse2'></div>
          <div className='left-content'>
            <img className='stars' src={stars} alt='stars' />
            <h1 className='heading'>All the <span>experience</span> <br /> in the new credit card</h1>
            <img className='arrow' src={arrow} alt='arrow' />
            <p className='text'>Simple transfers, payments for utilities, functional statement, 
            card settings, for which you used to have to go to the branch online-banking</p>
            <div className='cta'>
              <button>Order a card</button>
              <div>
                <p>How it works</p>
                <img src={arrowIcon} alt='arrowIcon' />
              </div>
            </div>
            <div className='active-bar'>{activeBar}</div>
          </div>
        </div>
        <div className='right'>
        { props.mobileWidth ? <div className='card-div'><img src={cardoCard} alt="cardoCard" className='cardo-card' /></div>  : 
        <img src={background} alt="background" className='background' /> }
        </div>
      </section>
  );
}

export default Section1