// components/Hero.js
"use client";
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down at least 50px
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef}>
      <div className="home background-hero bg-cover bg-center w-full pt-48 pb-40">
        <div className="container mx-auto px-10 md:px-12">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-7/12 md:w-full">
              <div className="ps-banner-content">
                <h1 className={`text-4xl md:text-5xl font-normal text-white my-10 leading-tight transform transition-all duration-700 ease-out `}>
                  Trusted Surgical Instruments<br />  Supplier in India
                </h1>
                <p className='text-white text-lg max-w-xl'>Welcome to Accusurge, your reliable source for premium surgical instruments, medical equipment, and healthcare products. We proudly serve hospitals, clinics, and healthcare professionals across India, committed to delivering precision and quality.</p>
              </div>
              {/* <div className="ps-banner-btn">
                <a href="#" className={`no-underline btn-hover inline-block max-w-[150px] w-full bg-blue-600 text-white text-base font-medium py-3 rounded-full text-center transition-all duration-700 ease-out delay-300 ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                  <span>SHOP NOW</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ps-banner-content h2 {
          animation: slideIn 1s ease-out forwards;
        }
        
        .ps-banner-btn a {
          animation: slideIn 1s ease-out 0.3s forwards;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}