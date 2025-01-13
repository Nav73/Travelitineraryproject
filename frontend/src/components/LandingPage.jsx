import React from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"; // Link to CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Travel Planner</h1>
        <p>Plan your dream vacation with ease. Create your itinerary, budget, and much more!</p>

        <div className="landing-buttons">
          <Link to="/login">
            <button className="landing-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="landing-btn">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
