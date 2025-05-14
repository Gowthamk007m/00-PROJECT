import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import laptopMockup from '../assets/laptop.jpg'; // Background image
import projectScreenshot from '../assets/scrnshot1.png'; // Screenshot to display inside laptop


const ProjectsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TopBar />
      <div className="top-black-bar"></div>

      <div className="contact-header">
        <img
          src="https://pokaktech.com/images/dark_logo.png"
          alt="Pokak Logo"
          className="logo"
        />

        <div className="nav-bar-background">
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/projects">Projects</Link>
          </nav>
        </div>

        <div className="header-right">
          <Link to="/contact">
            <button className="contact-button">Contact</button>
          </Link>
          <div className="hamburger" onClick={() => setMenuOpen(true)}>&#9776;</div>
        </div>
      </div>

      {menuOpen && (
        <div className="side-menu">
          <span className="close-btn" onClick={() => setMenuOpen(false)}>&times;</span>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">
            <button className="contact-button">Contact</button>
          </Link>
        </div>
      )}

      {/* Project Showcase Section */}
     <div className="project-mockup-section">
  <h2>
    <span className="highlight">Innovative Solutions,</span><br />
    Real Impact
  </h2>

  <div className="mockup-container">
    <img src={laptopMockup} alt="Laptop" className="laptop-background" />

    <div className="screen-wrapper">
      <img src={projectScreenshot} alt="Screenshot" className="screen-overlay" />
    </div>

    <div className="mockup-label">
      <img src="https://pokaktech.com/images/logo.png" alt="Project Logo" className="mockup-logo" />
      <span>BricksNmix</span>
    </div>
  </div>
</div>




      <Footer />
    </>
  );
};

export default ProjectsPage;
