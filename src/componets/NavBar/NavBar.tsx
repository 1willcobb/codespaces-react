import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import CallToAction from './CallToAction'

const NavBar = () => {
  return (
    <div className='nav_bar'>
        <div className='logo'>
          <Logo/>
        </div>
        <div className='nav'>
          <Nav/>
          <CallToAction/>
        </div>
    </div>
  )
}

export default NavBar