import React, { useEffect, useState } from "react";
import { API_URL } from "../../../config";
import { useNavigate } from "react-router-dom";
import './ProfileForm.css'

const ProfileForm = () => {
    const [userDetails, setUserDetails] = useState({});
    const [updatedDetails, setUpdatedDetails] = useState({});
    const [editMode, setEditMode] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
            navigate("/login");
        } else {
            fetchUserProfile();
        }
    }, [navigate]);

    const fetchUserProfile = async () => {
        try {
        const authtoken = sessionStorage.getItem("auth-token");
        const email = sessionStorage.getItem("email"); // Get the email from session storage

            if (!authtoken) {
                navigate("/login");
            } else {
                const response = await fetch(`${API_URL}/api/auth/user`, {
                headers: {
                    "Authorization": `Bearer ${authtoken}`,
                    "Email": email, // Add the email to the headers
                },
            });

            if (response.ok) {
                const user = await response.json();
                setUserDetails(user);
                setUpdatedDetails(user);
            } else {
            // Handle error case
                throw new Error("Failed to fetch user profile");
            }
        }
        } catch (error) {
        console.error(error);
        // Handle error case
        }
    };
    const handleEdit = () => {
        setEditMode(true);
      };

    const handleInputChange = (e) => {
        setUpdatedDetails({
            ...updatedDetails,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const authtoken = sessionStorage.getItem("auth-token");
            const email = sessionStorage.getItem("email"); // Get the email from session storage

            if (!authtoken || !email) {
                navigate("/login");
                return;
            }

            const payload = { ...updatedDetails };
            const response = await fetch(`${API_URL}/api/auth/user`, {
            method: "PUT",
             headers: {
                "Authorization": `Bearer ${authtoken}`,
                "Content-Type": "application/json",
                "Email": email,
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            // Update the user details in session storage
            sessionStorage.setItem("name", updatedDetails.name);
            sessionStorage.setItem("phone", updatedDetails.phone);

            setUserDetails(updatedDetails);
            setEditMode(false);
            // Display success message to the user
            alert(`Profile Updated Successfully!`);
            navigate("/");
        } else {
            // Handle error case
            throw new Error("Failed to update profile");
        }
    } catch (error) {
        console.error(error);
        // Handle error case
    }
    };

    return (
        <div className="profile-edit-container">
            {editMode ? (
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={userDetails.email} disabled/>
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your name" value={updatedDetails.name}  onChange={handleInputChange} /> {/* onChange={(e) => handleInputChange(e.target.value)}} */}
                <label>Phone number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" value={updatedDetails.phone} onChange={handleInputChange} /> {/* onChange={(e) => handleInputChange(e.target.value)} */}
        
                <button type="submit" className="edit-profile-button">Save</button>
            </form>
            ) : (
                <div className="profile-details">
                    <h1>Welcome, {userDetails.name}</h1>
                    <p className="profile-card-info">
                        <span>Email: </span> {userDetails.email}
                    </p>
                    <p className="profile-card-info">
                        <span>Phone: </span> {userDetails.phone}
                    </p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}    
        </div>
    );
};

export default ProfileForm;