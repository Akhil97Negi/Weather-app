import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">Weather Dashboard</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
