import React, { useState } from 'react';
import Header from '../components/header';
import '../css/itinerary.css';


const Itinerary = () => {
  const [days, setDays] = useState([]);
  const [dayTitle, setDayTitle] = useState('');
  const [dayDetails, setDayDetails] = useState('');

  // Handle form submission
  const handleAddDay = (e) => {
    e.preventDefault();

    if (dayTitle.trim() && dayDetails.trim()) {
      setDays((prevDays) => [
        ...prevDays,
        { title: dayTitle, details: dayDetails },
      ]);
      setDayTitle('');
      setDayDetails('');
    }
  };

  // Handle deleting an itinerary day
  const handleDeleteDay = (index) => {
    setDays((prevDays) => prevDays.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <Header />

      <section className="itinerary">
        <h2>Your Planned Itinerary</h2>

        {/* Form to Add Itinerary Day */}
        <div className="itinerary-form">
          <form onSubmit={handleAddDay}>
            <input
              type="text"
              placeholder="Day Title (e.g., Day 1: Arrival)"
              value={dayTitle}
              onChange={(e) => setDayTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Enter activities, timings, or notes for this day"
              value={dayDetails}
              onChange={(e) => setDayDetails(e.target.value)}
              required
            ></textarea>
            <button type="submit">Add to Itinerary</button>
          </form>
        </div>

    
        <div id="itinerary-list">
          <h3>Planned Days</h3>
          <ul>
            {days.map((day, index) => (
              <li key={index}>
                <h4>{day.title}</h4>
                <p>{day.details}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteDay(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Itinerary;
