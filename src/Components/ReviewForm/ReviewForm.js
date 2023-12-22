import React, { useState, useEffect} from 'react';
import './ReviewForm.css';
import ReviewFormRow from './ReviewFormRow/ReviewFormRow';


const ReviewForm = () => {
    const [allDoctors, setAllDoctors] = useState([]);

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
                    {allDoctors.map( doctor => <ReviewFormRow {...doctor} key={doctor.name} />)} 
                </tbody>
            </table>
        </div>

    )
}
export default ReviewForm;