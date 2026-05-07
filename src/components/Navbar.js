import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()
    const isActive = (path) => location.pathname === (path)
    return (
        <div className='navBody'>
            <div className='logodiv'>Logo</div>
            <div className='pagesdiv'>
                <Link to='/discover' className={`discovernav ${isActive('/discover') ? "active" : ""}`}>Discover</Link>
                <Link to='/search' className={`searchnav ${isActive('/search') ? 'active' : ''}`}>Explore</Link>
                <Link to='/cart' className={`cartnav ${isActive('/cart') ? 'active' : ''}`}>Cart</Link>
            </div>
            <div className='searchdiv'>
                <input type='text' placeholder='Search' className='searchbox'/>
            </div>
        </div>
    )
}
