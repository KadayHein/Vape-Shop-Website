"use client"

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'; // For Splide
import React from 'react'
import { FaStar } from 'react-icons/fa';

export default function MoreSlider() {
    const category = [
        {
            imgUrl: "float3.png",
            title: "Devices",
            desc: "Find the best for you here!"
        },
        {
            imgUrl: "float1.png",
            title: "Pods",
            desc: "Variety of choices available"
        },
        {
            imgUrl: "float2.png",
            title: "Disposable",
            desc: "Easy, clean & superb flavor"
        }
    ]

    const pods = [
        {
            imgUrl: 'pod1.webp',
            name: 'Refreshing Mint',
            price: '30,000 MMK',
            points: 600
        },
        {
            imgUrl: 'pod2.webp',
            name: 'Refreshing Mint',
            price: '30,000 MMK',
            points: 600
        },
        {
            imgUrl: 'pod3.webp',
            name: 'Refreshing Mint',
            price: '30,000 MMK',
            points: 600
        },
        {
            imgUrl: 'pod4.webp',
            name: 'Refreshing Mint',
            price: '30,000 MMK',
            points: 600
        },
        {
            imgUrl: 'pod5.webp',
            name: 'Refreshing Mint',
            price: '30,000 MMK',
            points: 600
        },
        {
            imgUrl: 'pod6.webp',
            name: 'Refreshing Mint',
            price: '30,000 MMK',
            points: 600
        },
        {
            imgUrl: 'pod7.webp',
            name: 'Refreshing Mint',
            price: '30,000 MMK',
            points: 600
        },
        {
            imgUrl: 'pod8.webp',
            name: 'Refreshing Mint',
            price: '30,000 MMK',
            points: 600
        }
    ]
  return (
    <>
    { 
        category.map( cat => (
            <div key={cat.title} className='container detail pt-3 mt-5'>
            <div className='col-4'>
                <div className='row d-flex align-items-center'>
                    <div className='col-7 text-center'><img src={"images/"+cat.imgUrl} alt="" className='w-75'/></div>
                    <div className='col-5 text-white text-start'>
                        <h2 className='fw-bold'>{cat.title}</h2>
                        <small className='fw-light'>{cat.desc}</small>
                    </div>
                </div>
            </div>
            <div className='col-8'>
                <Splide options={{perPage:4, gap:'0.6rem',arrows:true,rewind:true}}>
                {
                    pods.map(pod => (
                    <SplideSlide key={pod.imgUrl}>
                        <div className='bestdeal'>
                            <div className='center'>
                                <img src={'images/'+pod.imgUrl} alt="" className='podimg'/>
                            </div>
                            <p className='mt-3 text-white text-center'>
                                <span className='d-block'>{pod.name}</span>
                                <span className='d-block fw-bold'>{pod.price}</span>
                                <span className='d-block text-warning'><FaStar size={12} className='mb-1'/> {pod.points} Points</span>
                            </p>
                        </div>
                    </SplideSlide>
                    ))
                }
                </Splide>
            </div>
    </div>
        ))
    }
    </>
  )
}
