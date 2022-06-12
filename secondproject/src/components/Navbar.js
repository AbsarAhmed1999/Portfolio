import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="logo"><img src="/logo.jpg" alt="logo" /></div>
            <div className="nav-text">
                <ul className="navbar_ul">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            
            </div>        
        </nav>
    )
}

export default Navbar
