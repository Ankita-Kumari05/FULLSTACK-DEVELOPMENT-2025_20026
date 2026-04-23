import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Apply.css";

function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post("/api/apply", { ...formData, jobId: id })
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
      });
  };

  if (submitted) {
    return (
      <div className="apply-page">
        <div className="success-card">
          <div className="success-icon">✅</div>
          <h2>Application Submitted!</h2>
          <p>Thank you, <strong>{formData.name}</strong>! Your application has been received.</p>
          <p>We will contact you at <strong>{formData.email}</strong> soon.</p>
          <button className="back-btn" onClick={() => navigate("/jobs")}>
            Browse More Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <div className="apply-card">
        <button className="go-back-btn" onClick={() => navigate(`/jobs/${id}`)}>
          ← Back to Job
        </button>
        <h2>Apply for this Job</h2>
        <p className="apply-subtitle">Fill in your details below to apply</p>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit} className="apply-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Resume Link or Summary</label>
            <textarea
              name="resume"
              placeholder="Paste your resume link or write a short summary..."
              value={formData.resume}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default Apply;
