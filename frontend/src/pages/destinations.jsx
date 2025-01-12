import React, { useState } from "react";
import "../css/destinations.css";
import Homepage from "./homepage";
import Header from "../components/header";
import cardsData from "../../card data/cardsData.json";


function Destination() {
  return (
    <div>
      <Header />

        {/* you May Like Section */}
        <div id="world">
          <h4>World</h4>
          <div className="card-container">
            {cardsData.map((card) => (
              <div className="card" key={card.id}>
                <img src={card.image} alt={card.title} />
                
                  <div style={{background: "white"}}>
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
