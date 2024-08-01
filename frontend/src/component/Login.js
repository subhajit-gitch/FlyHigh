import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';
import '../css/Login.css';
import Footer from './Footer';

const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({});
    useEffect(() => {
        setLogin({
            email:"",
            password:"",
        })
      },[]);

      const handleChange = e => {
        const { name, value } = e.target;
        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    // emailhandler =(event) =>{
    //     setLogin()
    // }
    // passwordhandler =(event) =>{
    //     this.setState({
    //         password: event.target.value
    //     })
    // }
    // handlesubmit =(event) =>{
    //     console.log(this.state);
    //     this.setState({
    //         email:"",
    //         password:"",
    //     })
    //     event.preventDefault()
    // }

    const loginUser =(event) =>{
        fetch('http://localhost:8080/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(login)
        }).then(async data => {
            const response = await data.json();
            if (response.status == 200) {
                localStorage.setItem('email', login.email)
                navigate('/');
            }
            if (response.status > 200) {
                document.querySelector('.response-message').innerText = response.message;
            setTimeout(()=> {
                document.querySelector('.response-message').innerText = '';
            }, 2000)
            }
        })
        setLogin({
            email:"",
            password:"",
        })
    }    
        return(
            <div>
                <div className="response-message"></div>
                <h1>Login</h1>
                <input type="email" name="email"  value={login.email} onChange={handleChange} placeholder="Email"/><br/><br/>
                <input type="password" name="password"  value={login.password} onChange={handleChange} placeholder="Password"/><br/><br/>
                <button onClick={() => loginUser()}>LOG IN</button>
                <NavLink to="/Register" class="nav">
                    <p2 style={{fontSize:'25px', color: 'white',}}>Don't have Fly High id? </p2> <h3>Register</h3>
                </NavLink>
                <Footer/>
            </div>
        );
} 

export default Login;