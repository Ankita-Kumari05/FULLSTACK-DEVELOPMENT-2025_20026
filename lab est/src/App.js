import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  const username = "John Doe"; // Source of truth for username
  
  return (
    <div className="app">
      <h1>Props Drilling Example</h1>
      <Header username={username} />
    </div>
  );
}

export default App;
