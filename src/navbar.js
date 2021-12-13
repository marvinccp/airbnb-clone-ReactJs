import React from 'react'
import logo_abnb from './logos/logo_airbnb.png'

const NavBar = (props) =>{

    return (
      <nav className='navbar-header-container'>
        <figure className='img-wrapper'>
        <img className='nav-logo' src={logo_abnb} alt="logo" />

        </figure>
      </nav>
    );
}

export default NavBar;