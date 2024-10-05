import React, { useState } from 'react';
import './EventPage.css';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {
  const [event, setEvent] = useState({
    name: '',
    startDate: '',
    endDate: '',
    location: '',
    options: {
      tickets: false,
      capacity: 'Unlimited',
      visibility: 'Public',
    },
  });

  const navigate = useNavigate(); // To navigate to the listing page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock API - Save to localStorage
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));

    navigate('/listing'); // Redirect to listing page after creation
  };

  return (
    <>
    <div className="create-event-container">
      <h2>Create Event</h2>
      <form className="create-event-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Event Name</label>
          <input 
            type="text" 
            name="name" 
            value={event.name} 
            onChange={handleInputChange} 
            placeholder="Enter event name" 
            required 
          />
        </div>

        <div className="input-group">
          <label>Start Date</label>
          <input 
            type="datetime-local" 
            name="startDate" 
            value={event.startDate} 
            onChange={handleInputChange} 
            required 
          />
        </div>

        <div className="input-group">
          <label>End Date</label>
          <input 
            type="datetime-local" 
            name="endDate" 
            value={event.endDate} 
            onChange={handleInputChange} 
            required 
          />
        </div>

        <div className="input-group">
          <label>Location</label>
          <input 
            type="text" 
            name="location" 
            value={event.location} 
            onChange={handleInputChange} 
            placeholder="Enter event location" 
            required 
          />
        </div>

        {/* Event Options */}
        <div className="options">
          <div className="option">
            <input 
              type="checkbox" 
              name="tickets" 
              checked={event.options.tickets} 
              onChange={(e) => setEvent({...event, options: {...event.options, tickets: e.target.checked}})} 
            />
            <label>Require Tickets</label>
          </div>

          <div className="option">
            <label>Capacity: </label>
            <select
              name="capacity"
              value={event.options.capacity}
              onChange={(e) => setEvent({...event, options: {...event.options, capacity: e.target.value}})}
            >
              <option value="Unlimited">Unlimited</option>
              <option value="Limited">Limited</option>
            </select>
          </div>

          <div className="option">
            <label>Visibility: </label>
            <select
              name="visibility"
              value={event.options.visibility}
              onChange={(e) => setEvent({...event, options: {...event.options, visibility: e.target.value}})}
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
        </div>

        <button className="create-event-btn" type="submit">
          Create Event
        </button>
      </form>
    </div>
    </>
    
  );
};

export default EventPage;