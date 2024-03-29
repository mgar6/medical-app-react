import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm'
import { v4 as uuidv4 } from 'uuid';


const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);
  //console.log("0 Appointments length: " + appointments.length);

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  const handleFormSubmit = (appointmentData) => {
    
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData,
    };
    localStorage.setItem('appointmentData', JSON.stringify(appointmentData)); // envia el nombre del doctor, especialidad del doctor, nombre del paciente, telefono del paciente, fecha y hora de la cita
    const updatedAppointments = [...appointments, newAppointment]; // revisar si mejor se envia esto al local storage
    //console.log("1 Appointments length: " + appointments.length);
    setAppointments(updatedAppointments);
    //console.log("2 Appointments length: " + appointments.length);
    setShowModal(false);
    window.location.reload();
  };

  return (
    <div className="doctor-card-container">
        <div className="doctor-card-details-container">
            <div className="doctor-card-profile-image-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>
            </div>
            <div className="doctor-card-details">
                <div className="doctor-card-detail-name">{name}</div>
                <div className="doctor-card-detail-speciality">{speciality}</div>
                <div className="doctor-card-detail-experience">{experience} years experience</div>
                <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
            </div>
        </div>
        <div className="doctor-card-options-container">
            <Popup
                style={{ backgroundColor: '#FFFFFF' }}
                trigger={
                    <button className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment-btn' : ''}`}>
                        {appointments.length > 0 ? (
                            <div>Cancel Appointment</div>
                        ) : (
                            <div>Book Appointment</div>
                        )}
                        <div>No Booking Fee</div>
                    </button>
                }
                modal
                open={showModal}
                onClose={() => setShowModal(false)}
            >
            {(close) => (
                <div className="doctorbg" style={{ height: '100vh', overflow: 'scroll' }}>
                    <div>
                        <div className="doctor-card-profile-image-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>
                        </div>
                        <div className="doctor-card-details">
                            <div className="doctor-card-detail-name">{name}</div>
                            <div className="doctor-card-detail-speciality">{speciality}</div>
                            <div className="doctor-card-detail-experience">{experience} years experience</div>
                            <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                        </div>
                    </div>
                    <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
                </div>
            )}
        </Popup> 
      </div>
    </div>
  );
};

export default DoctorCard;