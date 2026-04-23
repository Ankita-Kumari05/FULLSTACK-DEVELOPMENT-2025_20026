import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/jobs/${id}`)
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading job details...</p>;
  if (!job) return <p className="loading">Job not found.</p>;

  return (
    <div className="job-details-page">
      <div className="job-details-card">
        <button className="back-btn" onClick={() => navigate("/jobs")}>
          ← Back to Jobs
        </button>

        <div className="job-details-header">
          <h2>{job.title}</h2>
          <span className="category-badge">{job.category}</span>
        </div>

        <div className="job-info">
          <p>🏢 <strong>Company:</strong> {job.company}</p>
          <p>📍 <strong>Location:</strong> {job.location}</p>
          <p>💰 <strong>Salary:</strong> {job.salary}</p>
        </div>

        <div className="job-description">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </div>

        <button className="apply-btn" onClick={() => navigate(`/apply/${job.id}`)}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
