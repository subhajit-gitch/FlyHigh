import React, {useState} from "react";
import {Navigate, useNavigate} from 'react-router-dom';
import '../css/Register.css';


function Register(_props) {
    const navigate=useNavigate();

    const registerUser = () => {
        const fullName = document.querySelector('#fullName').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
    
        fetch('http://localhost:8080/register', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                fullName,
                email,
                password
            })
        }).then(data => {
            document.querySelector('.response-message').innerText = 'Successfully registered';
            setTimeout(()=> {
                document.querySelector('.response-message').innerText = '';
                navigate('/login');
            }, 2000)
        })
    }

    return(
      <div className="form">
      <h1>REGISTER</h1>
        <div className="response-message"></div>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="fullName">Full Name </label>
                  <input className="form__input" type="text" id="fullName" placeholder="Full Name"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn" onClick={registerUser}><h3>Register</h3></button>
          </div>
          <br></br>
          <div class="footer">
          <button type="submit" class="btn" onClick={() => navigate('/login')}><h3>Goto login</h3></button>
      </div>

      </div>      
    ) ;      
};
export default Register;
