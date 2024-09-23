import React from 'react';
import './Todaysprodlist.css';



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

const Todaysprodlist = ({ prodlist, onAddToCart }) => { 
    const renderList = () => { 
        if (prodlist) {                     
            return prodlist.map((data) => (   
                <div key={data.id}>
                    <div className="cardbox12">
                        <div className="cardboximg12">
                            <img className="imgsize12" src={data.img} alt={data.heading} />
                        </div>
                        <div className="offdisc5"> {data.off}% off<span className='lim'>Limited time deal</span></div>
                        
                        <div className="cardboxdescript12">{data.description}</div>
                        <p className="colorspattern">+1 colors/patterns</p>
                        <Cartfunction onAddToCart={onAddToCart} /> 
                    </div>
                </div>
            ));
        } 
    };

    return (
        <div className="shopbox12">
            {renderList()}
        </div>
    );
};

export default Todaysprodlist;
