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
  const [savedTrips, setSavedTrips] = useState([]);
  const [showSavedTrips, setShowSavedTrips] = useState(false);

  useEffect(() => {
    
    const fetchSavedTrips = async () => {
      const response = await fetch(`http://localhost:3000/api/trips`);
      const data = await response.json();
      setSavedTrips(data);
    };

    fetchSavedTrips();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const saveTrip = async () => {
    const { tripName, startDate, endDate, destination, travelers } = tripData;

    if (!tripName || !startDate || !endDate || !destination || !travelers) {
      alert("Please fill in all fields.");
      return;
    }

    const newTrip = { ...tripData };

    try {
      const response = await fetch("http://localhost:3000/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTrip),
      });

      if (response.ok) {
        setSavedTrips((prevTrips) => [...prevTrips, newTrip]);
        alert("Trip saved successfully!");
        setTripData({
          tripName: "",
          startDate: "",
          endDate: "",
          destination: "",
          travelers: "",
        });
      } else {
        alert("Error saving trip.");
      }
    } catch (error) {
      console.error("Error saving trip:", error);
      alert("Error saving trip.");
    }
  };

  const deleteTrip = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/trips/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setSavedTrips(savedTrips.filter((trip) => trip._id !== id));
      } else {
        alert("Error deleting trip.");
      }
    } catch (error) {
      console.error("Error deleting trip:", error);
      alert("Error deleting trip.");
    }
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
                  savedTrips.map((trip) => (
                    <li key={trip._id}>
                      <strong>{trip.tripName}</strong> <br />
                      From: {trip.startDate} To: {trip.endDate} <br />
                      Destination: {trip.destination} <br />
                      Travelers: {trip.travelers} <br />
                      <button onClick={() => deleteTrip(trip._id)}>Delete</button>
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
