import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import EventsIndex from './components/EventsIndex';
import EventShow from './components/EventShow';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsIndex />} />
        <Route path="/events/:eventId" element={<EventShow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
