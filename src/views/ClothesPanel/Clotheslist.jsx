import React from 'react';
import './clotheslist.css';
import { Link } from 'react-router-dom';


const Cartfunction = ({ onAddToCart }) => {
    const handleClick = () => {
        alert('Item added to cart!'); 
        onAddToCart(); 
    };

    return (
        <div>
            <button className="btnadc5" onClick={handleClick}>
                Add to cart
            </button>
        </div>
    );
};

const Clotheslist = ({ prodlist, onAddToCart }) => { 
    const renderList = () => { 
        if (prodlist) {                     
            return prodlist.map((data) => (   
                <div key={data.id}>
                    <div className="cardbox1234">
                    
                     <div className="cardboximg1234">
                            <img className="imgsize1234" src={data.img} alt={data.heading} />
                        </div>
                        
                        <div className='head1234'>{data.heading}</div>
                     
                        <div className="cardboxdescript1234">{data.description}</div>
                        <div className="price1234"><span className='pricep'>Rs</span>{data.price}<span className='pricep1'>M.R.P: Rs.2099</span></div>
                        <Cartfunction onAddToCart={onAddToCart} /> 
                    </div>
                </div>
            ));
        } 
    };

    return (
        <div className="shopbox1234">
            {renderList()}
        </div>
    );
};

export default Clotheslist;
