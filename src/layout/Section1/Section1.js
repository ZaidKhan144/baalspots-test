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
  backgroundImageAnimation()
}, []);

const backgroundImageAnimation = () => {
  gsap.from('.background', {
    width: '0%',
    duration: 0.5,
    right: '-100px',
    opacity: 0.5,
    ease: 'power.out',
    clearProps: "all",
    onComplete: () => {
      leftAnimation()
    }
  })
}

const leftAnimation = () => {
  gsap.from('.left-content', {
    width: '0%',
    duration: 0.5,
    left: '-300px',
    delay: 0.5,
    ease: 'power.out',
    autoAlpha: 0,
  })
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
            <img src={stars} alt='stars' />
            <h1>All the <span>experience</span> <br /> in the new credit card</h1>
            <img src={arrow} alt='arrow' />
            <p className='text'>Simple transfers, payments for utilities, functional statemement, 
            card settings, for which you used to have to go too the brach oonline-banking</p>
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
        { props.mobileWidth ? <img src={cardoCard} alt="cardoCard" className='cardo-card' /> : 
        <img src={background} alt="background" className='background' /> }
        </div>
      </section>
  );
}

export default Section1