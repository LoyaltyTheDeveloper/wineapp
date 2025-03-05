import React from 'react'
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import wineHero from "/wine-hero.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Navbar() {

  useEffect(() => {
          AOS.init({ duration: 1000, once: true }); 
        }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

  return (<>

  <div className=''>

    <div className="border-gray-200 borde-b pb- 2 flex flex-col items-center">
   
        
    {/* <nav className="w-full bg-blue-600 py-3 px- lg:px-[100px] text-white flex justify-center items-center">
     <div className="flex justify-center items-center">Prices include all taxes and shipping to Switzerland</div>
    </nav> */}

      <nav className="w-full p-3 px-6 text-white flex justify-between items-center borde bg-transparent fixe">
        <button 
          className="text-black text-2xl md:hidden cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="md:flex w-full px-[5%] py-4 justify-center lg:justify-between flex items-center">
          <span className="font-semibold text-[27px] flex text-blue-600 font-bitter cursor-pointer"><Link to="/">Afrique en primeurs</Link></span>
    
          <div className='flex hidden lg:flex text-[black] gap-x-4 font-semibold text-lg font-sans'>
            <div className='hover:animate-bounce cursor-pointer'>Invest</div>
            <div className='hover:animate-bounce cursor-pointer'>Offers</div>
            <div className='hover:animate-bounce cursor-pointer'><Link to='/collections'>Collections</Link></div>
            <div className='hover:animate-bounce cursor-pointer'>Articles</div>
            <div className='hover:animate-bounce cursor-pointer'>Contacts</div>
            <div className='hover:animate-bounce cursor-pointer'>About Us</div>
            <div className='hover:animate-bounce cursor-pointer'>FAQ</div>
          </div>
          
          
          <span className="text-lg font-semibold hidden lg:flex text-black">
          <div className="flex items-center space-x-6 ml-4">
            <div className="flex items-center space-x-2">
              <FiUser className="text-xl" />
              <span>Account</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiShoppingCart className="text-xl" />
              <span>0 items</span>
            </div>
          </div>
          
          </span>

        </div>
        <FiShoppingCart className="text-xl text-black lg:hidden"/>
      </nav>  
    </div>      

    <div className={`fixed top-[px] z-50 left-0 h-full w-full bg-[white] text-white transform ${isOpen ? "translate-x- animate-fade" : "hidden"} transition-transform md:hidden p-4`}>
        <ul className="space-y-4 text-black">
          <li className="text-lg font-semibol">Invest</li>
          <li className="text-lg font-semibol">Offers</li>
          <li className="text-lg font-semibol"><a href="/collections">Collections</a></li>
          <li className="text-lg font-semibol">Articles</li>
          <li className="text-lg font-semibol">Contacts</li>
          <li className="text-lg font-semibol">About Us</li>
          <li className="text-lg font-semibol">FAQ</li>
        </ul>
      </div>
</div>

 </> )
}

export default Navbar
