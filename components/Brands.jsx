"use client";
import { useEffect, useRef } from 'react';

export default function Brands() {
  const brandItemsRef = useRef([]);

  useEffect(() => {
    // Set initial state for all items
    brandItemsRef.current.forEach(item => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      }
    });

    // Track scroll direction and animation states
    let lastScrollTop = 0;
    let scrollDirection = 'down';
    const animatedItems = new Set();

    // Function to check if element is in viewport
    function isInViewport(element) {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0
      );
    }

    // Function to handle scroll animation
    function handleScrollAnimation() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Determine scroll direction
      scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = scrollTop;

      // Animate items based on scroll position and direction
      brandItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        // Only animate if not already animated
        if (isInViewport(item) && !animatedItems.has(item)) {
          // Mark as animated
          animatedItems.add(item);

          // Add delay based on index for staggered animation
          const delay = index * 0.1;

          setTimeout(() => {
            if (scrollDirection === 'down') {
              // Animate from top to bottom when scrolling down
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            } else {
              // Animate from bottom to top when scrolling up
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }
          }, delay * 1000);
        } else if (scrollTop < 100) {
          // Reset animation if scrolled to top
          item.style.opacity = '0';
          item.style.transform = scrollDirection === 'down' ?
            'translateY(-50px)' : 'translateY(50px)';
          // Remove from animated set when reset
          animatedItems.delete(item);
        }
      });
    }

    // Initial check on component mount
    setTimeout(handleScrollAnimation, 500);

    // Listen for scroll events with throttling
    let scrolling = false;
    const scrollHandler = () => {
      if (!scrolling) {
        scrolling = true;
        setTimeout(() => {
          handleScrollAnimation();
          scrolling = false;
        }, 100);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className="bg-white py-10 md:px-20 mx-4">
      <div className="container mx-auto">
        <div className="flex flex-col ">
          <div className="col-span-full">
            <div className="flex justify-between items-center border-b-4 border-double border-gray-200 pb-6">
              <p className="text-2xl font-bold text-gray-800">Explore by Brand</p>
              <a href="#" className="text-base underline text-blue-600 font-bold no-underline">View All</a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
            {[...Array(10)].map((_, index) => (
              <a 
                key={index}
                href="#" 
                className="brand-img"
                ref={el => brandItemsRef.current[index] = el}
              >
                <img 
                  src={`images/brand-${index + 1}.png`} 
                  className="w-full transition-transform duration-300 hover:-translate-x-1 shadow-[0_2px_4px_0_rgba(0,0,0,0.1),0_3px_10px_0_rgba(0,0,0,0.08)]" 
                  alt={`Brand ${index + 1}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}