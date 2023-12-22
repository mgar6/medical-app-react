import React, { useState, useEffect} from 'react';
import './ReviewForm.css';
import Popup from 'reactjs-popup';
import GiveReviews from './GiveReviews/GiveReviews';


const ReviewForm = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [reviewMessage, setReviewMessage] = useState('');
    let count = 0;
    
    const getDoctorsNames = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            setAllDoctors(data);
            //console.log("Doctor names: " + data.map(doctor => doctor.name));
        })
        .catch(err => console.log(err));
    }
    useEffect(() => {
        getDoctorsNames();
    }, [])

    const handleReviewMessage = (message) => {
        console.log("Review message: " + message);
        setReviewMessage(message);        
    };

    return (
        <div className="reviews">
            <h2>Reviews</h2>
            <table className="reviews-table">
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>Provide Feedback</th>
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {allDoctors.map( doctor => (
                        
                        <tr className="table-row">
                            <td>{count = count+1}</td> {/* setCounter(counter+1)*/}
                            <td>{doctor.name}</td>
                            <td>{doctor.speciality}</td>
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
                    ))}
                </tbody>
            </table>
        </div>

    )
}
export default ReviewForm;