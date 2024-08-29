import React,{Component} from 'react';

import JSON from './db.json'; 
import ProductList from './ProductList';
import './Shopsection.css';


class Clothesproduct extends Component{
    constructor(){
        super();
        this.state = { 
           
            products: JSON
        }
    }
    render(){
        return(
            <div className='shopsec'>
                
              <ProductList prodlist={this.state.products}/>
            </div>
        )
    }
    
}
export default Clothesproduct;