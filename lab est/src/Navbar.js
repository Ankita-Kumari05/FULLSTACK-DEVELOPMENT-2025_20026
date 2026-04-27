import React from 'react';
import UserProfile from './UserProfile';

function Navbar({ username }) {
  return (
    <nav className="navbar">
      <h3>Navbar Component</h3>
      <UserProfile username={username} />
    </nav>
  );
}

export default Navbar;
