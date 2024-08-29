import React from "react";
import './ProductList.css';


const ProductList = (prodlist) =>{     
    const renderList = ({prodlist}) => { 
        if(prodlist){                     
            return prodlist.map((data)=>{ 
                return(   
                   
                      <div key={data.id} >
                        <div className="cardbox">
                        <span className="cardboxhead">{data.heading}</span>
                            <div className="cardboximg">
                                <img className="imgsize" src={data.img} alt={data.heading}/>
                            </div>
                          <p className="seemore" ><a  href="#" target="_blank" >See more</a></p>
                            </div>
                         </div>
                        
                               )
            })
        }
    }
    return(
      
            <div className="shopbox">
                {renderList(prodlist)}
            </div>
       
    )
}
export default ProductList;