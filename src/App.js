import "./App.css";
import React, { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-Bluish Purple-600 text-white fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="font-bold text-xl flex items-center">
              <span className="text-2xl mr-1">•</span> ATDIGITAL
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-200">SERVICES</a>
            <a href="#" className="hover:text-blue-200">ABOUT US</a>
            <a href="#" className="hover:text-blue-200">CONTACT US</a>
            <a href="#" className="hover:text-blue-200">CAREERS</a>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-blue-700 py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              <a href="#" className="block py-2 hover:text-blue-200">SERVICES</a>
              <a href="#" className="block py-2 hover:text-blue-200">ABOUT US</a>
              <a href="#" className="block py-2 hover:text-blue-200">CONTACT US</a>
              <a href="#" className="block py-2 hover:text-blue-200">CAREERS</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Removed mt-[77px] to eliminate space */}
      <div>
        <section className="relative bg-cover bg-center hero-section" style={{ backgroundImage: "url('/images/atdigital.jfif')", marginTop: "60px" }}>
          <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center h-full">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8 flex flex-col justify-center">
              <div className="hero-text-box">
                <h1 className="text-hero-title">
                  We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
                </h1>
                <div className="">
                  <button className="bg-button-color text-white px-6 py-3 rounded-md font-semibold hover:bg-button-hover transition duration-300 whitespace-nowrap">
                    GET FREE CONSULTATION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Web & Mobile App Development Section */}
      <section className="my-8 mobile-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-[108px] mobile-content">
            <div className="w-full md:w-[414px]">
              <img src="/images/web.png" alt="Web & Mobile App Development" className="w-[414px] h-[414px] object-cover rounded-lg mobile-image" />
            </div>
            <div className="w-full md:w-[542px] flex flex-col justify-between">
              <h2 className="text-[27px] font-semibold text-indigo-600 leading-[33px] mb-4 mobile-title">
                Web & Mobile App Development
              </h2>
              <p className="text-[16px] text-black leading-none mb-4 mobile-text">
                Your web and mobile Apps are pieces of the puzzle to give your business an edge over competitors. We use frameworks that tailor content and engagement methods to your target audience.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded w-fit mt-2 mobile-button">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Strategy Consulting Section */}
      <section className="my-8 mobile-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-[108px] mobile-content">
            <div className="w-full md:w-[414px]">
              <img src="/images/tool.png" alt="Digital Strategy Consulting" className="w-[414px] h-[414px] object-cover rounded-lg mobile-image" />
            </div>
            <div className="w-full md:w-[542px] flex flex-col justify-between">
              <h2 className="text-[27px] font-semibold text-indigo-600 leading-[33px] mb-4 mobile-title">
                Digital Strategy Consulting
              </h2>
              <p className="text-[16px] text-black leading-none mb-4 mobile-text">
                Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation. We analyze different elements shown by your potential customers and create strategic solutions to find the most efficient model for your business.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded w-fit mt-2 mobile-button">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-white p-6 flex justify-between items-center cursor-pointer" onClick={() => console.log('Toggle Answer')}>
                <h3 className="faq-question-text">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h3>
                <button className="faq-toggle-button">+</button>
              </div>
              <div className="p-6 bg-blue-100">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Facibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-white p-6 flex justify-between items-center cursor-pointer" onClick={() => console.log('Toggle Answer')}>
                <h3 className="faq-question-text">Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</h3>
                <button className="faq-toggle-button">-</button>
              </div>
              <div className="p-6 bg-blue-100">
                <p className="text-gray-600">
                  
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-gary-200 rounded-lg overflow-hidden">
              <div className="bg-white p-6 flex justify-between items-center cursor-pointer" onClick={() => console.log('Toggle Answer')}>
                <h3 className="faq-question-text">Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</h3>
                <button className="faq-toggle-button">-</button>
              </div>
              <div className="p-6 bg-blue-100">
                <p className="text-gray-600">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ice ice baby-600 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-1">•</span> atdigital
              </h3>
              <p className="text-blue-200 mb-4">
                Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Technologies</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white">ReactJS</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Gatsby</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">NextJS</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">NodeJS</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">GraphQL</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Laravel</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white">Social Media Marketing</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Web & Mobile App Development</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Data & Analytics</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Google Marketing Solutions</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Search Engine Optimization</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-500 mt-8 pt-8 text-center">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-blue-200 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white">Terms & Conditions</a>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
