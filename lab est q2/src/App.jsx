import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {

  return (
    <div>
      <nav style={{ padding: '20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff' }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff' }}>
          About
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>
          Contact
        </Link>
      </nav>

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
