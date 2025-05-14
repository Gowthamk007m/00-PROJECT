import React, { useState } from 'react';
import "./ContactPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';

function App() {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation data
  const navItems = [
    { name: 'Home', link: '#', current: true },
    { name: 'About Us', link: '#', current: false },
    { name: 'Services', link: '#', current: false },
    { name: 'Industries', link: '#', current: false },
    { name: 'Careers', link: '#', current: false },
    { name: 'Projects', link: '#', current: false },
  ];

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="mx-auto w-5/6">
        <div className="">
          <header className="relative mt-10 p-0">
            <div className="mx-auto flex flex-wrap items-center justify-between pt-4">
              <div className="inline-block text-center leading-none text-[#1e3798]">
                <img src="/3.png" alt="Pokak Technologies Logo" className="h-[60px] object-contain mx-auto" />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden w-full items-center justify-between md:flex md:w-auto">
                <ul className="text-md mt-4 flex flex-col rounded-lg border border-gray-100 bg-[#192434] p-4 font-medium md:mt-0 md:flex-row md:space-x-6 md:rounded-3xl md:p-2 md:pr-6 md:pl-6">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link}
                        className={`block rounded-sm px-3 py-2 ${
                          item.current
                            ? 'text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500'
                            : 'text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                        }`}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-around gap-1.5">
                <button className="rounded bg-[linear-gradient(to_bottom_right,_#9845ff_0%,_#254cd1_20%,_#254cd1_90%,_#9845ff_100%)] p-2 pr-4 pl-4 text-white">
                  Contact
                </button>

                <button 
                  className="rounded "
                  onClick={toggleMenu}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  <FontAwesomeIcon
                    icon={isMenuOpen ? faXmark : faBarsStaggered}
                    size="2x"
                    className="bg-black pr-3 pl-3 rounded pt-1 pb-1 text-white"
                  />
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 z-50 flex md:hidden">
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50"
                  onClick={toggleMenu}
                  aria-hidden="true"
                ></div>
                <div className="relative w-full max-w-xs bg-[#192434] p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="inline-block text-center leading-none">
                      <img src="/3.png" alt="Pokak Technologies Logo" className="h-[40px] object-contain" />
                    </div>
                    <button
                      onClick={toggleMenu}
                      className="rounded-full p-2 text-white hover:bg-gray-700"
                    >
                      <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                  </div>
                  <ul className="space-y-4 text-white text-lg">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.link}
                          className={`block py-2 px-4 rounded-md ${
                            item.current
                              ? 'bg-blue-700 text-white'
                              : 'text-white hover:bg-gray-700'
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
                        className="block py-2 px-4 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        onClick={toggleMenu}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="mt-auto pt-6 border-t border-gray-700">
                    <p className="text-gray-300 text-sm">
                      +91 9656 033 444
                    </p>
                    <p className="text-gray-300 text-sm">
                      info@pokaktech.com
                    </p>
                  </div>
                </div>
              </div>
            )}
          </header>

          <main>
            <div className="mt-30 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-7xl leading-tight md:w-7/8 lg:w-6/9">
                  We'd <span className="font-bold">Love to Hear</span> From You
                </h1>
              </div>
              <div className="md:col-start-3 text-xl">
                <p>
                  Whether you have a question about our services, need support,
                  or want to discuss a potential project, our team is ready to
                  assist you. Reach out to us through the channels below, and
                  we'll get back to you as soon as possible.
                </p>
              </div>
            </div>

            <div className="mt-20 mb-10 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2 gap-4">
                <h1 className="mb-3 text-4xl font-bold">Get in touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 font-medium">
                  <div className="leading-10">
                    <p>+91 9656 033 444</p>
                    <p> info@pokaktech.com</p>
                    <p> pokaktech@gmail.com</p>
                    <iframe
                      title="Pokak Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.267383512531!2d76.362!3d10.015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d3c3b8e0fef%3A0x4b4d6913f7ef4784!2sValamkottil%20Towers%2C%20Kakkanad%2C%20Kochi%2C%20Kerala%20682021!5e0!3m2!1sen!2sin!4v1683384243652!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="mt-4 h-68 w-full md:w-140 rounded border-0 shadow-lg"
                    />
                  </div>
                  <div className="mt-4 md:mt-0">
                    <p>
                      Pokak Technologies PVT LTD
                      <br />
                      Suit No.414 Valamkottil Tower
                      <br />
                      Kakkanad, Kochi-682021
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 md:col-start-3">
                <form className="mx-auto max-w-2xl rounded-2xl bg-radial-[at_50%_50%] from-[#2A4DD0] to-[#6C63FF] to-90% text-white">
                  <div className="text-md mb-2 -ml-2 w-fit rounded-br-2xl bg-[#f4f7fe] p-5 text-black">
                    Send Us a Message
                  </div>
           
                  <div className="p-6 md:p-15">
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="group relative z-0 mb-5 w-full">
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          className="peer block w-full appearance-none border-0 border-b-2 border-[#f4f7fe70] bg-transparent px-0 py-2.5 text-xl text-white focus:border-blue-300 focus:outline-none focus:ring-0"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="first_name"
                          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-white/70 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium"
                        >
                          First name*
                        </label>
                      </div>
                      <div className="group relative z-0 mb-5 w-full">
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          className="peer block w-full appearance-none border-0 border-b-2 border-[#f4f7fe70] bg-transparent px-0 py-2.5 text-xl text-white focus:border-blue-300 focus:outline-none focus:ring-0"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="last_name"
                          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-white/70 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium"
                        >
                          Last name*
                        </label>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="group relative z-0 mb-5 w-full">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="peer block w-full appearance-none border-0 border-b-2 border-[#f4f7fe70] bg-transparent px-0 py-2.5 text-xl text-white focus:border-blue-300 focus:outline-none focus:ring-0"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="phone"
                          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-white/70 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium"
                        >
                          Phone*
                        </label>
                      </div>
                      <div className="group relative z-0 mb-5 w-full">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="peer block w-full appearance-none border-0 border-b-2 border-[#f4f7fe70] bg-transparent px-0 py-2.5 text-xl text-white focus:border-blue-300 focus:outline-none focus:ring-0"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="email"
                          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-white/70 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium"
                        >
                          Email*
                        </label>
                      </div>
                    </div>

                    <div className="group relative z-0 mb-5 w-full">
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        className="peer block w-full resize-none appearance-none border-0 border-b-2 border-[#f4f7fe70] bg-transparent px-0 py-2.5 text-xl text-white focus:border-blue-300 focus:outline-none focus:ring-0"
                        placeholder=" "
                        required
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-white/70 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium"
                      >
                        Message
                      </label>
                    </div>

                    <div className="mb-5 flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="privacy"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <label
                        htmlFor="privacy"
                        className="ms-2 text-sm font-medium text-white"
                      >
                        By clicking the Submit button below, I agree to Pokak's
                        Privacy Policy
                      </label>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="rounded-lg bg-white px-5 py-2.5 text-center text-xl font-medium text-black"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>

      <footer className="bg-[linear-gradient(to_bottom_right,_#6C63FF_4%,_#2A4DD0_20%,_#6C63FF_90%,_#9845ff_100%)] px-6 md:px-12 py-8 leading-10 text-white">
        <div className="mx-auto flex flex-col md:flex-row w-full md:w-6/7 justify-between">
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <div className="inline-block text-center leading-none text-[#1e3798]">
              <img src="/4.png" alt="Pokak Technologies Logo" className="h-[60px] object-contain mx-auto md:mx-0" />
            </div>
            <p className="mt-5 mb-1 text-2xl font-semibold">
              Where Ideas Meet Innovation.
            </p>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="mb-2 text-3xl font-semibold">Follow Us</h4>
            <p className="mb-1">LinkedIn</p>
            <p className="mb-1">Instagram</p>
            <p className="mb-1">WhatsApp</p>
            <p className="mb-1">Facebook</p>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="mb-2 text-3xl font-semibold">Sitemap</h4>
            <p className="mb-1">Home</p>
            <p className="mb-1">About Us</p>
            <p className="mb-1">Services</p>
            <p className="mb-1">Projects</p>
            <p className="mb-1">Odoo ERP</p>
            <p className="mb-1">Careers</p>
          </div>
          <div className="w-full md:w-1/5">
            <h4 className="mb-4 text-3xl font-semibold">Get in touch</h4>
            <p className="mb-1 leading-5">
              Pokak Technologies PVT LTD <br />
              Suit No.414 Valamkottil Tower <br />
              Kakkanad, Kochi-682021 <br />
            </p>

            <p className="mb-1">+91 9656 033 444</p>
            <p className="mb-1">info@pokaktech.com</p>
            <p className="mb-1">pokaktech@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;