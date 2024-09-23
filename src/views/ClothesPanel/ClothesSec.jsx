import React, { Component } from 'react';
import JSON from './cllothesdb.json';
import Clotheslist from './Clotheslist';
import './ClothesSec.css';
import Navbar from '../navbar/Navbar';
import Panel from '../Panel/Panel';
import Footer1 from '../Footer1/Footer1';

   

class Clothessec extends Component {
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
    
    render() {
        return (
            <div className='clothessec'>
                <Navbar/>
                <Panel/>
                
               
                <Clotheslist
                    prodlist={this.state.products} 
                    onAddToCart={this.handleAddToCart} 
                />
                
                <Footer1/>
            </div>
        );
    }
}

export default Clothessec;
