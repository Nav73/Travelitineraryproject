import React, {useEffect, useState} from "react";
import {Link } from "react-router-dom";
import "../css/homepage.css"; 
import Destination from "./destinations.jsx";
import Planner from "./planner.jsx";
import Scheduler from "./scheduler.jsx";
import Header from "../components/header.jsx";
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

      {/* Popular Destinations Section */}
      <div id="popularr">
        <div id="populartext">
          <h4>Popular destination choices:</h4>
        </div>
        <div id="popularimages">
          <div className="box">
            <div className="image">
            <img
                 src="https://tse1.mm.bing.net/th?id=OIP.aX-XN49YWEJ6antV5SlhagHaEU&pid=Api&P=0&h=180"
                 alt="Taj Mahal"
                //  style="width: 100%; height: 100%;"
            />

              <h4>Taj Mahal</h4>
            </div>
            <div className="text">
              <p>1. The Taj Mahal is a stunning example of Mughal architecture, combining elements from Persian, Ottoman, and Indian styles to create an extraordinary building that captivates visitors with its symmetrical design, intricate carvings, and the use of white marble.</p>
              <p>2. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, the Taj Mahal stands as an enduring symbol of love and devotion, with its elaborate design and scale reflecting the emperor's deep emotional connection to his lost wife.</p>
              <p>3. Recognized as a UNESCO World Heritage Site, the Taj Mahal is celebrated worldwide for its beauty and historical significance. It is considered one of the most iconic buildings globally, attracting millions of visitors every year from all over the world.</p>
              <p>4. The Taj Mahal is set within expansive Mughal gardens, designed in the traditional "charbagh" layout, which symbolizes paradise on earth. The lush greenery, water channels, and fountains surrounding the monument enhance its beauty, creating a serene and peaceful atmosphere.</p>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.6NnSsN43eY2gsKShxb7kdwHaEo&pid=Api&P=0&h=180"
                alt="New York"
                height="150px"
              />
              <h4>New York</h4>
            </div>
            <div className="text">
              <p>1. New York City is a global hub of culture, finance, and innovation, known for its iconic skyline, diverse population, and vibrant arts scene. From Broadway to Wall Street, the city serves as a melting pot where people from all walks of life come together to create a unique energy that defines its spirit.</p>
              <p>2. The city's architecture is one of the most recognized in the world, featuring landmarks like the Empire State Building, One World Trade Center, and the Statue of Liberty. The towering skyscrapers and historic buildings make New York's skyline a defining symbol of modern urban development.</p>
              <p>3. Home to some of the world’s most renowned museums, such as the Metropolitan Museum of Art and the Museum of Modern Art (MoMA), New York is a cultural mecca. It attracts art lovers and historians from around the globe, with its unparalleled collections that span thousands of years of human history and creativity.</p>
              <p>4. Central Park, a vast green oasis in the heart of Manhattan, offers a serene escape from the bustling city streets. This iconic park, which spans over 800 acres, features walking trails, lakes, sports facilities, and open spaces for relaxation, making it a favorite destination for both locals and tourists.</p>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.Xi97O4pIIzl7GD-h3gHDxAHaE8&pid=Api&P=0&h=180"
                alt="Maldives"
                height="150px"
              />
              <h4>Maldives</h4>
            </div>
            <div className="text">
              <p>1. The Maldives is a tropical paradise known for its pristine white-sand beaches, crystal-clear turquoise waters, and vibrant coral reefs. This idyllic destination offers unparalleled natural beauty, making it one of the world’s most sought-after locations for luxury vacations and underwater exploration.</p>
              <p>2. Comprising over 1,000 islands, the Maldives is famous for its overwater bungalows and resorts, where visitors can stay in private villas perched above the Indian Ocean. These luxurious accommodations provide a unique experience, offering direct access to the water, breathtaking views, and ultimate privacy.</p>
              <p>3. The Maldives is a premier destination for water-based activities, including snorkeling, diving, and surfing. The archipelago is home to some of the most diverse marine life on the planet, including manta rays, sea turtles, and vibrant coral species, making it a haven for underwater enthusiasts.</p>
              <p>4. The Maldives is an ideal destination for honeymooners and couples seeking romance. With its secluded resorts, private candlelit dinners on the beach, and tranquil surroundings, it offers the perfect atmosphere for intimate getaways and memorable experiences.</p> <br /><br /><br /><br />
            </div>
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
