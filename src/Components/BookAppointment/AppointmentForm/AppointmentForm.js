import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [patientName, setPatientName] = useState('');
    const [patientPhoneNumber, setPatientPhoneNumber] = useState('');
    const [appointmentTime, setAppointmentTime] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState('');
  
    const handleSlotSelection = (slot) => {
      setAppointmentTime(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ patientName, patientPhoneNumber, appointmentTime, appointmentDate, doctorName, doctorSpeciality });
      setPatientName('');
      setPatientPhoneNumber('');
      setAppointmentDate('');
      setAppointmentTime([]);
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={patientPhoneNumber} onChange={(e) => setPatientPhoneNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Date of Appointment:</label>
          <input type="date" id="appointmentDate" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Book time slot:</label>
          <select className="time-slot" value={appointmentTime} onChange={(e) => handleSlotSelection(e.target.value)} required >
                <option defaultValue>Select a time slot</option>
                <option value="8:00 AM" name="8">8:00 AM</option>
                <option value="9:00 AM" name="9">9:00 AM</option>
                <option value="10:00 AM" name="10">10:00 AM</option>
                <option value="11:00 AM" name="11">11:00 AM</option>
                <option value="12:00 PM" name="12">12:00PM</option>
                <option value="1:00 PM" name="13">1:00 PM</option>
                <option value="2:00 PM" name="14">2:00 PM</option>
        </select>
        </div>
        <button className='book-appointment-btn' type="submit">Book Now</button>
      </form>
    );
  };
export default AppointmentForm;
