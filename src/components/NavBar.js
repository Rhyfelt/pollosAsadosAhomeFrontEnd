import React from 'react'
import pollosAhomeLogo from '../assets/pollosAhomeLogo.jpeg'
import NavBarLinks from '../components/NavBarLinks'
import RouterComponent from './RouterComponent'
import '../assets/style/NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar-container">
            <img className="logo" src={pollosAhomeLogo}/>
            <NavBarLinks />
        </div>
    )
}

export default NavBar
