const express = require("express");
const cors = require("cors");
const jobs = require("./data/jobs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET all jobs (with optional search query)
app.get("/api/jobs", (req, res) => {
  const { query } = req.query;

  if (query) {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase()) ||
        job.category.toLowerCase().includes(query.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(jobs);
});

// GET single job by ID
app.get("/api/jobs/:id", (req, res) => {
  const job = jobs.find((j) => j.id === parseInt(req.params.id));
  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }
  res.json(job);
});

// POST apply for a job
app.post("/api/apply", (req, res) => {
  const { name, email, phone, resume } = req.body;

  if (!name || !email || !phone || !resume) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Simulate saving (no database)
  console.log("New Application Received:", { name, email, phone, resume });

  res.json({ message: "Application submitted successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
