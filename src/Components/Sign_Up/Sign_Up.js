import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    };
    return (
        <div className="hero-section">
            <div className="container" style={{marginTop: "5%"}}>
                <div className="signup">
                    <h1>Sign Up</h1>
                    <div className="signup-text">
                        Already a member? <Link to="/login">Login</Link>
                    </div>
                    <div className="signup-form">
                        <form method="POST" onSubmit={register}>
                            <div className="form-group">
                                <label for="role">Role</label>                 
                                <select className="role-list" id="roles"> {/* tuve que quitar esto respecto al html onChange={(event) => setName(event.target.value) */}
                                    <option defaultValue>Select role</option>
                                    <option value="Patient" name="patient">Patient</option>
                                    <option value="Doctor" name="sales">Doctor</option>
                                </select> 
                            </div>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                                {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                                <i className="fa fa-eye password-icon" aria-hidden="true"></i>
                            </div>
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sign_Up;