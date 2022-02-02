import React, { useState, useEffect } from 'react';
import { GridRow, GridColumn } from "emotion-flex-grid";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Section2.scss'

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {

  const [ data, setData ] = useState([])

  const fetchData = () => {

      fetch('https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  useEffect(() => {
    fetchData()
    headingAnimation()
  }, []);

  const headingAnimation = () => {
    gsap.fromTo('.section-container > h1', {
      y: '-200px',
      opacity: 0.2,

    }, {
      y: '0px',
      scrollTrigger: '.section-container > h1',
      duration: 1,
      delay: 1,
      opacity: 1,
      onComplete: () => {
        cardsAnimation()
      }
    })
  }

  const cardsAnimation = () => {
    gsap.fromTo('.card', {
      y: '-100px',
    }, {
      y: '0px',
      scrollTrigger: '.card',
      duration: 1,
      autoAlpha: 1,
    })
  }

  
  return (
      <section id='two'>
        <div className='section-container'>
          <h1>Experience The Cardo</h1>
          <GridRow wrap='wrap' justify='between' className='card-container'>
            {
            data.length > 0 && data.slice(0, 6).map((item, index) => {
              return (
                <GridColumn key={index} className='card'>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <a href="https://baalspots.com/" target='_blank'>Learn More</a>
                </GridColumn>
                )
              })
            }
          </GridRow>
        </div>
      </section>
  );
}

export default Section2