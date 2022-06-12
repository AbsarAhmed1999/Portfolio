import React from 'react'

const Form = () => {
    return (
        <div className="Form">
        <div className="container">
            <div className="form-content">
                <div className="form-text">
                    <h3>Quick Delivery </h3>
                    <h1>ORDER A <br/>PIZZA NOW</h1>
                    <p>Lorem Ipsum somfnk slona lsopq loreus<br/>kesasm hionl kpoqns.Clartis skqmd kiunytl fhasnt</p>
                    <div className="form">
                    <form>
                    <input type="text" name="firstname" placeholder="firstName" className="firstName"/>
                    <input type="text" name="lastname" placeholder="lastName" className="lastName"/>
                    <div>
                    <input type="text" name="street" placeholder="Enter Street Address" className="street"/>
                    </div>
                    <input type="text" name="Apartment" placeholder="Apartment/RoomNo" className="apartment"/>
                    <input type="text" name="phone" placeholder="phone Number" className="phone"/>
                    <div>
                        <select className="pizzatype">
                            <option value="" disabled selected>Select PizzaType</option>
                            <option value="small">Small</option>
                            <option value="regular">Regular</option>
                            <option value="large">Large</option>
                            <option value="extralarge">ExtraLarge</option>
                        </select>
                    </div>
                    <div className="form-btn">
                    <a href="" className="btn btn-smart">QUICK DELIVERY ORDER NOW</a>
                    </div>
                    </form>
                    </div>
                </div>
                <div className="image">
                <img src="/guy.jpg"/>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Form
