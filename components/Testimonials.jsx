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

  // Handle autoplay
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
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
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Clients Feedbacks</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          {/* Slider container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col h-full">
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
                      <p className="text-blue-600">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto text-blue-400 text-4xl">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          <i className="fas fa-star"></i>
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">12 June 2023</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button 
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
          </button>
        </div>

        {/* Pagination and controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button 
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
          </button>
          
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
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">Swipe to navigate on mobile devices</p>
          <div className="flex justify-center mt-2">
            <i className="fas fa-arrows-left-right text-blue-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;