import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/planner.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
const Planner = () => {
  const [tripData, setTripData] = useState({
    tripName: "",
    startDate: "",
    endDate: "",
    destination: "",
    travelers: "",
  });
  const [savedTrips, setSavedTrips] = useState(
    JSON.parse(localStorage.getItem("savedTrips")) || []
  );
  const [showSavedTrips, setShowSavedTrips] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const saveTrip = () => {
    const { tripName, startDate, endDate, destination, travelers } = tripData;

    if (!tripName || !startDate || !endDate || !destination || !travelers) {
      alert("Please fill in all fields.");
      return;
    }

    const newTrip = { ...tripData };
    const updatedTrips = [...savedTrips, newTrip];
    setSavedTrips(updatedTrips);
    localStorage.setItem("savedTrips", JSON.stringify(updatedTrips));
    alert("Trip saved successfully!");
    setTripData({
      tripName: "",
      startDate: "",
      endDate: "",
      destination: "",
      travelers: "",
    });
  };

  const deleteTrip = (index) => {
    const updatedTrips = savedTrips.filter((_, idx) => idx !== index);
    setSavedTrips(updatedTrips);
    localStorage.setItem("savedTrips", JSON.stringify(updatedTrips));
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <section className="planner-container">
          <h1>Plan Your Trip</h1>
          <form id="trip-planner-form">
            <label htmlFor="trip-name">Trip Name:</label>
            <input
              type="text"
              id="trip-name"
              name="tripName"
              value={tripData.tripName}
              onChange={handleInputChange}
              placeholder="e.g., Summer Vacation"
              required
            />

            <label htmlFor="start-date">Start Date:</label>
            <input
              type="date"
              id="start-date"
              name="startDate"
              value={tripData.startDate}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="end-date">End Date:</label>
            <input
              type="date"
              id="end-date"
              name="endDate"
              value={tripData.endDate}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={tripData.destination}
              onChange={handleInputChange}
              placeholder="e.g., Paris, France"
              required
            />

            <label htmlFor="travelers">Number of Travelers:</label>
            <input
              type="number"
              id="travelers"
              name="travelers"
              value={tripData.travelers}
              onChange={handleInputChange}
              min="1"
              required
            />

            <button type="button" onClick={saveTrip}>
              Save Trip
            </button>
          </form>

          {showSavedTrips && (
            <section className="saved-trips">
              <h2>Saved Trips</h2>
              <ul>
                {savedTrips.length > 0 ? (
                  savedTrips.map((trip, index) => (
                    <li key={index}>
                      <strong>{trip.tripName}</strong> <br />
                      From: {trip.startDate} To: {trip.endDate} <br />
                      Destination: {trip.destination} <br />
                      Travelers: {trip.travelers} <br />
                      <button onClick={() => deleteTrip(index)}>Delete</button>
                    </li>
                  ))
                ) : (
                  <p>No saved trips yet.</p>
                )}
              </ul>
            </section>
          )}
          <button onClick={() => setShowSavedTrips(!showSavedTrips)}>
            {showSavedTrips ? "Hide Saved Trips" : "View Saved Trips"}
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Planner;
