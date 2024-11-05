"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'; // For Splide
import React from 'react'

export default function TryNew() {
  return (
    <div className='container mt-5'>
        <Splide options={{perPage:1, gap:'0.6rem',arrows:true,rewind:true}}>
        <SplideSlide>
                <div className='row bg-dark d-flex align-items-center text-white text-center'>
                    <div className='col-4 ps-5'>
                        <img src="images/float4.png" alt="" width={400}/>
                    </div>
                    <div className='col-7'>
                        <h2>Try New Flavor</h2>
                        <p >Lost Vape Innovation</p>
                        <button className='btn btn-outline-secondary text-white rounded-pill'>View</button>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className='row bg-dark d-flex align-items-center text-white text-center'>
                    <div className='col-4 ps-5'>
                        <img src="images/float5.png" alt="" width={340}/>
                    </div>
                    <div className='col-7 '>
                        <h2>Try New Flavor</h2>
                        <p >UWell Innovation</p>
                        <button className='btn btn-outline-secondary text-white rounded-pill'>View</button>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    </div>
  )
}
