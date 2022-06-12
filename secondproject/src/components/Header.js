import React from 'react'
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="banner">
        <Navbar/>
            <div className="banner-content">
                 <div className="container">
                    <div className="banner__text">
                    <h3>Pizza Delivery</h3>
                     <h1>MAESTRO</h1>
                     <h1>PIZZINI</h1>
                     <p>lorem ipsum somthing fishiny lorem sutsm kiskon slqeop, sdsalpe mqeier tlssa king queen</p>

                    </div>
                    <div className="banner_btn">
                        <a href="" className="btn btn-smart">DELIVERY NOW</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
