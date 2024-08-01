import React from "react";
import Header from "./Header";
import Destination from "./Destinations";
import Gallery from "./Gallery";
import Footer from "./Footer";
import "../css/Home.css";



function Home() {

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="">
        <Destination/><br/>
      </div>
      <Gallery/>
      <Footer/>
      
      
    </div>
   );
}

export default Home;
