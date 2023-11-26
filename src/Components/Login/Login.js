import './Login.css';
import React from "react";

const Login = () => {

    return (
        <div className="container">
        <div className="login-grid">
            <h2>Login</h2>
          <div className="login-text">
            Are you a new member? <span><a href="/signup" style={{color: "#2190FF"}}> Sign Up Here</a></span>
          </div>
          <br />
          <div className="login-form">
            <form>
              <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />             
              </div>
              <div className="form-group">
                       <label for="password">Password</label>     
                       <input type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
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
    );
};
export default Login;