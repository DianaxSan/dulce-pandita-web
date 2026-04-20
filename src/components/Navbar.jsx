import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTools } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/admin"><FaTools /> Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;