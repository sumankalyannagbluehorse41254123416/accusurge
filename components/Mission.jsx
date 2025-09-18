"use client"
import React, { useEffect, useRef } from 'react';

export default function Mission() {
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const leftElement = leftRef.current;
            const rightElement = rightRef.current;

            if (leftElement && rightElement) {
                const elementTop = leftElement.getBoundingClientRect().top;

                // Calculate when element is in viewport
                if (elementTop < windowHeight * 0.8 && elementTop > -leftElement.offsetHeight) {
                    // Scroll down: left moves left->right, right moves right->left
                    leftElement.style.transform = 'translateX(0)';
                    leftElement.style.opacity = '1';
                    rightElement.style.transform = 'translateX(0)';
                    rightElement.style.opacity = '1';
                } else {
                    // Scroll up or out of view: left moves back to left, right to right
                    leftElement.style.transform = 'translateX(-100px)';
                    leftElement.style.opacity = '0';
                    rightElement.style.transform = 'translateX(100px)';
                    rightElement.style.opacity = '0';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="bg-gradient-to-br from-white to-purple-200 font-sans md:px-20 pb-10">
                <div className="container mx-auto p-6">
                    <div className="col-span-full">
                        <div className="flex justify-between items-center border-b-4 border-double border-gray-200 pb-6">
                            <p className="text-2xl font-bold text-gray-800">Our Mission</p>
                        </div>
                    </div>
                    <main className="Mission-us flex lg:flex-row flex-col justify-between gap-4 p-10 bg-white rounded-lg shadow-lg mt-[50px]">
                        <div
                            ref={leftRef}
                            className="Mission-us-left lg:w-1/2 w-full flex justify-end transition-all duration-800 ease-in-out"
                            style={{ transform: 'translateX(-100px)', opacity: 0 }}
                        >
                            <img
                                alt="Doctor"
                                className="rounded-lg shadow-md max-w-full h-auto"
                                src="images/Accusurge Mission.png"
                            />
                        </div>
                        <div
                            ref={rightRef}
                            className="Mission-us-right md:ml-2 lg:w-1/2 w-full transition-all duration-800 ease-in-out"
                            style={{ transform: 'translateX(100px)', opacity: 0 }}
                        >
                            <h3 className="text-4xl font-bold text-gray-800 mb-4">Better Care for Everyone</h3>
                            <p className="text-gray-600 mb-6 lg:text-[19px]">
                                We aim to make healthcare safer and more reliable by offering trusted medical equipment, durable surgical instruments, and essential healthcare products. Our goal is simple—help doctors and nurses care for patients with confidence. By focusing on quality and innovation, we ensure better treatment, faster recovery, and peace of mind for families everywhere. We believe in supporting healthcare teams so they can focus on saving lives.
                               
                            </p>
                            
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};