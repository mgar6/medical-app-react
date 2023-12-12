import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import BookAppointment from './Components/BookAppointment/BookAppointment';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import Services from './Components/Services/Services';
import Notification from './Components/Notification/Notification';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Notification>
              <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/book-appointment" element={<BookAppointment/>} />
                <Route path='/login' element={<Login/>}/> 
                <Route path='/signup' element={<Sign_Up/>}/>
                <Route path='/services' element={<Services/>}/>
              </Routes>
              </Notification>
        </BrowserRouter>
       
    </div>
  );
}

export default App;