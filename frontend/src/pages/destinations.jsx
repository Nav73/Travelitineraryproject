import React, { useEffect, useState } from "react";
import "../css/destinations.css";
import Header from "../components/header";

// URL of your backend API
const API_URL = "http://localhost:3000/api/cards";  // Change this if your server is hosted somewhere else

function Destination() {
  const [cardsData, setCardsData] = useState([]);
  const [nearYouData, setNearYouData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCardsData(data.cardsData);  // Data for popular destinations
        setNearYouData(data.nearYou);  // Data for "Near You"
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />

      {/* World Section (Popular Destinations) */}
      <div id="world">
        <h4>World</h4>
        <div className="card-container">
          {cardsData.map((card) => (
            <div className="card" key={card._id}>
              <img src={card.image} alt={card.title} />
              <div style={{ background: "white" }}>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Near You Section */}
      <div id="world">
        <h4>Near You</h4>
        <div className="card-container">
          {nearYouData.map((card) => (
            <div className="card" key={card._id}>
              <img src={card.image} alt={card.title} />
              <div style={{ background: "white" }}>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Travel Itinerary. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Destination;
