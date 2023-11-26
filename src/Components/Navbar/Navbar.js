import './Navbar.css';
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
        <div className="nav__logo">
          <a href="/">StayHealthy <img src="https://cdn4.iconfinder.com/data/icons/medical-14/512/9-1024.png" height="35" width="35" viewBox="0 0 1000 1000" /><title>Doctor With Stethoscope SVG icon</title></a>
          {/* tenía style="fill:#3685fb" pero sale el error: the `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX. */} 
        </div>
        <ul className="nav__links active">
          <li className="link">
            <a href="/">Home</a>
          </li>
          <li className="link">
            <a href="#">Appointments</a>
          </li>
	  <li className="link">
	    <a href="#">Health Blog</a>
          </li>
          <li className="link">
            <a href="#">Reviews</a>
          </li>
              <li className="link">
                <a href="/signup">
                  <button className="btn1">Sign Up</button>
                </a>
              </li>
              <li className="link">
                <a href="/login">
                  <button className="btn1">Login</button>
                </a>
              </li>
        </ul>
      </nav>
    );
};
export default Navbar;