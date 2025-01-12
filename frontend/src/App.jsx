import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Destination from "./pages/destinations.jsx";
import Planner from "./pages/planner.jsx";
import Scheduler from "./pages/scheduler.jsx";
import Budget from "./pages/budget.jsx";
import Weather from "./pages/weather.jsx";
import Checklist from "./pages/checklist.jsx";
import Calendar from "./pages/calender.jsx";
import Itinerary from "./pages/itinerary.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/packing" element={<Checklist />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/itinerary" element={<Itinerary />} />
        
      </Routes>
    </Router>
  );
};

export default App;
