import React, { useEffect, useState } from 'react';
import './ListingPage.css';

const ListingPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div className="listing-page">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.name}</h3>
              <p>Start: {new Date(event.startDate).toLocaleString()}</p>
              <p>End: {new Date(event.endDate).toLocaleString()}</p>
              <p>Location: {event.location}</p>
            </div>
          ))
        ) : (
          <p>No events created yet.</p>
        )}
      </div>
    </div>
  );
};

export default ListingPage;