import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import ClothesSec from './views/ClothesPanel/ClothesSec';
import Todaysdealsec from './views/Todaysdeals/Todaysdealsec';
import Bestselsec from './views/Bestsel/Bestselsec';
import ScrollToTop from './views/ScrollToTop/ScrollToTop';
import Signup from './Signup/Signup';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <ScrollToTop/>
  <div >
   <Routes>
    <Route path="/" element={<App />} />
        <Route path="/ClothesSec" element={<ClothesSec/>}/>
        <Route path="/Todaysdealsec" element={<Todaysdealsec/>}/>
        <Route path="/Bestselsec" element={<Bestselsec/>}/>
    
        <Route path="/Signup" element={<Signup/>}/>
      
       
        
     </Routes>
  </div>
  </Router>
);


