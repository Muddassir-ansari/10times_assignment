import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import EventPage from './component/event/EventPage';
import ListingPage from './component/listing/ListingPage';

const App = () => {
  return (
    <Routes>
        <Route path="/" exact element={<EventPage/>} />
        <Route path="/listing" element={<ListingPage/>} />
    </Routes>
  );
};

export default App;