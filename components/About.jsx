"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const mainContentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Optional: Hide again when leaving viewport
            // setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (mainContentRef.current) {
      observer.observe(mainContentRef.current);
    }

    return () => {
      if (mainContentRef.current) {
        observer.unobserve(mainContentRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-purple-200 font-sans md:px-20 pb-10">
      <div className="container mx-auto p-6">
        <div className="col-span-full">
          <div className="flex justify-between items-center border-b-4 border-double border-gray-200 pb-6">
            <p className="text-2xl font-bold text-gray-800">About Us</p>
          </div>
        </div>
        <main
          ref={mainContentRef}
          className={`about-us flex lg:flex-row flex-col justify-between gap-2 p-10 bg-white rounded-lg shadow-lg mt-[50px] transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className={`about-us-left lg:w-1/2 w-full transition-all duration-800 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'}`}
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">The Accusurge Story</h3>
            <p className="text-gray-600 mb-6 lg:text-[21px]">
              At Accusurge, we believe that every surgical decision and patient outcome depends on one critical factor — precision. As a trusted surgical instruments supplier and medical supply store, we offer durable and advanced medical tools and equipment to support healthcare providers in delivering the best care.
            </p>
            <p className="text-gray-600 mb-6 lg:text-[21px]">Founded recently but grounded in deep industry insight, we balance quality, reliability, and cost-effectiveness to bridge the gap between healthcare facilities and the finest medical instruments globally.</p>
          </div>
          <div
            className={`about-us-right lg:w-1/2 w-full flex justify-end md:ml-2 transition-all duration-800 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'}`}
          >
            <img src="images/about_accusurge.png" alt="Doctor" className="rounded-lg shadow-md max-w-full h-auto" />
          </div>
        </main>
      </div>
    </div>
  );
}