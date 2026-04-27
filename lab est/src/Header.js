import React from 'react';
import Navbar from './Navbar';

function Header({ username }) {
  return (
    <header className="header">
      <h2>Header Component</h2>
      <Navbar username={username} />
    </header>
  );
}

export default Header;
