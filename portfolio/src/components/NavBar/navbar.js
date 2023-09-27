import React from "react";
import './navbar.css'
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"></img>
            <div className="desktopMenu">

            </div>
            <button className="desktopMenuBtn">
                <img src="" alt="" className="desktopMenuImg"></img>Contact Me
            </button>
        </nav>
    )
}


export default NavBar;