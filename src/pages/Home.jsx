import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import './Home.css'; // You can create this for specific styles

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="nav-bar-background">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">
            <button className="contact-button">Contact</button>
          </Link>
        </nav>
      </div>

      {/* Your main home content here */}
      <section className="home-hero">
        <h1>Empowering Businesses with <strong>Scalable Tech Solutions</strong></h1>
        <p>From custom web platforms to complete ERP systems, we craft innovative digital experiences.</p>
        <button className="cta-button">Explore Our Services</button>
      </section>

      <Footer />
    </>
  );
};

export default Home;

