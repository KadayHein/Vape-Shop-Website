import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function NewRelease() {
  return (
    <>
    <div className='container text-center mt-5'>
        <h1 className='fw-bold'><span className='text-danger'>New</span> <span>Released</span></h1>
        <h5>Try Our Latest Flavors Here</h5>
        <div className='d-flex justify-content-around mt-4 w-100'>
            <div className='new'>
                <img src="images/strawberry.jpg" alt="" className='newimg'/>
                <span className='newreleaseinfo'><b>Strawberry Refreshing Flavor <br></br> Nic 3 Percent</b> <small>30,000 MMK</small></span>
            </div>
            <div className='new'>
                <img src="images/blueberry.jpg" alt="" className='newimg'/>
                <span className='newreleaseinfo'><b>Blueberry Refreshing Flavor <br></br> Nic 3 Percent</b> <small>30,000 MMK</small></span>
            </div>
            <div className='new'>
                <img src="images/kiwi.jpg" alt="" className='newimg'/>
                <span className='newreleaseinfo'><b>Kiwi Refreshing Flavor <br></br> Nic 3 Percent</b> <small>30,000 MMK</small></span>
            </div>
            <div className='new'>
                <img src="images/strawberry.jpg" alt="" className='newimg'/>
                <span className='newreleaseinfo'><b>Strawberry Refreshing Flavor <br></br> Nic 3 Percent</b> <small>30,000 MMK</small></span>
            </div>
        </div>
        <div className='d-block mt-4'>
            <button className='btn morebtn rounded-pill'>View More <IoIosArrowForward size={15}/></button>
        </div>
    </div>
    </>
  )
}
