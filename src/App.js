import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import EventsIndex from './components/EventsIndex';
import EventShow from './components/EventShow';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<EventsIndex />} />
        <Route path='/events/:eventId' element={<EventShow />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
