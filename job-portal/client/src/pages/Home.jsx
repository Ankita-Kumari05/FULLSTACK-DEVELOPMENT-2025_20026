import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Job Today</h1>
          <p>
            Browse hundreds of job listings from top companies. Your next career
            opportunity is just a click away.
          </p>
          <button className="explore-btn" onClick={() => navigate("/jobs")}>
            Explore Jobs
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose JobPortal?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span>🔍</span>
            <h3>Easy Search</h3>
            <p>Search jobs by title, company, or category instantly.</p>
          </div>
          <div className="feature-card">
            <span>📋</span>
            <h3>Detailed Listings</h3>
            <p>View full job descriptions, salary, and location details.</p>
          </div>
          <div className="feature-card">
            <span>📩</span>
            <h3>Quick Apply</h3>
            <p>Apply for jobs with a simple and fast application form.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
