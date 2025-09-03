"use client"
import React, { useState, useEffect, useRef } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Elizabeth Andrew",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et doloe magna aliqua. Ut enim ad minim veniamuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatis aute irure dolr in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 2,
      name: "Leonard Simon",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et doloe magna aliqua. Ut enim ad minim veniamuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatis aute irure dolr in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 3,
      name: "Maria Tracey",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "Consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et doloe magna aliqua. Ut enim ad minim veniamuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatis aute irure dolr in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 4,
      name: "John Peterson",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      content: "Consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et doloe magna aliqua. Ut enim ad minim veniamuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatis aute irure dolr in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  // Handle autoplay with seamless looping
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => {
          // If on the last slide, jump to the first slide instantly
          if (prev >= testimonials.length - getSlidesPerView()) {
            return 0;
          }
          return prev + 1;
        });
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => {
      // If on the last slide, jump to the first slide
      if (prev >= testimonials.length - getSlidesPerView()) {
        return 0;
      }
      return prev + 1;
    });
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => {
      // If on the first slide, jump to the last slide
      if (prev === 0) {
        return testimonials.length - getSlidesPerView();
      }
      return prev - 1;
    });
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Helper function to determine slidesPerView based on window width
  function getSlidesPerView() {
    const width = window.innerWidth;
    if (width >= 1024) return 3; // 3 slides for large screens
    if (width >= 768) return 2; // 2 slides for medium screens
    return 1; // 1 slide for small screens
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-4 lg:py-8 px-4">
      <div className="w-full max-w-7xl mx-auto py-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Clients Feedbacks</h2>
         
        </div>

        <div className="relative overflow-hidden rounded-x pt-10">
          {/* Slider container */}
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * (100 / getSlidesPerView())}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                style={{ width: `${100 / getSlidesPerView()}%` }}
              >
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col h-full relative">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-black">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto text-blue-400 text-4xl">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 flex-grow">
                    <p className="text-gray-600 flex-grow mb-0">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          <i className="fas fa-star"></i>
                        </span>
                      ))}
                    </div>

                  </div>
                  <div className="ps-testm-quote">
                    <img src="images/quote.png" alt="Quote" />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          {/* <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition-colors"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition-colors"
          >
            <i className="fas fa-chevron-right"></i>
          </button> */}
        </div>

        {/* Pagination and controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          {/* <button 
            onClick={toggleAutoplay}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            {isPlaying ? (
              <>
                <i className="fas fa-pause mr-2"></i> Pause
              </>
            ) : (
              <>
                <i className="fas fa-play mr-2"></i> Play
              </>
            )}
          </button> */}

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Responsive indicators */}
        {/* <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">Swipe to navigate on mobile devices</p>
          <div className="flex justify-center mt-2">
            <i className="fas fa-arrows-left-right text-blue-500"></i>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialSlider;