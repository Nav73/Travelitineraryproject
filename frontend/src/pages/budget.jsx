import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/budget.css";
import Header from "../components/header";
const Budget = () => {
  const [accommodation, setAccommodation] = useState("");
  const [transportation, setTransportation] = useState("");
  const [food, setFood] = useState("");
  const [activities, setActivities] = useState("");
  const [miscellaneous, setMiscellaneous] = useState("");
  const [totalBudget, setTotalBudget] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();
    const total =
      (parseFloat(accommodation) || 0) +
      (parseFloat(transportation) || 0) +
      (parseFloat(food) || 0) +
      (parseFloat(activities) || 0) +
      (parseFloat(miscellaneous) || 0);
    setTotalBudget(total);
  };

  return (
    <div>
      <Header />

      <div className="container">
        <section className="budget-calculator">
          <h2>Calculate Your Trip Budget</h2>
          <form onSubmit={handleCalculate}>
            <label htmlFor="accommodation">Accommodation:</label>
            <input
              type="number"
              id="accommodation"
              placeholder="Enter amount"
              value={accommodation}
              onChange={(e) => setAccommodation(e.target.value)}
              required
            />

            <label htmlFor="transportation">Transportation:</label>
            <input
              type="number"
              id="transportation"
              placeholder="Enter amount"
              value={transportation}
              onChange={(e) => setTransportation(e.target.value)}
              required
            />

            <label htmlFor="food">Food:</label>
            <input
              type="number"
              id="food"
              placeholder="Enter amount"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              required
            />

            <label htmlFor="activities">Activities:</label>
            <input
              type="number"
              id="activities"
              placeholder="Enter amount"
              value={activities}
              onChange={(e) => setActivities(e.target.value)}
              required
            />

            <label htmlFor="miscellaneous">Miscellaneous:</label>
            <input
              type="number"
              id="miscellaneous"
              placeholder="Enter amount"
              value={miscellaneous}
              onChange={(e) => setMiscellaneous(e.target.value)}
              required
            />

            <button type="submit">Calculate Budget</button>
          </form>

          <div className="budget-result">
            <h3>Total Budget:</h3>
            <p id="totalBudget">₹{totalBudget.toFixed(2)}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Budget;
