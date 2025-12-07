/*WebApp Assignment1 
Fatema Sarwar
301245848
October 13,2025*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
return (
  <div className="app-root">
    <Router>
      <Navbar />
      <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>
    </div>
  );
}
export default App;
