import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">Weather Dashboard</Link>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/favorites" onClick={toggleMenu}>Favorites</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


// function Navbar({ toggleSidebar }) {
//   return (
//     <nav className="navbar">
//       <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
//       <div className="navbar-title">
//         <Link to="/">Weather Dashboard</Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/favorites">Favorites</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
