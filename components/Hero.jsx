"use client";
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      lastScrollY = currentScrollY;
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
              <div className={`ps-banner-content ${scrollDirection === 'down' ? 'slide-down' : 'slide-up'}`}>
                <h1 className="text-4xl md:text-5xl font-medium text-white my-10 leading-tight">
                  Trusted Surgical Instruments<br /> Supplier in India
                </h1>
                <p className="text-white text-lg max-w-xl">
                  Welcome to Accusurge, your reliable source for premium surgical instruments, medical equipment, and healthcare products. We proudly serve hospitals, clinics, and healthcare professionals across India, committed to delivering precision and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ps-banner-content {
          animation: ${scrollDirection === 'down' ? 'slideDown' : 'slideUp'} 1s ease-out forwards;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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