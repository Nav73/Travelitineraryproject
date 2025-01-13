import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/scheduler.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

const Scheduler = () => {
  const [activities, setActivities] = useState([]);
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");

  // Fetch activities from the backend
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/activities`);
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  // Add activity
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !activity) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/activities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, activity }),
      });

      if (response.ok) {
        const newActivity = await response.json();
        setActivities([...activities, newActivity]);
        setDate("");
        setActivity("");
      } else {
        alert("Error adding activity.");
      }
    } catch (error) {
      console.error("Error adding activity:", error);
    }
  };

  // Remove activity
  const removeActivity = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/activities/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setActivities(activities.filter((item) => item._id !== id));
      } else {
        alert("Error deleting activity.");
      }
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
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
                <li key={item._id}>
                  <span>
                    {item.date}: {item.activity}
                  </span>
                  <button onClick={() => removeActivity(item._id)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Scheduler;
