import React, { useState } from "react";
import "../css/destinations.css";
import Homepage from "./homepage";
import Header from "../components/header";
const destinationsData = {
  acrossindia: [
    {
      name: "Taj Mahal, Agra",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Taj_Mahal_2012.jpg",
      description:
        "The Taj Mahal is a magnificent white marble mausoleum in Agra, India, and a UNESCO World Heritage site.",
      activities: [
        "Admire the stunning architecture.",
        "Visit the nearby Agra Fort.",
        "Learn about Mughal history.",
        "Enjoy a sunrise view of the Taj Mahal.",
        "Shop for souvenirs in Agra.",
      ],
    },
    {
      name: "Jaipur, Rajasthan",
      image: "https://tse3.mm.bing.net/th?id=OIP.rvqIAC0eYd7vYKb30AWrGAHaEH&pid=Api&P=0&h=180",
      description:
        "Jaipur, the Pink City, is known for its royal heritage, colorful markets, and historic forts.",
      activities: [
        "Explore the Amber Fort.",
        "Visit the City Palace.",
        "Take a photo at Hawa Mahal.",
        "Enjoy a camel ride.",
        "Shop for handicrafts.",
      ],
    },
    {
      name: "Kerala Backwaters",
      image: "https://tse3.mm.bing.net/th?id=OIP.VEsQqc9x09LVd1b__c144AHaEs&pid=Api&P=0&h=180",
      description:
        "The serene Kerala Backwaters offer a tranquil escape with lush greenery and houseboat cruises.",
      activities: [
        "Take a houseboat ride.",
        "Enjoy traditional Kerala cuisine.",
        "Watch local fishermen in action.",
        "Explore Alleppey’s waterways.",
        "Relax amidst nature.",
      ],
    },
    {
      name: "Goa Beaches",
      image: "https://tse2.mm.bing.net/th?id=OIP.PM_1LnCjD-NyQXeYGNndvgHaE8&pid=Api&P=0&h=180",
      description:
        "Goa is famous for its pristine beaches, vibrant nightlife, and Portuguese heritage.",
      activities: [
        "Relax on Baga Beach.",
        "Explore Old Goa churches.",
        "Try water sports.",
        "Enjoy Goan seafood.",
        "Dance at a beach party.",
      ],
    },
    {
      name: "Golden Temple, Amritsar",
      image: "https://tse1.mm.bing.net/th?id=OIP.z9WRP_xTvyTuu_1tFaasXQAAAA&pid=Api&P=0&h=180",
      description:
        "The Golden Temple is a spiritual hub for Sikhs, offering a serene and sacred experience.",
      activities: [
        "Visit the Harmandir Sahib.",
        "Watch the ceremonial flag-lowering at Wagah Border.",
        "Enjoy the community kitchen (Langar).",
        "Learn Sikh history.",
        "Stroll around the temple complex.",
      ],
    },
    {
      name: "Rann of Kutch, Gujarat",
      image: "https://tse3.mm.bing.net/th?id=OIP.AJsemQ7Q6NxtxAiuoetA9AHaFj&pid=Api&P=0&h=180",
      description:
        "The Rann of Kutch is a salt marsh in Gujarat, known for its vast white desert and vibrant culture.",
      activities: [
        "Witness the Rann Utsav.",
        "Enjoy a camel safari.",
        "Explore local crafts.",
        "Watch a sunset over the white desert.",
        "Visit the Kala Dungar (Black Hill).",
      ],
    },
  ],
  acrossworld: [
    {
      name: "Eiffel Tower, Paris",
      image: "https://tse3.mm.bing.net/th?id=OIP.Tq0e8vpxyWV2Aol-fufhdQHaE7&pid=Api&P=0&h=180",
      description:
        "The Eiffel Tower is an iconic iron structure in Paris, France, offering panoramic views of the city.",
      activities: [
        "Climb to the top for a breathtaking view.",
        "Enjoy a picnic at Champ de Mars.",
        "Visit the nearby Louvre Museum.",
        "Take a Seine River cruise.",
        "Capture photos of the tower at night.",
      ],
    },
    {
      name: "Great Wall of China",
      image: "https://tse4.mm.bing.net/th?id=OIP.4WIuHmfLadMJbWAUEhQSxwHaE6&pid=Api&P=0&h=180",
      description:
        "The Great Wall of China is an ancient series of walls and fortifications stretching across northern China.",
      activities: [
        "Hike along the Mutianyu section.",
        "Learn about its history.",
        "Enjoy the scenic views.",
        "Visit nearby Beijing landmarks.",
        "Take a guided tour.",
      ],
    },
    {
      name: "Machu Picchu, Peru",
      image: "https://tse4.mm.bing.net/th?id=OIP.4WIuHmfLadMJbWAUEhQSxwHaE6&pid=Api&P=0&h=180",
      description:
        "Machu Picchu is an ancient Incan citadel set high in the Andes Mountains of Peru.",
      activities: [
        "Explore the ruins with a guide.",
        "Hike the Inca Trail.",
        "Enjoy breathtaking mountain views.",
        "Learn about Incan history.",
        "Visit the Sun Gate.",
      ],
    },
    {
      name: "Sydney Opera House, Australia",
      image: "https://tse4.mm.bing.net/th?id=OIP.HlnOGcImk3K73UPmX8YE6AHaE8&pid=Api&P=0&h=180",
      description:
        "The Sydney Opera House is a world-famous architectural marvel and cultural hub in Sydney, Australia.",
      activities: [
        "Attend a live performance.",
        "Take a guided tour.",
        "Dine at waterfront restaurants.",
        "Capture photos from the harbor.",
        "Explore Circular Quay.",
      ],
    },
    {
      name: "Santorini, Greece",
      image: "https://tse4.mm.bing.net/th?id=OIP.HlnOGcImk3K73UPmX8YE6AHaE8&pid=Api&P=0&h=180",
      description:
        "Santorini is a beautiful Greek island known for its white-washed buildings and stunning sunsets.",
      activities: [
        "Watch the sunset in Oia.",
        "Swim at Red Beach.",
        "Explore ancient Akrotiri.",
        "Taste local wines.",
        "Take a boat tour around the island.",
      ],
    },
    {
      name: "Northern Lights, Iceland",
      image: "https://tse4.mm.bing.net/th?id=OIP.bQo5iljpL4ZwNhHfDt0GeQHaEK&pid=Api&P=0&h=180",
      description:
        "The Northern Lights in Iceland are a mesmerizing natural light display in the polar sky.",
      activities: [
        "Go on a Northern Lights tour.",
        "Soak in the Blue Lagoon.",
        "Explore Reykjavik city.",
        "Visit waterfalls and glaciers.",
        "Learn about Icelandic culture.",
      ],
    },
  ],
};

const Destination = () => {
  const [currentCategory, setCurrentCategory] = useState("acrossindia");
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinations = destinationsData[currentCategory];

  const loadDestination = () => {
    if (!destinations || destinations.length === 0) return null;

    const destination = destinations[currentIndex];
    return (
      <div className="destination-card">
        <img
          src={destination.image}
          alt={destination.name}
          style={{ height: "210px", width: "auto" }}
        />
        <div className="description">
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          <h3>Suggested Activities:</h3>
          <ul>
            {destination.activities.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const nextDestination = () => {
    if (currentIndex < destinations.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevDestination = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleCategoryChange = (e) => {
    setCurrentCategory(e.target.value);
    setCurrentIndex(0); // Reset to the first destination in the new category
  };

  return (
    <div>
      <Header />

      <main>
        <section className="filter">
          <label htmlFor="category">Choose Category: </label>
          <select id="category" value={currentCategory} onChange={handleCategoryChange}>
            <option value="acrossindia">Across India</option>
            <option value="acrossworld">Across the World</option>
          </select>
        </section>

        <section className="destination-container" id="destination-container">
          {loadDestination()}
        </section>

        <section className="navigation">
          <button
            id="prevButton"
            onClick={prevDestination}
            disabled={currentIndex <= 0}
          >
            Previous
          </button>
          <button
            id="nextButton"
            onClick={nextDestination}
            disabled={currentIndex >= destinations.length - 1}
          >
            Next
          </button>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Travel Itinerary. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Destination;
