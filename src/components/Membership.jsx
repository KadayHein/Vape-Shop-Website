import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
export default function Membership() {
  return (
    <div className='container text-center mt-5'>
        <div className='row d-flex justify-content-center mt-4'>
            <div className='col-12 col-lg-7 bg-dark text-white text-start rounded-3 px-5 py-5 mb-3 mb-lg-0 d-flex align-items-center'>
                <div className='col-8'>
                    <h2>Membership Program</h2>
                    <p className='w-50'>Be a Vape Pi member and get our special exclusive offers</p>
                    <button className='btn btn-outline-secondary text-white rounded-pill'>View</button>
                </div>
                <div className='col-4'>
                    <img src="images/float5.png" alt="" className='w-100'/>
                </div>
            </div>
            <div className='col-5 col-lg-2 bg-dark text-white text-start rounded-3 ms-2 py-2'>
                <div className='d-block text-center'>
                    <img src="images/float3.png" alt="" className='w-75 pt-5 pb-5'/>
                </div>
                <div className='row mt-5'>
                <div className='col-9'>
                    <h5>Devices</h5>
                    <small className='fw-lighter'>Find the best for you here!</small>
                </div>
                <div className='col-2'>
                    <button className='btn text-white rounded-pill'><IoIosArrowForward size={15}/></button>
                </div>
                </div>
            </div>
            <div className='col-5 col-lg-2'>
                <div className='h-50 bg-dark text-white text-start rounded-3 mb-1'>
                    <div className='d-block text-center'>
                        <img src="images/float1.png" alt="" className='w-50'/>
                    </div>
                    <div className='row px-3'>
                    <div className='col-9'>
                        <b className='d-block'>Pods</b>
                        <small className='desp'>Variety of choices available</small>
                    </div>
                    <div className='col-1'>
                        <button className='btn text-white rounded-pill'><IoIosArrowForward size={15}/></button>
                    </div>
                    </div>
                </div>
                <div className='d-block h-50 bg-dark text-white text-start rounded-3'>
                <div className='d-block text-center'>
                        <img src="images/float2.png" alt="" className='w-50'/>
                    </div>
                    <div className='row px-3'>
                    <div className='col-9'>
                        <b className='d-block'>Disposable</b>
                        <small className='desp'>Easy, clean & superb flavor</small>
                    </div>
                    <div className='col-2'>
                        <button className='btn text-white rounded-pill'><IoIosArrowForward size={15}/></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
