import './Login.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
      if (sessionStorage.getItem("auth-token")) {
        navigate("/")
      }
    }, []);
    const login = async (e) => {  // a function named login has been created that handles the form submission and API call from the server side. This will establish the database connection.
      e.preventDefault();
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // name: name,
          email:email,
          password: password,
        }),
      });
      const json = await res.json();
      if (json.authtoken) {
        sessionStorage.setItem('auth-token', json.authtoken);
    
        sessionStorage.setItem('email', email);
        navigate('/'); // the navigate variable has been used to navigate to the Home page after the sign up is successful. 
        window.location.reload()
      } else {
        if (json.errors) {
          for (const error of json.errors) {
            alert(error.msg);
          }
        } else {
          alert(json.error);
        }
      }
    };
    return (
        <div className= "hero-section">
            <div className="container">
                <div className="login-grid">
                    <h2>Login</h2>
                    <div className="login-text">
                        Are you a new member? <span><Link to="/signup" style={{color: "#2190FF"}}> Sign Up Here</Link></span>
                    </div>
                    <br/>
                    <div className="login-form">
                        <form onSubmit={login}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />             
                            </div>
                            <div className="form-group">
                            <label htmlFor="password">Password</label>
               <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                                <i className="fa fa-eye password-icon" aria-hidden="true"></i>
                            </div>
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                            </div>
                            <br />
                            <div className="login-text">
                                Forgot Password?
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;