import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import "./Jobs.css";

const CATEGORIES = ["All", "Development", "Design", "Engineering", "Marketing"];

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/jobs")
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || job.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h2>All Job Listings</h2>
        <p>Find the perfect job that matches your skills</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="category-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="loading">Loading jobs...</p>
      ) : filteredJobs.length === 0 ? (
        <p className="no-jobs">No jobs found. Try a different search.</p>
      ) : (
        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Jobs;
