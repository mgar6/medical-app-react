import React, { useState } from 'react';
import './GiveReviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const GiveReviews = ({onSubmit}) => {
    const [submittedReview, setSubmittedReview] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [reviewerName, setReviewerName]=useState('');
    const [reviewerMessage, setReviewerMessage]=useState('');
    const [reviewerRating, setReviewerRating]=useState(0);


    const handleSubmit = (e) => {
        console.log(reviewerRating);
        e.preventDefault();
        setSubmittedReview(true);
        onSubmit(reviewerMessage);
        if (reviewerName && reviewerMessage !== '') { //  && reviewerRating
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
                    <input type="text" id="name" name="name" value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} required/>
                </div>
                <div className="review-input">
                    <label htmlFor="review">Review:</label>
                    <textarea id="review" name="review" value={reviewerMessage} onChange={(e) => setReviewerMessage(e.target.value)} required/>
                </div>
                <div className="review-input">
                    <label htmlFor="rating">Rating:</label>
                    <FontAwesomeIcon icon={faStar} id="rating" name="rating" onMouseEnter={changeColor} onMouseOut={returnDefaultColor} /> {/* onChange={(e) => setReviewerRating(e.target.value)}      onChange={setReviewerRating(1)}  */}
                    <FontAwesomeIcon icon={faStar} id="rating" name="rating" onMouseEnter={changeColor} onMouseOut={returnDefaultColor} />
                    <FontAwesomeIcon icon={faStar} id="rating" name="rating" onMouseEnter={changeColor} onMouseOut={returnDefaultColor} />
                    <FontAwesomeIcon icon={faStar} id="rating" name="rating" onMouseEnter={changeColor} onMouseOut={returnDefaultColor} />
                    <FontAwesomeIcon icon={faStar} id="rating" name="rating" onMouseEnter={changeColor} onMouseOut={returnDefaultColor} />
                </div>
                <button type="submit" className="review-submit-button">Submit</button>
            </form>
            {submittedReview && (
                <div>
                    <h3>Submitted Message:</h3>
                    <p>{reviewerMessage}</p>
                </div>
            )}
        </div>
    );
}
export default GiveReviews;
