import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import GiveReviews from './GiveReviews/GiveReviews';

const ReviewFormRow = ({name, speciality}) => {
    const [showModal, setShowModal] = useState(false);
    const [reviewMessage, setReviewMessage] = useState('');
    let count = 0;

    const handleReviewMessage = (message) => {
        // console.log("Review message: " + message);
        setReviewMessage(message);
        localStorage.setItem('reviewFormData_message', JSON.stringify(message));        
    };

    return (
        <tr className="table-row">
            <td>{count=count+1}</td> {/* setCounter(counter+1)*/}
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <Popup
                    style={{ backgroundColor: '#FFFFFF' }}
                    trigger={
                        <button className={`review-button${reviewMessage !== '' ? '-disabled' : ''}`} disabled={reviewMessage && true}>Give Review</button>
                    }
                    modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                >
                    {(close) => (
                        <div className="review-popup">
                            <GiveReviews onSubmit={handleReviewMessage}/>
                            <button className="close-review-button" onClick={close}>Close</button>
                        </div>   
                    )}
                </Popup>
            </td>
            <td>
                <p>{reviewMessage}</p>
            </td>
        </tr>
    )
}
export default ReviewFormRow;