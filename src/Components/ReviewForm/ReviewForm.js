import React, { useState, useEffect} from 'react';
import './ReviewForm.css';
import GiveReviews from './GiveReviews/GiveReviews';

const ReviewForm = () => {
    const [doctors, setDoctors] = useState([]);
    
    const getDoctorsNames = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
            //console.log("Doctor names: " + JSON.stringify(data));
            console.log("Doctor names: " + data.map(doctor => doctor.name));
        })
    }
    useEffect(() => {
        getDoctorsNames();
    }, [])

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

                </tbody>
            </table>
        </div>

    )
}
export default ReviewForm;