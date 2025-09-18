"use client"
import React, { useState, useEffect, useRef } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Ananya Sharma",
      role: "Senior Surgeon, Apollo Hospitals",
      image: "images/testimonial_photo1.jpg",
      content: "Accusurge delivers exactly what we need, on time and with consistent quality. Their surgical instruments have been a game changer for our hospital. The durability and precision of their tools have enhanced surgical outcomes and reduced complications."
    },
    {
      id: 2,
      name: "Rajesh Mehta",
      role: "Procurement Head, Fortis Healthcare",
      image: "images/testimonial_photo2.jpg",
      content: "Reliable equipment, fast delivery, and transparent pricing. Accusurge is now our trusted partner for medical supplies. They maintain professionalism at every step, from consultation to after-sales support, making procurement stress-free for us."
    },
    {
      id: 3,
      name: "Dr. Priya Nair",
      role: "Consultant, Medanta Hospital",
      image: "images/testimonal photo.jpg",
      content: "The precision of their instruments has improved the confidence of my surgical team. Truly world-class. I appreciate their strict adherence to safety standards and their dedication to constant product innovation."
    },
    {
      id: 4,
      name: "Amitabh Gupta",
      role: "Hospital Administrator, Max Healthcare",
      image: "images/testimonial_photo4.jpg",
      content: "We recently set up a new ICU, and Accusurge handled everything — from monitors to infusion pumps. Highly professional service. They guided us in selecting the right models and ensured everything was installed smoothly without delays."
    }
  ];

  // Create duplicated slides for infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesPerView(3);
      else if (width >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle autoplay with seamless infinite looping
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => {
          // If we've reached the end of the duplicated slides, reset to beginning
          if (prev >= testimonials.length) {
            return 1; // Start from the first slide (not 0 to avoid jump)
          }
          return prev + 1;
        });
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, testimonials.length]);

  // Reset to beginning when we reach the end of the duplicated slides
  useEffect(() => {
    if (currentSlide === testimonials.length) {
      // After the transition is complete, instantly jump to the first slide (0)
      // without animation to create a seamless loop
      const timer = setTimeout(() => {
        setCurrentSlide(0);
      }, 500); // This should match the transition duration

      return () => clearTimeout(timer);
    }
  }, [currentSlide, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => {
      if (prev >= testimonials.length) {
        return 1; // Start from the first slide (not 0 to avoid jump)
      }
      return prev + 1;
    });
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return testimonials.length - 1; // Jump to the last real slide
      }
      return prev - 1;
    });
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Calculate the actual slide to display (for the infinite loop effect)
  const getDisplaySlideIndex = (index) => {
    return index % testimonials.length;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-4 lg:py-8 px-4">
      <div className="w-full max-w-7xl mx-auto py-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Hear From Our Clients</h2>
        </div>

        <div className="relative overflow-hidden rounded-xl pt-10 pb-8">
          {/* Slider container */}
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                style={{ width: `${100 / slidesPerView}%` }}
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
                  <div className="flex items-center justify-between mt-4">
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
                className={`w-3 h-3 rounded-full ${currentSlide % testimonials.length === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;