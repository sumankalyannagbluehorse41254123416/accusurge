"use client";
import React, { useEffect, useState, useRef } from 'react';

export default function Team() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(Array(3).fill(false));
  const lastScrollY = useRef(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      lastScrollY.current = window.scrollY; // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    checkVisibility();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    checkVisibility();
  }, [scrollY]);

  const checkVisibility = () => {
    const teamMembers = document.querySelectorAll('.team-member');
    const newVisibility = [...isVisible];
    
    teamMembers.forEach((member, index) => {
      const rect = member.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isInViewport && !newVisibility[index]) {
        newVisibility[index] = true;
      } else if (!isInViewport && newVisibility[index]) {
        newVisibility[index] = false;
      }
    });
    
    setIsVisible(newVisibility);
  };

  return (
    <div className="py-20 md:px-20 bg-gradient-to-br from-white to-purple-200">
      <div className="lg:max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Meet Our Team</h1>
          <p className="text-gray-600 mt-2">
            Meet the professionals dedicated to sourcing, curating, and delivering the highest quality surgical instruments and healthcare products.
          </p>
        </div>
        <div className="team-grid grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            className={`team-member bg-white rounded-lg shadow-lg border-b-4 border-blue-500 transition-all duration-800 ease-in-out group ${
              isVisible[0] 
                ? 'translate-y-0 opacity-100' 
                : scrollY > lastScrollY.current 
                ? '-translate-y-24 opacity-0' 
                : 'translate-y-24 opacity-0'
            }`}
          >
            <div className="overflow-hidden rounded-t-lg">
              <img 
                src="images/team1-img.jfif" 
                alt="John Marsh" 
                className="w-full h-[325px] object-cover object-[50%_10%] transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="p-2 pb-3 text-center">
              <h2 className="text-xl font-semibold mb-1">Sagar Chakrabarti</h2>
              <p className="text-gray-600">Founder &amp; Director</p>
            </div>
          </div>
          <div 
            className={`team-member bg-white rounded-lg shadow-lg border-b-4 border-blue-500 transition-all duration-800 ease-in-out delay-200 group ${
              isVisible[1] 
                ? 'translate-y-0 opacity-100' 
                : scrollY > lastScrollY.current 
                ? '-translate-y-24 opacity-0' 
                : 'translate-y-24 opacity-0'
            }`}
          >
            <div className="overflow-hidden rounded-t-lg">
              <img 
                src="images/team2-img.jfif" 
                alt="Nancy Martin" 
                className="w-full h-[325px] object-cover object-[50%_-10%] transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="p-2 pb-3 text-center">
              <h2 className="text-xl font-semibold mb-1">Badal Chandra Paul</h2>
              <p className="text-gray-600">Leader</p>
            </div>
          </div>
          <div 
            className={`team-member bg-white rounded-lg shadow-lg border-b-4 border-blue-500 transition-all duration-800 ease-in-out delay-400 group ${
              isVisible[2] 
                ? 'translate-y-0 opacity-100' 
                : scrollY > lastScrollY.current 
                ? '-translate-y-24 opacity-0' 
                : 'translate-y-24 opacity-0'
            }`}
          >
            <div className="overflow-hidden rounded-t-lg">
              <img 
                src="images/team3-img.jfif" 
                alt="Martin Guptil" 
                className="w-full h-[325px] object-cover object-[50%_28%] transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="p-2 pb-3 text-center">
              <h2 className="text-xl font-semibold mb-1">Tatan Kumar Sarangi</h2>
              <p className="text-gray-600">Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}