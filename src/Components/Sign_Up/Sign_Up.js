import './Sign_Up.css';
import React from "react";

const Sign_Up = () => {

    return (
        <div className="container" style={{marginTop: "5%"}}>
        <div className="signup">
                <h1>Sign Up</h1>
            <div className="signup-text">
                Already a member? <a href="../Login/Login.html">Login</a>
            </div>
            <div className="signup-form">
                <form>
                  <div className="form-group">
                     <label for="role">Role</label>                 
                     {/*<select className="role-list" id="roles"}>   onChange={(event) => setName(event.target.value) */}
                       <option defaultValue>Select role</option>
                       <option value="Patient" name="patient">Patient</option>
                       <option value="Doctor" name="sales">Doctor</option>
                     {/* </select> */}
                     
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
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />

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
    );
};
export default Sign_Up;