import React from 'react'
import { FiArrowRight } from "react-icons/fi";
function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-10 px-6 pt-20">
      <div className="ma-w-6xl pb-8 mx-auto flex flex-col lg:flex-row justify-between lg:items-center gap-x-10 gap-y-8">
        {/* Logo Section */}
        <div>
        <span className="font-semibold text-[27px] flex text-blue-600 font-bitter" data-aos='fade-down'>Afrique en primeurs</span>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3" data-aos='fade-down'>Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400" data-aos='fade-down'>Home</a></li>
            <li><a href="#" className="hover:text-gray-400" data-aos='fade-down'>Shop</a></li>
            <li><a href="#" className="hover:text-gray-400" data-aos='fade-down'>Contact</a></li>
            <li><a href="#" className="hover:text-gray-400" data-aos='fade-down'>Search</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3" data-aos='fade-down'>Store Policies</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400" data-aos='fade-down'>About Us</a></li>
            <li><a href="#" className="hover:text-gray-400" data-aos='fade-down'>FAQ</a></li>
            <li><a href="#" className="hover:text-gray-400" data-aos='fade-down'>Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400" data-aos='fade-down'>Terms of Service</a></li>
          </ul>
        </div>

     
        <div className="w-full lg:w-auto">
          <h2 className="text-lg font-semibold mb-3" data-aos='fade-down'>Join our members list to stay tuned to the market pulse</h2>
          <form className="flex flex-col gap-3">
          <div className="flex items-center gap-2 w-full lg:w-auto" data-aos='fade-down'>
          <input
            className="bg-transparent border-b border-black outline-none w-full lg:w-[300px] px-2 py-1"
            placeholder="Enter email"
            name="email"
          />
          <button className="p-3 bg-black text-white rounded-full hover:bg-blue-300 transition duration-300">
            <FiArrowRight className="text-xl" />
          </button>
        </div> 
          </form>
          
        </div>
        
      </div>
      <hr className='px-[20%] mt-10 mb-4'></hr>
      <div className='text-xs flex text-center justify-center'>© 2025 Lafleur Wines. | Lafleur Wines Broking is owned and operated by Lafleur Wines sàrl, 8C Chemin du Domaine-Patry, 122 Chêne-Bougeries, Geneva, Switzerland | VAT reg. CHE-386.652.77</div>
    </footer>
    </div>
  )
}

export default Footer
