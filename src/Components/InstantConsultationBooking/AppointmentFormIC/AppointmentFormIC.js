import React, { useState } from 'react'

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Date of Appointment:</label>
          <input
            type="date"
            id="appointmentDate"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Book time slot:</label>
          <select className="time-slot" value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}>
                <option defaultValue>Select a time slot</option>
                <option value="morning" name="morning">Morning</option>
                <option value="afternoon" name="afternoon">Afternoon</option>
        </select>
        </div>
        <button className='book-appointment-btn' type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
