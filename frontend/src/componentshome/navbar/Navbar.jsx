// Navbar.js
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import the sign out icon
import { useAuth } from '../../AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-logo" to="/"></Link>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            {user ? (
              <li>
                 <Link to="/signout">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
              </li>
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
