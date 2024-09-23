import React from 'react';
import './Bestsellist.css';


const Cartfunction = ({ onAddToCart, onRemoveFromCart}) => {
    const handleClick = () => {
        alert('Item added to cart!'); 
        onAddToCart(); 
    };
    const handleRemoveClick = () => {
        alert('Item removed from cart!'); 
        onRemoveFromCart();
    };

    return (
        <div>
            <button className="btnadc5" onClick={handleClick}>
                Add to cart
            </button>
            <button className="btnrem5" onClick={handleRemoveClick}>
            <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    );
};

const Bestsellist = ({ prodlist, onAddToCart, onRemoveFromCart }) => { 
    const renderList = () => { 
        if (prodlist) {                     
            return prodlist.map((data) => (   
                <div key={data.id}>
                    <div className="cardbox123">
                    <div className="no"> {data.no}</div>
                        <div className="cardboximg123">
                            <img className="imgsize123" src={data.img} alt={data.heading} />
                        </div>
                     
                        <div className="cardboxdescript123">{data.description}</div>
                        <div className="price">Rs.{data.price}</div>
                        <Cartfunction onAddToCart={onAddToCart}
                        onRemoveFromCart={ onRemoveFromCart}  /> 
                    </div>
                </div>
            ));
        } 
    };

    return (
        <div className="shopbox123">
            {renderList()}
        </div>
    );
};

export default Bestsellist;
