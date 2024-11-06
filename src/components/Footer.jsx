import React from 'react'
import { RiShieldKeyholeLine } from "react-icons/ri";
import { PiArrowClockwiseFill } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebook, FaTelegram, FaTwitter, FaViber, FaYoutube, FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='container mt-5'>
        <div className='row d-flex'>
        <div className='col-3'>
            <h5>Customer Service</h5>
            <span className='d-block'><RiShieldKeyholeLine size={20} className='mb-1'/> Terms & Privacy Policy</span>
            <span><PiArrowClockwiseFill size={20} className='mb-1'/> Return Policy</span>
        </div>
        <div className='col-3'>
            <h5>Language</h5>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
            <label className="form-check-label" for="flexRadioDefault1">
                Myanmar (Unicode)
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
            <label className="form-check-label" for="flexRadioDefault2">
                Myanmar (Zawgyi)
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"></input>
            <label className="form-check-label" for="flexRadioDefault3">
                English
            </label>
            </div>
        </div>
        <div className='col-3'>
            <h5>Contact Us</h5>
            <div className='row mb-1'>
                <div className='col-1'><HiOutlineLocationMarker size={20} className='mb-1'/></div>
                <div className='col-10'>Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun Tsp, Yangon.</div>
            </div>
            <span><FiPhone size={20} className='mb-1'/> 09458489458</span>
        </div>
        <div className='col-3'>
            <h5>Download Our App</h5>
            <img src="images/QR.png" alt="" width={120}/>
        </div>
        <div className='col-3'>
            <h5>Payment</h5>
            <div className='row w-100'>
                <div className='col-4'><img src="images/kbz_pay.png" alt="" width={50}/></div>
                <div className='col-6'><img src="images/wavepay.png" alt="" width={120}/></div>
            </div>
        </div>
        <div className='col-3'>
            <h5>Follow Us On</h5>
            <div className="row">
                    <div className="col-4 col-md-2 d-flex justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FaFacebook size={30} color='#1877F2'/>
                            </a>
                        </li>
                    </div>
                    <div className="col-4 col-md-2 d-flex justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FaYoutube size={35} color='red' className='pb-1'/>
                            </a>
                        </li>
                    </div>
                    <div className="col-4 col-md-2 d-flex justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                              <FaTelegram size={30} color='#229ED9'/>
                            </a>
                        </li>
                    </div>
                    <div className="col-4 col-md-2 d-flex justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="">
                              <FaViber size={30} color='#7360f2'/>
                            </a>
                        </li>
                    </div>
                    <div className="col-4 col-md-2 d-flex justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FaTwitter size={28} color='#229ED9'/>
                            </a>
                        </li>
                    </div>
                </div>
        </div>

        <small className="my-3 mx-auto text-center"><FaRegCopyright size={15} className='mb-1'/> Copyright 2024 C by D Co.,Ltd. All rights reserved.</small>
        </div>
    </div>
  )
}
