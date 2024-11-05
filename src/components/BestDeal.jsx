import React from 'react'
import { FaArrowRight, FaStar } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";

export default function BestDeal() {
  return (
    <div className='container text-center mt-5'>
        <h1 className='fw-bold'>Best Deals</h1>
        <h5>Just For You</h5>
        <div className='d-flex justify-content-center mt-4'>
            <div className='bestdeal'>
                <div className='center'>
                    <span className='py-1 px-2 promotion'>25% Off</span>
                    <img src="images/DreamShaper_v7_vape_item_only_no_person_1 (1)-458edf24.jpg" alt="" className='podimg'/>
                </div>
                <p className='mt-3'>
                    <span className='d-block'>Refreshing Mint</span>
                    <span className='d-block fw-bold'>30,000 MMK</span>
                    <small><del>30,000 MMK</del></small>
                    <span className='d-block text-warning'><FaStar size={12} className='mb-1'/> 600 Points</span>
                </p>
            </div>
            <div className='bestdeal'>
                <div className='center'>
                    <span className='py-1 px-2 promotion'>25% Off</span>
                    <img src="images/DreamShaper_v7_vape_item_only_no_person_1-1d865d84.jpg" alt="" className='podimg'/>
                </div>
                <p className='mt-3'>
                    <span className='d-block'>Refreshing Mint</span>
                    <span className='d-block fw-bold'>30,000 MMK</span>
                    <small><del>30,000 MMK</del></small>
                    <span className='d-block text-warning'><FaStar size={12} className='mb-1'/> 600 Points</span>
                </p>
            </div>
            <div className='bestdeal'>
                <div className='center'>
                    <span className='py-1 px-2 promotion'>25% Off</span>
                    <img src="images/DreamShaper_v7_vape_item_only_no_person_2 (1)-0069ecc6.jpg" alt="" className='podimg'/>
                </div>
                <p className='mt-3'>
                    <span className='d-block'>Refreshing Mint</span>
                    <span className='d-block fw-bold'>30,000 MMK</span>
                    <small><del>30,000 MMK</del></small>
                    <span className='d-block text-warning'><FaStar size={12} className='mb-1'/> 600 Points</span>
                </p>
            </div>
            <div className='bestdeal'>
                <div className='center'>
                    <span className='py-1 px-2 promotion'>25% Off</span>
                    <img src="images/DreamShaper_v7_vape_item_only_no_person_2-64a0e07b.jpg" alt="" className='podimg'/>
                </div>
                <p className='mt-3'>
                    <span className='d-block'>Refreshing Mint</span>
                    <span className='d-block fw-bold'>30,000 MMK</span>
                    <small><del>30,000 MMK</del></small>
                    <span className='d-block text-warning'><FaStar size={12} className='mb-1'/> 600 Points</span>
                </p>
            </div>
            <div className='bestdeal'>
                <div className='center'>
                    <span className='py-1 px-2 promotion'>25% Off</span>
                    <img src="images/DreamShaper_v7_vape_item_only_no_person_3-ea025c04.jpg" alt="" className='podimg'/>
                </div>
                <p className='mt-3'>
                    <span className='d-block'>Refreshing Mint</span>
                    <span className='d-block fw-bold'>30,000 MMK</span>
                    <small><del>30,000 MMK</del></small>
                    <span className='d-block text-warning'><FaStar size={12} className='mb-1'/> 600 Points</span>
                </p>
            </div>
            <div className='bestdeal'>
                <div className='center'>
                    <span className='py-1 px-2 promotion'>25% Off</span>
                    <img src="images/DreamShaper_v7_vape_item_only_no_person_0-15014a80.jpg" alt="" className='podimg'/>
                </div>
                <p className='mt-3'>
                    <span className='d-block'>Refreshing Mint</span>
                    <span className='d-block fw-bold'>30,000 MMK</span>
                    <small><del>30,000 MMK</del></small>
                    <span className='d-block text-warning'><FaStar size={12} className='mb-1'/> 600 Points</span>
                </p>
            </div>
        </div>
        <div className='d-block'>
            <button className='btn morebtn rounded-pill'>View More <IoIosArrowForward size={15}/></button>
        </div>
    </div>
  )
}
