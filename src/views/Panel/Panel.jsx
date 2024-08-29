import React,{Component} from "react";

import './Panel.css';
class Panel extends Component{ // React.Component
    render(){
        return(
           <div>
       <div className="panel">
          <div className="panelbig  border1">
            <div className="panel-all">
                <i className="fa-solid fa-bars"></i>
                All
            </div>
            </div>  
        
               <div className="today1 border1"><p >Today's Deals</p></div> 
               <div  className="cust border1"><p>Customer Service</p></div> 
               <div  className="reg border1"> <p>Registry</p></div> 
               <div  className="gift border1"><p>Gift Cards</p></div> 
               <div  className="sel border1"><p>Sell</p></div> 
               <div  className="amatv border1"><p>Amazon mimiTV</p></div> 
               <div  className="mob border1"><p>mobiles</p></div> 
               <div  className="sel border1"><p>prime</p></div> 
               <div  className="fash border1"><p>Fashion</p></div> 
               <div  className="amapay border1"><p>Amazon Pay</p></div> 
               <div  className="sel border1"><p>Books</p></div> 
           
          
        </div>
           </div> 
        );
    }
};

export default Panel;