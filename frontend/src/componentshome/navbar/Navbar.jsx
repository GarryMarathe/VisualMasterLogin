// Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useAuth } from '../../AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className={`navbar ${showMenu ? 'active' : ''}`}>
        <div className="navbar-brand">
          <Link className="navbar-logo" to="/"></Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          <div className={`menu-icon ${showMenu ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="navbar-menu">
          <ul className={`navbar-items ${showMenu ? 'active' : ''}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            {user ? (
              <>
                <li>
                  {/* Link to home page */}
                  <Link to="/">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/signup">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
