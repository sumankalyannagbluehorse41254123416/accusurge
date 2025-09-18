// components/Banners.js
"use client";
import { useEffect, useRef } from 'react';

export default function Banners() {
  const bannerRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      bannerRefs.current.forEach((banner, index) => {
        if (!banner) return;
        
        const rect = banner.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isInViewport) {
          // Add delay based on index for sequential animation
          setTimeout(() => {
            banner.style.transform = 'translateY(0)';
            banner.style.opacity = '1';
          }, index * 100); // 100ms delay between each banner
        } else {
          const scrollDirection = window.scrollY > (window.lastScrollY || 0) ? 'down' : 'up';
          
          if (scrollDirection === 'down') {
            // When scrolling down, banners move up from bottom
            setTimeout(() => {
              banner.style.transform = 'translateY(50px)';
              banner.style.opacity = '0';
            }, index * 100);
          } else {
            // When scrolling up, banners move down from top
            setTimeout(() => {
              banner.style.transform = 'translateY(-50px)';
              banner.style.opacity = '0';
            }, index * 100);
          }
        }
      });
      
      window.lastScrollY = window.scrollY;
    };

    // Initialize styles
    bannerRefs.current.forEach((banner, index) => {
      if (banner) {
        banner.style.transition = `transform 0.5s ease ${index * 100}ms, opacity 0.5s ease ${index * 100}ms`;
        banner.style.transform = 'translateY(50px)';
        banner.style.opacity = '0';
      }
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on mount to check initial position
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container md:px-10 py-20 mx-auto">
      <div className="flex flex-wrap mx-4">
        <div className="w-full lg:w-4/12 md:w-6/12 px-3 mb-8">
          <div className="text-center">
            <a href="#" className="no-underline">
              <div ref={el => bannerRefs.current[0] = el}>
                <img src="images/accusurge_banner1.png" alt="Ad 1" className="w-full rounded-lg" />
              </div>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-4/12 md:w-6/12 px-3 mb-8">
          <div className="text-center">
            <a href="#" className="no-underline">
              <div ref={el => bannerRefs.current[1] = el}>
                <img src="images/accusurge_banner2.png" alt="Ad 2" className="w-full rounded-lg" />
              </div>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-4/12 md:w-6/12 px-3 mb-8">
          <div className="text-center">
            <a href="#" className="no-underline">
              <div ref={el => bannerRefs.current[2] = el}>
                <img src="images/accusurge_banner.png" alt="Ad 3" className="w-full rounded-lg"  />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}