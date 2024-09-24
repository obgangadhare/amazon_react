import React,{useState} from "react";
import { Link } from 'react-router-dom';
import amazon_logo from './images/amazon_logo.png';
import Login from "../Loginpage/Login";
import './Navbar.css';

const Navbar = () => {
    const[showsign,setShowsign]=useState(false)
    const getCartCount = () => {
        return parseInt(localStorage.getItem('cartCount')) || 0;
    };

    const cartCount = getCartCount();

    return (
        <div>
            <div id="backtotop" className="navbar1">
                <div className="border1">
                    <Link className="panelname" to="/">
                        <img className="nav1-logo" src={amazon_logo} alt="Amazon Logo" />
                    </Link>
                </div>

                <div className="nav1-address border1">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Update Location</p> 
                </div>

                <div className="nav1-search">
                    <select className="search-select">
                        <option>All categories</option>
                        <option>Alexa Skills</option>
                        <option>Amazon Devices</option>
                        <option>Amazon Fresh</option>
                        <option>Amazon Fashion</option>
                        <option>Amazon Pharmacy</option>
                        <option>Baby</option>
                        <option>Beauty</option>
                        <option>Books</option>
                        <option>Car and Motorbikes</option>
                        <option>Clothing and Accessories</option>
                        <option>Deals</option>
                        <option>Electronics</option>
                        <option>Furniture</option>
                        <option>Gift Cards</option>
                    </select>
                    <input placeholder="Search Amazon" className="search-input" />
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                <button className="signin12" onClick={()=>setShowsign(true)}>
                <div className="nav1-signina border1">
                        <p>Hello, sign in<br/>Accounts & Lists</p>
                    </div>
                </button>
                {showsign && (
                    <div className="fullscreen-overlay" >
                    
                            <Login onClose={()=>setShowsign(false)} />
                       
                    </div>
                )}
                    
                           

                <Link className="agd" to="/">
                    <div className="nav1-re border1">
                        <p className="addd3">Returns<br/>& Orders</p>
                    </div>
                </Link>

                <div className="nav1-cart border1">
                    <div>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="carttxt">
                        Cart<div className="count51">{cartCount}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
