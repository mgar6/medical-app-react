import React, { useState } from 'react';
import './GiveReviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function GiveReviews ({onSubmit}) {
    const [showForm, setShowForm] = useState(false);
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0
    });

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    //const handleRating = (e) => {
    //    setFormData(e.target.value);
    //    console.log("rating: " + formData.rating);
   // }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedMessage(formData);
        onSubmit (submittedMessage);
        setFormData('');
        if (formData.name && formData.review && formData.rating > 0) {
            setShowWarning(false);
        } else {
            setShowWarning(true);
        }
    };

    function changeColor (e) {
        e.target.style.color = "#eeff00";
    };

    function returnDefaultColor (e) {
        e.target.style.color = "";
    }

    return (
        <div className="review-form">
            <form onSubmit={handleSubmit}>
                <h2>Give Your Feedback</h2>
                {showWarning && <p className="warning">Please fill out all fields.</p>}
                <div className="review-input">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="review-input">
                    <label htmlFor="review">Review:</label>
                    <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                </div>
                <div className="review-input">
                    <label htmlFor="rating">Rating:</label>
                {/*}    <FontAwesomeIcon icon={faStar} id="rating" name="rating" value={formData.rating=1} onMouseEnter={changeColor} onMouseOut={returnDefaultColor} onChange={handleChange}/>
                    <FontAwesomeIcon icon={faStar} id="rating" name="rating" value={formData.rating=2} onMouseEnter={changeColor} onMouseOut={returnDefaultColor} onChange={handleChange}/>
                    <FontAwesomeIcon icon={faStar} id="rating" name="rating" value={formData.rating=3} onMouseEnter={changeColor} onMouseOut={returnDefaultColor} onChange={handleChange}/>
                    <FontAwesomeIcon icon={faStar} id="rating" name="rating" value={formData.rating=4} onMouseEnter={changeColor} onMouseOut={returnDefaultColor} onChange={handleChange}/>
                    <FontAwesomeIcon icon={faStar} id="rating" name="rating" value={formData.rating=5} onMouseEnter={changeColor} onMouseOut={returnDefaultColor} onChange={handleChange}/>
    */} </div>
                <button type="submit" className="review-submit-button">Submit</button>
            </form>
            {submittedMessage && (
                <div>
                    <h3>Submitted Message:</h3>
                    <p>{submittedMessage}</p>
                </div>
            )}
        </div>
    );
}
export default GiveReviews;
