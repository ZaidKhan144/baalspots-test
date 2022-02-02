import React, { useState, useEffect } from 'react';
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

import './Section2.scss'

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
  }, []);

  
  return (
      <section id='two'>
        <div className='section-container'>
          <h1>Experience The Cardo</h1>
        {/* <div className='card-container'>
          {
          data.length > 0 && data.slice(0, 6).map((item, index) => {
            return (
              <div key={index} className='card'>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <a href="https://baalspots.com/" target='_blank'>Learn More</a>
              </div>
            )
            })
          }
        </div> */}

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