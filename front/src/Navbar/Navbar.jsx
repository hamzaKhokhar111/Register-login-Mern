import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className='navbar'>

      <ul className='list'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='register'>Register</Link></li>
        <li><Link to='login'>Login</Link></li>
      </ul>

    </div>
        
    </>
  )
}

export default Navbar
