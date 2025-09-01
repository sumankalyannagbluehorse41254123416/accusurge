"use client";
import { useState, useEffect, useRef } from 'react';

export default function Categories() {
  const categories = [
    { img: 'medicine.png', title: 'Allopathic', alt: 'Allopathic' },
    { img: 'ayurveda.png', title: 'Ayurveda', alt: 'Ayurveda' },
    { img: 'homeopathy.png', title: 'Homeopathy', alt: 'Homeopathy' },
    { img: 'mask.png', title: 'More Accessories', alt: 'More Accessories' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Clear the timeout
      clearTimeout(scrollTimeout.current);

      // Get current scroll position
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';

      // Get section position
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const windowHeight = window.innerHeight;

        // If section is in viewport
        if (sectionTop < windowHeight * 0.8 && sectionTop > 0) {
          if (scrollDirection === 'down') {
            // Scroll down - animate in from sides
            setIsVisible(true);
          } else {
            // Scroll up - animate out to sides
            setIsVisible(false);
          }
        }
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY;

      // Set a timeout to run after scrolling ends
      scrollTimeout.current = setTimeout(() => {
        // When scrolling stops, ensure section is visible if in viewport
        if (sectionRef.current) {
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const sectionTop = sectionRect.top;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight * 0.8 && sectionTop > 0) {
            setIsVisible(true);
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case the section is already in view on page load
    const initialCheck = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8 && sectionTop > 0) {
          setIsVisible(true);
        }
      }
    };

    // Run initial check after a short delay to ensure DOM is fully rendered
    const initialCheckTimeout = setTimeout(initialCheck, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
      clearTimeout(initialCheckTimeout);
    };
  }, []);

  return (
    <div ref={sectionRef} className="category-section py-10 pb-11 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div 
            className="left-category-content lg:w-5/12 w-full mb-8 lg:mb-0" 
            style={{ 
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)', 
              opacity: isVisible ? 1 : 0, 
              transition: 'transform 0.8s ease, opacity 0.8s ease' 
            }}
          >
            <div>
              <h4 className="text-3xl font-bold text-gray-900">Shop by categories</h4>
              <p className="text-base text-gray-500 font-normal max-w-xs mt-6 leading-6">
                consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua
                enim ad minim veniam nostrud exercit.
              </p>
            </div>
          </div>
          <div 
            className="right-category-content lg:w-7/12 w-full" 
            style={{ 
              transform: isVisible ? 'translateX(0)' : 'translateX(100px)', 
              opacity: isVisible ? 1 : 0, 
              transition: 'transform 0.8s ease, opacity 0.8s ease' 
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-white rounded-lg shadow-lg p-9 hover:-translate-y-2 transition-transform duration-500"
                >
                  <img 
                    src={`images/${category.img}`} 
                    alt={category.alt} 
                    className="w-12 h-12" 
                  />
                  <p className="text-lg font-bold text-gray-900 pl-5">{category.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}