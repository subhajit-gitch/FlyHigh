import React from "react";
import Footer from './Footer';
import '../css/About.css';

function About(){
    return(
        <div>
            <h1>About Us</h1><br/>
            <div className="details">
            MCA Minor Project<br/>
            TECHNO COLLEGE HOOGHLY  (TIH)<br/>
            SUBHAJIT NASKAR - 18871021057<br/>
            ISHITA NASKAR - 18871201054<br/>
            PARTHANA GHOSH - 18871201049<br/>
            UNNATI SAHA - 18871021060
            </div>
            <div>
                <Footer/>
                
            </div>
        </div>
    );
};
export default About;