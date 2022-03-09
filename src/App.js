import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import EventsIndex from './components/EventsIndex';

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<EventsIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
