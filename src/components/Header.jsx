"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'; // For Splide
import React from 'react'

export default function Header() {
  return (
      <section id="showcase" className="d-flex justify-content-center align-items-center">
        <div id='overlay'>
        <Splide options={{perPage:1, gap:'0.6rem',arrows:true,rewind:true}}>
          <SplideSlide>
            <img src="images/landing1.webp" alt="" className='w-100'/>
          </SplideSlide>
          <SplideSlide>
            <img src="images/landing2.webp" alt="" className='w-100'/>
          </SplideSlide>
        </Splide>
        </div>
        
        <div id="header" className="container text-white text-center">
            <h5 className="display-5">The Best Look</h5>
            <h2 className="display-2">Anytime Anywhere</h2>
            <p className="lead">Starts from 10,000 MMK</p>
        </div>
      </section>
    )
}
