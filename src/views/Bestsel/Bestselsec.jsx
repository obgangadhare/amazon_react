import React, { Component } from 'react';
import JSON from './Bestsel.json';
import Bestsellist from './Bestsellist';
import './Bestselsec.css';
import Navbar from '../navbar/Navbar';
import Panel from '../Panel/Panel';
import Footer1 from '../Footer1/Footer1';


class Bestselsec extends Component {
    constructor() {
        super();
        this.state = { 
            products: JSON,
           
        };
    }

    handleAddToCart = () => {
       
        const currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
        localStorage.setItem('cartCount', currentCount + 1);
      
        this.forceUpdate(); 
    };
    handleRemoveFromCart = () => {
        const currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
        if (currentCount > 0) {
            localStorage.setItem('cartCount', currentCount - 1);
            this.forceUpdate();
        }
    };
    render() {
        return (
            <div className='clothessec5'>
                <Navbar/>
                <Panel/>
                
                
                <Bestsellist
                    prodlist={this.state.products} 
                    onAddToCart={this.handleAddToCart}
                    onRemoveFromCart={this.handleRemoveFromCart}  
                />
                
                <Footer1/>
            </div>
        );
    }
}

export default Bestselsec;
