import { NavLink } from 'react-router-dom';
import "./Navbar.css"; 
import logo from "../assets/images/logo2.jpg"; 

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <img src={logo} alt="Logo" className="logo"/>
      <nav className="nav-container">
        <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
    </div>
  );
}
export default Navbar;
