import Link from 'next/link';
import React from 'react'
import { FaBell, FaCog, FaCogs, FaHeart, FaHistory, FaList, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark text-white bg-black">
        <div className="container">
            <Link href={"/"} className="navbar-brand">PI.</Link>
            <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="#" data-bs-toggle="offcanvas" className="nav-link">
                            <FaSearch size={20}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FaShoppingCart size={20}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"><FaList size={20}/></a>
                    </li>
                </ul>
        </div>
    </nav>
  )
}