import React from 'react'
import { useState, useEffect } from "react";
import wineHero from "/wine-hero.jpg";
import image2 from "/image2.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import image3 from "/image3.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const images = [
    "/image2.jpg",
    "/image3.jpg",
  ];

function Landing() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); 
      }, []);

      

 const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade-in effect
      }, 300); // Transition duration
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (<>

         
          {/* <img src={wineHero} className="object-contain w-full h-[400px] lg:h-[800px" alt="Wine Hero" />
          <div className="absolute right-3/4 top-[-50%] animate-fade-left inset-0 flex items-center justify-center text-white text-4xl font-bold">
            Invest in wine<br></br>with
          </div> */}

<div className='relative'>
      <img src={wineHero} className="object-cover object-contai w-screen h-[500px] lg:h-[700px]" alt="Wine Hero" />
<div className="absolute top-[150px] lg:top-[200px] left-[10px] lg:left-[40px] lg-[20px] -translate-y-1/2 animate-fade-lef  text-white text-[40px]" data-aos="fade-left">
  <div className='flex text-[25px] lg:w-[500px] lg:text-[40px] font-bold font-bitter'>
    Invest in wine with a safe and profitable investment model
    </div>
    <div className='mt-4'>
        <button className='bg-blue-600 px-[20px] lg:px-[35px] py-[15px] text-[11px] lg:text-[14px]'>DOWNLOAD INVESTMENT GUIDE</button>
    </div>
</div>
</div>



<div className='fle justify-cente px-[5%] md:px-[25%] lg:px-[25p%] pt-[30px] pb-[30px] mb-[30px] bg-[#F9F9F9] animate-fade-left'>
    <h1 className='flex justify-center text-[27px] font-bold font-bitter' data-aos="fade-down">WHY INVEST IN WINE</h1>
<div className='flex flex-col gap-y-4 mt-4'>
    <div className='text-center' data-aos="fade-down">Fine wine has emerged as one of the most trending alternative assets. Market readability and data-backed performance have unleashed what has been for centuries a well-kept secret, or for the least an insider’s privilege.</div>
    <div className='text-center' data-aos="fade-down">The word has now spread that investment grade wines are outperforming traditional market indices. Over the past 20 years, fine wine has demonstrated its resilience in the face of economic and political turmoil, yielding an 8% annualized return, ahead of the S&P 500 and the Dow Jones.</div>
    <div className='text-center' data-aos="fade-down">The great news is that the momentum is showing no signs of weakening. Limited production, rising demand and decline of supply create unique market conditions. With more and more newcomers investing in wine, the misbalance between offer and demand is bound to increase, continuing to push prices upwards.
    <div className='text-center' data-aos="fade-down">Numbers aside, wine offers a unique opportunity to invest into something meaningful. Where some fear that the financialization of wine is overtaking a world of emotions and taste, we see cultural values providing another dimension to wealth.</div>
    <div className='text-center' data-aos="fade-down">No other asset can pride itself for its financial performance and for its sacred character. Wine is rooted in the history of civilization and, until the end times, irrespective of political borders and origins, will stand out as a unifying symbol of prestige, a symbol that can be shared and enjoyed throughout your life.</div>
</div>

</div>

</div>

<div className=''>
<img src={image2} className="object-cove object-contain w-screen h-[600px] lg:h-[700px]" data-aos='fade-in' alt="Wine Hero" />
<div className='bg-[#F9F9F9] py-12'>
    <h1 className='flex justify-center text-center text-[27px] font-bold font-bitter' data-aos='fade-down'>The Wine Investment<br></br>
    Virtuous Circle</h1>
    <p className='flex justify-center text-center mt-4' data-aos='fade-down'>Build your wealth and heritage with perpetual mechanism of growth</p>
</div>
</div>



<div className="relative">
  <img 
    src={image3} 
    className="object-cover w-screen h-[350px] lg:h-[400px]" 
    alt="Wine Hero"
    data-aos="fade-in"
  />
  
 
  <div 
    className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6" 
    
  >
    <div className="text-[35px] lg:text-[40px] font-bold font-bitter" data-aos="fade-down">
      Discover our investment model
    </div>

    <div className="text-[20px] lg:px-[200px] mt-4" data-aos="fade-down">
      We build investment portfolios with the rigor of a financial advisor and the devotion of a private concierge
    </div>
    
    <div className='mt-4 lg:mt-8' data-aos="fade-down">
        <button className='bg-blue-600 px-[20px] lg:px-[35px] py-[15px] text-[11px] lg:text-[14px]'>BOOK YOUR INTRO CALL NOW</button>
    </div>

  </div>
</div>

<div className='fle justify-cente px-[5%] md:px-[25%] lg:px-[25p%] pt-[30px] pb-[30px] mb-[30px] bg-[#F9F9F9] animate-fade-left'>
    <h1 className='flex justify-center text-[27px] font-bold font-bitter' data-aos="fade-down">Investment grade wines
    </h1>
<div className='flex flex-col gap-y-4 mt-4'>
    <div className='text-center' data-aos="fade-down">Investment grade wines are the exception rather than the norm. We nurture privileged relationships with reputable merchants to ensure access and provisioning of the exceptional.</div>
    <div className='text-center' data-aos="fade-down">We favor ex-Château provenance and direct estate allocations to comply with the highest quality standards. We embrace brands that hold a longstanding place of choice in the history and meet all # 6 characteristics that make them investment worthy.</div>
</div>

</div>


<div className="relative w-full overflow-hidden" data-aos='fade-in'>
      <img
        src={images[currentIndex]}
        alt="carousel"
        className={`w-screen h-[300px] lg:h-[400px] object-cover transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>

    <div className="flex justify-center gap-x-8 py-4 bg-[#F9F9F9]">
        <div data-aos='fade-down'><FaLinkedinIn className='size-[40px]'/></div>
        <div data-aos='fade-down'><FaFacebook className='size-[40px]'/></div>
        <div data-aos='fade-down'><FaInstagram className='size-[40px]'/></div>
    </div>
 
   
  </>)
}

export default Landing
