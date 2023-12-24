import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ProfileCard.css'

const ProfileCard = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => { 
        const storedUserName = sessionStorage.getItem("name");
        if (storedUserName) {
            setUserName(storedUserName);
        }

        const storedEmail = sessionStorage.getItem("email");
        if (storedEmail) {
              setEmail(storedEmail);
          }
        
        const storedPhone = sessionStorage.getItem("phone");
        if (storedPhone) {
            setPhone(storedPhone);
        }
      }, []);

    return (
        <div className="profile-card">
            <h2>Welcome, {username}</h2>
            <p className="profile-card-info">
                <span>Email: </span> {email}
            </p>
            <p className="profile-card-info">
                <span>Phone: </span> {phone}
            </p>
            <Link to="/profile/edit">
                <button className="edit-profile-button">Edit</button>
            </Link>
        </div>
    );
};
export default ProfileCard;