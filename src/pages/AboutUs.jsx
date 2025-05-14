import React, { useState } from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const AboutPage = () => {
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
<div className="about-hero-section">
  <div className="hero-text-wrapper">
    <div className="line-one">We Make</div>
    <div className="line-two">Ideas Work</div>
  </div>
</div>
<div className="about-who-section">
<div className="who-image-container">
  <img
    src="https://media.licdn.com/dms/image/sync/v2/D4D27AQESKVUah2_3cw/articleshare-shrink_800/articleshare-shrink_800/0/1734395391454?e=2147483647&v=beta&t=dzYdtqveF0wu4bfhF4QptotIR53lYWJVrDxat1GE6Ck"
    alt="Who we are"
    className="who-image"
  />
  <span className="who-label">/Who we are?</span>
</div>


  <div className="who-text">
    <h2>
      <strong>Empowering</strong> Brands Through <br />
      <strong>Technology</strong>
    </h2>
    <p>
      Pokak Technologies is a technology-driven company focused on delivering efficient and reliable digital solutions. We combine technical expertise with a clear understanding of business goals to create scalable, purpose-driven products that add real value.
    </p>
    <button className="who-contact-button">Contact Us</button>
  </div>
</div>
<div className="approach-wrapper">
  <div className="approach-title">
    <p className="approach-label">// Our Approach</p>
    <h2 className="approach-heading">
      How We Bring <strong>Ideas to Life</strong>
    </h2>
  </div>

  <div className="approach-grid">
    <div className="approach-card">
      <span className="approach-step">01</span>
      <h4>Discover</h4>
      <p>We listen, learn, and understand your business goals, challenges, and users.</p>
    </div>
    <div className="approach-card">
      <span className="approach-step">02</span>
      <h4>Plan</h4>
      <p>We define strategy, scope, and choose the right tech stack tailored to your needs.</p>
    </div>
    <div className="approach-card">
      <span className="approach-step">01</span>
      <h4>Design & Build</h4>
      <p>Our design and development teams work hand-in-hand to create user-centric digital experiences.</p>
    </div>
    <div className="approach-card">
      <span className="approach-step">02</span>
      <h4>Launch & Scale</h4>
      <p>We deploy, monitor, and optimize—ensuring performance, security, and growth readiness.</p>
    </div>
  </div>
</div>
<div className="cta-section">
 <h2 className="cta-heading">
  Let's <strong>Build Something</strong><br />
  <strong>Great</strong> Together
</h2>

  <p>We’re always excited to work on new ideas.</p>
  <button className="cta-button">Let’s Talk</button>
  
</div>

    </>
  );
};

export default AboutPage;

