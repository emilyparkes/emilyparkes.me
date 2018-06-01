import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-header'>
      {/* <div className='nav-logo'>
        <Link to='/'>
          <img src='/images/' className='logo' />
        </Link>
      </div> */}
      <div className='nav-links'>
      <span className='nav-link-individual-styling'>
          <Link to='/'>home</Link>
        </span>
        <span className='nav-link-individual-styling'>
          <Link to='/portfolio'>portfolio</Link>
        </span>
        <span className='nav-link-individual-styling'>
          <Link to='/about'>about</Link>
        </span>
        <span className='nav-link-individual-styling'>
          <Link to='/contact'>contact</Link>
        </span>
      </div>
    </div>
  )
}

export default Nav