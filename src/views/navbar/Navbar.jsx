import React,{Component} from "react";
import amazon_logo from './images/amazon_logo.png';
import './Navbar.css';

class Navbar extends Component{ // React.Component
    render(){
        return(
           <div>
      <div className="navbar1">
             
      <a href="#" className="navtoggle">
      <i class="fa-solid fa-bars"></i>
            </a>
            <div className="border1">
                <img  className="nav1-logo" src={amazon_logo} />
            </div>
          
            <div className="nav1-address border1">
            <i className="fa-solid fa-location-dot"></i>
             <p>Update Location</p> 
                
            </div>
           
            <div className="nav1-search">
                <select className="search-select">
                    <option>All</option>
                </select>
                <input placeholder="Search Amazon" className="search-input"/>
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            
            <div className="nav1-signina border1">
                <p className="addd3">Hello, sign in<br/>Accounts & Lists</p>
                
            </div>                    
            
            <div className="nav1-signina border1">
                <p className="addd3">Returns<br/>& Orders</p>
                
            </div>
            <div className="nav1-cart border1">
                <div>
                <i className="fa-solid fa-cart-shopping"></i>
                </div>
            <div className="carttxt">  Cart</div>
                
            </div>
        </div>
           </div> 
        );
    }
};

export default Navbar;