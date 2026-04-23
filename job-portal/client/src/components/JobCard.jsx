import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobCard.css";

function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{job.title}</h3>
        <span className="category-badge">{job.category}</span>
      </div>
      <p className="company">🏢 {job.company}</p>
      <p className="location">📍 {job.location}</p>
      <p className="salary">💰 {job.salary}</p>
      <button className="view-btn" onClick={() => navigate(`/jobs/${job.id}`)}>
        View Details
      </button>
    </div>
  );
}

export default JobCard;
