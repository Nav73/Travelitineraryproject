import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/scheduler.css";
import Header from "../components/header.jsx";
const Scheduler = () => {
  const [activities, setActivities] = useState([]);
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && activity) {
      setActivities([
        ...activities,
        { id: Date.now(), date, activity },
      ]);
      setDate("");
      setActivity("");
    }
  };

  const removeActivity = (id) => {
    setActivities(activities.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header />

      {/* Scheduler Section */}
      <div className="container">
        <section className="scheduler">
          <h2>Schedule Your Activities</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="activityDate">Select Date:</label>
            <input
              type="date"
              id="activityDate"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <label htmlFor="activityDescription">Activity:</label>
            <input
              type="text"
              id="activityDescription"
              placeholder="Enter Activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              required
            />

            <button type="submit">Add Activity</button>
          </form>

          <div className="activity-list">
            <h3>Scheduled Activities:</h3>
            <ul>
              {activities.map((item) => (
                <li key={item.id}>
                  <span>{item.date}: {item.activity}</span>
                  <button onClick={() => removeActivity(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Scheduler;
