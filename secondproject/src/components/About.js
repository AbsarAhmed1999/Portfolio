import React from 'react'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About Us</h3>
                        <h1>WELCOME TO MASTERO PIZZINI</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam id porttitor quam. Aliquam in tempor ligula. Cras sit amet leo aliquam, 
                        Proin vestibulum dui vel felis eleifend maximus. 
                        Curabitur quis dignissim quam. Phasellus quis mollis ligula.
                        </p>
                    <div className="about_btn">
                        <a href="" className="btn btn-smart">READ MORE</a>
                    </div>
                    </div>
                    <div className="col-6">
                        <div className="about_img">
                            <img src="/pizzaslice.jpg" alt="pizza"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
