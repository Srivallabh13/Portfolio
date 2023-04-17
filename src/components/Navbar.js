import React from 'react';
import '../styles/nav.css';
import logo from '../imgs/whitelogo.jpeg';
import { Link} from 'react-router-dom';

function Navbar() {
  const toggleMenu = () => {
    const nav = document.getElementById('myNav');
    nav.classList.toggle('slide');
  };
  const handleClick = () => {
    window.location.href = '/';
  }
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a href className="navbar-brand" onClick={handleClick}>
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
          <span>Srivallabh</span>
        </a>
        <div id="menu" class="fas fa-bars" onClick={toggleMenu}></div>
        <div className='navbar-nav' id='myNav'>
          <ul className='nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
