import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 px-0 md:px-0 py-8 pt-10 h-90 leading-12 text-white ">
      <div className="flex flex-col md:flex-row justify-between mx-auto w-full container px-15 ">
        <div className="mb-6 md:mb-0 w-full md:w-2/5">
          <img src="/4.png" alt="Logo" className="h-[60px] mx-auto md:mx-0" />
          <p className="mt-5 text-xl">Where Ideas Meet Innovation.</p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-2">Follow Us</h4>
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-2">Sitemap</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Projects</p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-2">Contact</h4>
          <p>Pokak Technologies PVT LTD</p>
          <p>Valamkottil Tower, Kakkanad, Kochi-682021</p>
          <p>+91 9656 033 444</p>
          <p>info@pokaktech.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
