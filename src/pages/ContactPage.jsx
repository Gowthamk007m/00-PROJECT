import React, { useState } from 'react';
import "./ContactPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App() {


  return (
    <div>
      <div className="mx-auto  container px-15">
      <Navbar/>
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
                      className="mt-4 h-96 w-full md:w-140 rounded border-0 shadow-lg"
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
          <Footer/>
    </div>
  );
}

export default App;