import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Details.css";

function Offers(){
    const [cards] = useState([
        {
            title:'Get Flat 12% off with SBI Credit Cards',

            text:'Get 12% instant off upto Rs.1500 on domestic flights.Use code:ISVBIC for regular booking of domestic flights '
        },
        {
            title:'Get Flat 13% off with UPI',

            text:'Get 13% off via UPI payments on domestic flights.'
        },
        {
            title:'Get Flat 10% off with PayPal for international flights',

            text:'There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour'
        },
        {
            title:'Get Flat Rs.800 off on flights with HDFC Credit Cards',

            text:'Get Rs.800 off on domestic flights with HDFC Bank Diners & Infinia Credit Cards.Use code:ISYBC for booking '
        },
        {
            title:'Win Free flight tickets daily',

            text:'Book your flight using code FREEFLIGHT and get a chance to win a free flight ticket worth Rs.6000'
        },
        {
            title:'Get Flat 12% off on domestic flights with ICICI Credit Cards',

            text:'Get 12% off on your domestic flight booking.Use coupon code:ISZBC and pay via ICICI Credit Cards'
        },
    ])
    return (
        
        <div>
        <section>
        <div className="container">
        <h1>Flight Offers</h1>
        <div className="cards">
         {
            cards.map((card,i) => (
         
        <div key={i} className="card">
        
        <h9>{card.title}</h9>
        <p style={{fontSize:'25px', color: 'black',}}>{card.text}</p>
        <NavLink to="/Details" class="nav">
         <h3>Grab Now</h3>
        </NavLink>
        </div>
    ))
            }
           
        </div>
        </div>
        </section>
        </div>
        
    );
};
export default Offers;