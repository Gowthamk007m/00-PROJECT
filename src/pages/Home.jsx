import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar-Home';
import CircularContact from '../components/CircularContact';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section with background image */}
      <div
        className="bg-[url('/img/home.png')] bg-cover bg-center bg-no-repeat text-white"
      >
        <Navbar />

        <main className="flex flex-col items-center justify-center h-[700px] text-center px-4 md:px-8 ">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Empowering Businesses</h1>
          <h1 className="text-3xl md:text-7xl tracking-[1px] mb-7 ">with Scalable Tech Solutions</h1>

          <p className='w-2/5 text-lg leading-6 mt-6 mb-6'>From custom web platforms to complete ERP systems, we craft innovative digital experiences</p>

          <button className='p-2 border rounded mt-3 '>
            Explore our services
          </button>

<div className=" pr-10 absolute right-4 bottom-0">
  <CircularContact />
</div>

        </main>
      </div>

      {/* Footer outside background image */}
      <Footer />
    </div>
  );
};

export default Home;
