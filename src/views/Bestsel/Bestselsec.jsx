import React, { Component } from 'react';
import JSON from './Bestsel.json';
import Bestsellist from './Bestsellist';
import './Bestselsec.css';
import Navbar from  '../navbar/Navbar';
import Panel from '../Panel/Panel';
import Footer1 from '../Footer1/Footer1';


class Bestselsec extends Component {
    constructor() {
        super();
        const currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
        this.state = { 
            products: JSON,
            cartCount: currentCount
           
        };
    }

    handleAddToCart = () => {
       
        const newCount = this.state.cartCount + 1;
        localStorage.setItem('cartCount', newCount);
        this.setState({ cartCount: newCount })
    };
    handleRemoveFromCart = () => {
        const newCount = this.state.cartCount - 1;
        localStorage.setItem('cartCount', newCount);
        this.setState({ cartCount: newCount })
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
