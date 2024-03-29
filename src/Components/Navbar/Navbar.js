import './Navbar.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail]=useState("");
    //const [showDropdown, setShowDropdown] = useState(false);
    //const handleClick = () => setClick(!click);
    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("appointmentData");
        setIsLoggedIn(false);
        //setUsername("");
       
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }
   {/* const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    } */}
    useEffect(() => { 
      const storedemail = sessionStorage.getItem("email");
      if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail.split("@")[0]); //corta el email en dos partes separadas por el @
        }
    }, []);

    return (
        <nav>
        <div className="nav__logo">
            <Link to="/">StayHealthy <img src="https://cdn4.iconfinder.com/data/icons/medical-14/512/9-1024.png" height="35" width="35" viewBox="0 0 1000 1000" style={{fill: "#3685fb"}} /><title>Doctor With Stethoscope SVG icon</title></Link>
        </div>
        {/* esto aparece en el código de ejemplo pero no hace nada
        <div className="nav__icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>  */}
        <ul className={click ? 'nav__links active' : 'nav__links'}>
            <li className="link">
                <Link to="/">Home</Link>
            </li>
            <li className="link">
                <Link to="/book-appointment">Appointments</Link>
            </li>
	        <li className="link">
	            <Link to="/health-blog">Health Blog</Link>
            </li>
            <li className="link">
                <Link to="/reviews">Reviews</Link>
            </li>
            {isLoggedIn?(
                <>
                <NavDropdown title={"Welcome, "+ username} id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <Link to="/profile">Your Profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/reports">Your Reports</Link>
                    </NavDropdown.Item>  
                </NavDropdown>
                
    
                    <li className="link">
                        <button className="btn2" onClick={handleLogout}>Logout</button>
                    </li>
                </>
            ) : (
                <>
                    <li className="link">
                        <Link to="/signup">
                            <button className="btn1">Sign Up</button>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to="/login">
                            <button className="btn1">Login</button>
                        </Link>
                    </li>
                </>
            )}
        </ul>
      </nav>
    );
};
export default Navbar;