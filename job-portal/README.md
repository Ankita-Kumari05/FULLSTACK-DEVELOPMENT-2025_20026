# 💼 Job Portal - Full Stack Project

A simple, beginner-friendly Job Portal built with React (frontend) and Node.js + Express (backend).

---

## 📁 Folder Structure

```
job-portal/
├── client/                  ← React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.css
│   │   │   ├── JobCard.jsx
│   │   │   └── JobCard.css
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── Jobs.jsx
│   │   │   ├── Jobs.css
│   │   │   ├── JobDetails.jsx
│   │   │   ├── JobDetails.css
│   │   │   ├── Apply.jsx
│   │   │   └── Apply.css
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
└── server/                  ← Node.js + Express Backend
    ├── data/
    │   └── jobs.js
    ├── server.js
    └── package.json
```

---

## ✅ Features

- View all job listings
- Search jobs by title or company
- Filter jobs by category
- View full job details
- Apply for a job with a form
- Success message after applying
- Responsive and clean UI

---

## 🚀 How to Run

### Step 1: Start the Backend

```bash
cd job-portal/server
npm install
npm start
```

Backend runs on: http://localhost:5000

### Step 2: Start the Frontend

Open a new terminal:

```bash
cd job-portal/client
npm install
npm start
```

Frontend runs on: http://localhost:3000

> The `"proxy": "http://localhost:5000"` in client/package.json connects frontend to backend automatically.

---

## 🔗 API Endpoints

| Method | Route            | Description              |
|--------|------------------|--------------------------|
| GET    | /api/jobs        | Get all jobs             |
| GET    | /api/jobs/:id    | Get single job by ID     |
| POST   | /api/apply       | Submit job application   |

---

## 🔄 Workflow

1. User opens **Home page**
2. Clicks **Explore Jobs** button
3. Lands on **Jobs page** — sees all job cards
4. Uses **search bar** or **category filter** to find jobs
5. Clicks **View Details** on a job card
6. Reads full job info on **Job Details page**
7. Clicks **Apply Now**
8. Fills the **Apply form** (name, email, phone, resume)
9. Submits and sees **Success message**

---

## 🎓 Viva Questions & Answers

**Q1: What is the tech stack used?**
Frontend: React.js with React Router, CSS
Backend: Node.js with Express.js
No database — in-memory data (array in jobs.js)

**Q2: How does the frontend connect to the backend?**
Using the `proxy` field in client/package.json set to `http://localhost:5000`. Axios makes API calls like `/api/jobs` which are forwarded to the backend.

**Q3: What is CORS and why is it used?**
CORS (Cross-Origin Resource Sharing) allows the frontend (port 3000) to make requests to the backend (port 5000). Without it, the browser blocks cross-origin requests.

**Q4: What is React Router used for?**
React Router handles navigation between pages (Home, Jobs, Job Details, Apply) without reloading the page. It's a Single Page Application (SPA).

**Q5: What are useState and useEffect?**
- `useState` stores data in a component (like jobs list, form inputs).
- `useEffect` runs code when the component loads (like fetching jobs from the API).

**Q6: Why is there no database?**
For simplicity. Job data is stored in a JavaScript array in `server/data/jobs.js`. Applications are just logged to the console.

**Q7: What does the POST /api/apply route do?**
It receives form data (name, email, phone, resume), validates it, logs it, and returns a success message. No data is saved permanently.

**Q8: What is axios?**
Axios is a JavaScript library used to make HTTP requests from the frontend to the backend. It's simpler than the built-in `fetch`.

**Q9: What is Express.js?**
Express is a Node.js framework that makes it easy to create REST APIs. It handles routing, middleware, and HTTP requests/responses.

**Q10: How does filtering work?**
Filtering is done on the frontend. When the user types in the search box or clicks a category, the `filteredJobs` array is recalculated using JavaScript's `.filter()` method.
