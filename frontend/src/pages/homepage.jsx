import React, {useEffect, useState} from "react";
import {Link } from "react-router-dom";
import "../css/homepage.css"; 
import Destination from "./destinations.jsx";
import Planner from "./planner.jsx";
import Scheduler from "./scheduler.jsx";
import Header from "../components/header.jsx";
import cardsData from "../../card data/cardsData.json";
import youMayLike from "../../card data/youMayLike.json";
import nearYou from "../../card data/nearYou.json";



const Homepage = () => {
  return (
    <div>
      <Header />
      {/* Welcome Section */}
      <div className="welcome">
        <h2>Welcome to Your Travel Itinerary!</h2>
        <p>Plan your next adventure and organize all your travel details in one place.</p>
      </div>

      {/* Travel Tips Section */}
      <div id="heading1">
        <div id="headingg">
          <h4 id="traveltips">Travel Tips:</h4>
        </div>
      </div>
      <div id="tips1">
        <div id="tips">
          <ul>
            <li><b>Research your destination:</b> Understand the local culture, language, and customs. Familiarize yourself with key attractions, transportation options, and safety considerations.</li>
            <li><b>Plan, but Stay Flexible:</b> Have a basic itinerary, but leave room for spontaneous adventures and local recommendations.</li>
            <li><b>Pack Light:</b> Stick to essentials and versatile clothing to make your journey smoother and avoid heavy luggage.</li>
            <li><b>Embrace Local Culture:</b> Learn a few local phrases and customs to enhance your travel experience and show respect.</li>
            <li><b>Reduce Environmental Impact:</b> Opt for eco-friendly accommodations and transportation to lessen your travel footprint.</li>
            <li><b>Manage Money Wisely:</b> Use a mix of payment methods and keep track of your spending to stay within budget.</li>
          </ul>
        </div>
      </div>

      <div id="categories-wrapper">
         {/* Cards Data Section */}
        <div className="category-section">
          <h2>Popular Destinations</h2>
          <div className="grid-container">
            {cardsData.slice(0, 10).map((card) => (
              <div key={card.id} className="grid-item">
                <img src={card.image} alt={card.title} />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* You May Like Section */}
        <div className="category-section">
          <h2>You May Like</h2>
          <div className="grid-container">
            {youMayLike.slice(0, 10).map((card) => (
              <div key={card.id} className="grid-item">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Near You Section */}
        <div className="category-section">
          <h2>Near You</h2>
          <div className="grid-container">
            {nearYou.slice(0, 10).map((card) => (
              <div key={card.id} className="grid-item">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Travel Itinerary Project</p>
      </footer>
    </div>
  );
};

export default Homepage;
