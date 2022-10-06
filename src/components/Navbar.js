import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
    <div className='navbar'>
    <ul className='nav-list'>
        <li className='first-item-nav'><a href='#home'>Home</a></li>
        <li><a href='#Project'>Project</a></li>
        <li><a href='#About'>About me</a></li>
        <li><a href='#Contact'>Contact</a></li>
    </ul>
    </div>
    </nav>
    
  )
} 

export default Navbar;