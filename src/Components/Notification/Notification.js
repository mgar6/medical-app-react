import './Notification.css';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }

  }, []);

  return (
    <div>
        <Navbar ></Navbar>
        {children}
        {  isLoggedIn && appointmentData && ( 
            <>
                <div className="appointment-card">
                    <div className="appointment-card__content">
                        <h3 className="appointment-card__title">Appointment Details</h3>
                        <p className="appointment-card__message">
                            <span>Doctor:</span> {appointmentData?.doctorName}
                        </p>
                        <p className="appointment-card__message">
                            <span>Speciality:</span>  {appointmentData?.doctorSpeciality}
                        </p>
                        <p className="appointment-card__message">
                            <span>Name:</span>  {appointmentData?.patientName}
                        </p>
                        <p className="appointment-card__message">
                            <span>Phone Number:</span>  {appointmentData?.patientPhoneNumber}
                        </p>
                        <p className="appointment-card__message">
                            <span>Date:</span>  {appointmentData?.appointmentDate}
                        </p>
                        <p className="appointment-card__message">
                            <span>Time:</span>  {appointmentData?.appointmentTime}
                        </p>
    {/* 
              {appointmentData.map((appointment) => (
                <>
                    <p className="appointment-card__message" key={appointment.id}>
                        <strong>Name:</strong> {appointment.name}
                    </p>
                    <p className="appointment-card__message">
                        <strong>Phone Number:</strong> {appointment.phoneNumber}
                    </p>
                    <p className="appointment-card__message">
                        <strong>Date:</strong> {appointment.appointmentDate}
                    </p>
                    <p className="appointment-card__message">
                        <strong>Time:</strong> {appointment.appointmentTime}
                    </p>
                </>
                  ))}
    */}
                    </div>
                </div>
            </>  
        )}
    </div>
  );
};
export default Notification;