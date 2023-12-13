import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, selectedSlot, appointmentDate }); // ver cómo y cuantas variables se deben pasar
      setName('');
      setPhoneNumber('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Date of Appointment:</label>
          <input type="date" id="appointmentDate" required />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Book time slot:</label>
          <select className="time-slot" value={appointmentTime} onChange={(e) => handleSlotSelection(e.target.value)}>
                <option defaultValue>Select a time slot</option>
                <option value="8:00" name="8">8:00</option>
                <option value="9:00" name="9">9:00</option>
                <option value="10:00" name="10">10:00</option>
                <option value="11:00" name="11">11:00</option>
                <option value="13:00" name="13">13:00</option>
                <option value="14:00" name="14">14:00</option>
        </select>
        </div>
        <button className='book-appointment-btn' type="submit">Book Now</button>
      </form>
    );
  };
export default AppointmentForm;
