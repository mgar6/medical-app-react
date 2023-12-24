import React, { useState, useEffect} from 'react';
import './ReportsLayout.css'
import ReportsLayoutRow from './ReportsLayoutRow/ReportsLayoutRow'

const ReportsLayout = () => {
    const [allDoctors, setAllDoctors] = useState([]);

    const getDoctorsNames = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            setAllDoctors(data);
        })
        .catch(err => console.log(err));
    }
    useEffect(() => {
        getDoctorsNames();
    }, [])

    return (
        <div className="reports">
            <h2>Reports</h2>
            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>View Report</th>
                        <th>Download Report</th>
                    </tr>
                </thead>
                <tbody>
                    {allDoctors.map( doctor => <ReportsLayoutRow {...doctor} key={doctor.name} />)} 
                </tbody>
            </table>
        </div>
    )
}
export default ReportsLayout;