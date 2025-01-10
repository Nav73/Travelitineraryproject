import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="logo">
                    <h1>AdventureAtlas - Travel Planners </h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/destination">Destinations</Link>
                        </li>
                        <li>
                            <Link to="/planner">Trip Planner</Link>
                        </li>
                        <li>
                            <Link to="/scheduler">Activity Scheduler</Link>
                        </li>
                        <li>
                            <Link to="/budget">Budget Calculator</Link>
                        </li>
                        <li>
                            <Link to="/weather">Weather</Link>
                        </li>
                        <li>
                            <Link to="/packing">Packing Checklist</Link>
                        </li>
                        <li>
                            <Link to="/calendar">Calendar</Link>
                        </li>
                        <li>
                            <Link to="/itinerary">Itinerary</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
