import React from "react";
import Footer from "./views/Footer/Footer";
import Herosection from "./views/Herosection/Herosection";
import Navbar from "./views/navbar/Navbar";
import Panel from "./views/Panel/Panel";
import Shopsection from "./views/Shopsection/Shopsection";



function App() {


  
  
  return (
    <div>
     <Navbar  />
     <Panel/> 
     <Herosection/>
     <Shopsection/>
     <Footer/>
   
    </div>
  );
}

export default App;
