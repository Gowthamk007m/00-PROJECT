import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="https://pokaktech.com/images/logo.png" alt="Pokak Logo" />
        <p>Where Ideas Meet Innovation.</p>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h4><strong>Follow Us </strong></h4>
          <a href="#">LinkedIn ↗</a>
          <a href="#">Instagram ↗</a>
          <a href="#">Whatsapp ↗</a>
          <a href="#">Facebook ↗</a>
        </div>

        <div className="footer-column">
          <h4><strong>Sitemap </strong></h4>
          <a href="#">Home ↗</a>
          <a href="#">About Us ↗</a>
          <a href="#">Services ↗</a>
          <a href="#">Projects ↗</a>
          <a href="#">Odoo ERP ↗</a>
          <a href="#">Careers ↗</a>
        </div>

        <div className="footer-column">
          <h4><strong>Get in touch</strong></h4>
          <p>Pokak Technologies PVT LTD</p>
          <p>Suit No.414, Valamkottil Tower</p>
          <p>Kakkanad, Kochi–682021</p>
          <p><a href="tel:+919656033444">+91 9656 033 444</a></p>
          <p><a href="mailto:info@pokaktech.com">info@pokaktech.com ↗</a></p>
          <p><a href="mailto:pokaktech@gmail.com">pokaktech@gmail.com ↗</a></p>
        </div>
      </div>
    </footer>
  );
}
