import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Route-based logo selection
  const getLogo = () => {
    switch (true) {
      case location.pathname === '/':
        return '/logos/logo-home.png';
      case location.pathname.startsWith('/about'):
        return '/logos/about-logo.png';
      case location.pathname.startsWith('/services'):
        return '/logos/services-logo.png';
      case location.pathname.startsWith('/industries'):
        return '/logos/industries-logo.png';
      case location.pathname.startsWith('/careers'):
        return '/logos/careers-logo.png';
      case location.pathname.startsWith('/projects'):
        return '/logos/projects-logo.png';
      case location.pathname.startsWith('/contact'):
        return '/logos/contact-logo.png';
      default:
        return '/logos/default-logo.png';
    }
  }

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Industries', link: '/industries' },
    { name: 'Careers', link: '/careers' },
    { name: 'Projects', link: '/projects' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative mt-4 p-0 bg-transparent">
      <div className="mx-auto flex flex-wrap items-center justify-between pt-4">
        <div className="inline-block text-center leading-none text-[#1e3798]">
         <img src={getLogo()} alt="Pokak Technologies Logo" className="h-[40px] object-contain mx-auto" />

        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:w-auto">
          <ul className="text-md flex flex-row space-x-1 rounded-3xl border border-gray-100 bg-[#192434] p-0 px-1 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className={`block px-2 py-2 rounded-sm ${
                    location.pathname === item.link
                      ? 'text-white md:text-blue-700'
                      : 'text-gray-300 hover:text-blue-500'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-1.5">
          <Link to="/contact">
          <button className="rounded bg-gradient-to-br from-purple-600 to-blue-600 p-2 px-4 text-white">
            Contact
          </button>
          </Link>
          <button onClick={toggleMenu} aria-label="Toggle navigation menu">
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBarsStaggered}
              size="2x"
              className="bg-black pr-3 pl-3 rounded pt-1 pb-1 text-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
          <div className="relative w-full max-w-xs bg-[#192434] p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <img src="/3.png" alt="Pokak" className="h-[40px] object-contain" />
              <button onClick={toggleMenu} className="p-2 text-white hover:bg-gray-700">
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>
            </div>
            <ul className="space-y-4 text-white text-lg">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className={`block py-2 px-4 rounded-md ${
                      location.pathname === item.link ? 'bg-blue-700' : 'hover:bg-gray-700'
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded-md bg-gradient-to-r from-purple-600 to-blue-600"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-auto pt-6 border-t border-gray-700 text-sm text-gray-300">
              <p>+91 9656 033 444</p>
              <p>info@pokaktech.com</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
