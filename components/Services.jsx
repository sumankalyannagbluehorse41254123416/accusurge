// components/Services.js
"use client";
import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Free Shipping",
      description: "On all orders over $72.00",
      bg: "bg-orange-50",
      svg: (
        <svg viewBox="0 0 28 20" width={28} height={20}>
          <path id="Shape 11" className="fill-current text-orange-500 shp0" d="M24.68 16.36C24.68 18.37 23.09 20 21.15 20C19.2 20 17.62 18.37 17.62 16.36

C17.62 14.36 19.2 12.73 21.15 12.73C23.09 12.73 24.68 14.36 24.68 16.36ZM21.15 18.18C20.17 18.18 19.38 17.37 19.38 16.36C19.38 15.36 20.17 14.55 21.15 14.55C22.12 14.55 22.91 15.36 22.91 16.36C22.91 17.37 22.12 18.18 21.15 18.18ZM12.62 16.36C12.62 18.37 11.03 20 9.09 20C7.14 20 5.56 18.37 5.56 16.36C5.56 14.36 7.14 12.73 9.09 12.73C11.03 12.73 12.62 14.36 12.62 16.36ZM9.09 18.18C8.12 18.18 7.32 17.37 7.32 16.36C7.32 15.36 8.12 14.55 9.09 14.55C10.06 14.55 10.85 15.36 10.85 16.36C10.85 17.37 10.06 18.18 9.09 18.18ZM26.17 7.74L24.59 8.56L22.19 3.64L18.09 3.64L18.09 1.82L22.74 1.82C23.07 1.82 23.37 2.01 23.52 2.32L26.17 7.74ZM11.82 15.48L18.5 15.48L18.5 17.3L11.82 17.3L11.82 15.48ZM7.32 16.39C7.32 16.9 6.93 17.3 6.44 17.3L3.38 17.3C2.9 17.3 2.5 16.9 2.5 16.39C2.5 15.89 2.89 15.48 3.38 15.48L6.44 15.48C6.93 15.48 7.32 15.89 7.32 16.39ZM28 10.48L28 16.39C28 16.9 27.6 17.3 27.12 17.3L23.79 17.3C23.31 17.3 22.91 16.9 22.91 16.39C22.91 15.89 23.31 15.48 23.79 15.48L26.24 15.48L26.24 10.8L24.95 9.09L18.09 9.09C17.6 9.09 17.21 8.68 17.21 8.18L17.21 1.82L3.38 1.82C2.9 1.82 2.5 1.41 2.5 0.91C2.5 0.41 2.89 0 3.38 0L18.09 0C18.58 0 18.97 0.41 18.97 0.91L18.97 7.27L25.38 7.27C25.66 7.27 25.91 7.4 26.08 7.62L27.81 9.93C27.93 10.09 28 10.28 28 10.48ZM7.26 11.79C7.26 12.29 6.87 12.7 6.38 12.7L2.32 12.7C1.84 12.7 1.44 12.29 1.44 11.79C1.44 11.28 1.84 10.88 2.32 10.88L6.38 10.88C6.87 10.88 7.26 11.28 7.26 11.79ZM9.29 8.21C9.29 8.71 8.9 9.12 8.41 9.12L0.88 9.12C0.39 9.12 0 8.71 0 8.21C0 7.71 0.39 7.3 0.88 7.3L8.41 7.3C8.9 7.3 9.29 7.71 9.29 8.21ZM10.74 4.64C10.74 5.14 10.34 5.55 9.85 5.55L2.32 5.55C1.84 5.55 1.44 5.14 1.44 4.64C1.44 4.13 1.84 3.73 2.32 3.73L9.85 3.73C10.34 3.73 10.74 4.13 10.74 4.64Z">
          </path>
        </svg>

      ),
    },
    {
      id: 2,
      title: "30 days returns",
      description: "30 Days Moneyback guarantee",
      bg: "bg-blue-50",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width={27} height="29.906" viewBox="0 0 27 29.906">
          <path className="fill-current text-blue-500" id="Money_Back" data-name="Money Back" d="M800.046,897.352h0a13.28,13.28,0,0,0-7.619-3.917l0.841-.863a0.893,0.893,0,0,0,0-1.24,0.839,0.839,0,0,0-1.208,0l-2.164,2.22a0.893,0.893,0,0,0,0,1.24l2.163,2.22a0.842,0.842,0,0,0,1.209,0,0.894,0.894,0,0,0,0-1.24l-0.482-.5a12.068,12.068,0,1,1-14.077,11.868,12.222,12.222,0,0,1,2.2-7.041,11.8,11.8,0,0,1,5.624-4.355,0.882,0.882,0,0,0,.517-1.12,0.848,0.848,0,0,0-1.092-.53,13.484,13.484,0,0,0-6.438,4.984,14.123,14.123,0,0,0,1.432,17.855,13.259,13.259,0,0,0,19.092,0A14.1,14.1,0,0,0,800.046,897.352Zm-18.325,9.793a8.781,8.781,0,1,0,8.779-9.006A8.9,8.9,0,0,0,781.721,907.145Zm8.779-7.253a7.255,7.255,0,1,1-7.07,7.253A7.172,7.172,0,0,1,790.5,899.892Zm-0.9,11.824v0.263a0.855,0.855,0,1,0,1.709,0v-0.353a2.774,2.774,0,0,0,1.087-.639,3.028,3.028,0,0,0,.9-1.709,2.659,2.659,0,0,0-1.756-3,7.217,7.217,0,0,1-1.835-.873,0.564,0.564,0,0,1-.107-0.512,0.775,0.775,0,0,1,.494-0.613,1.381,1.381,0,0,1,1.275.189,0.841,0.841,0,0,0,1.2-.177,0.892,0.892,0,0,0-.173-1.227,3.06,3.06,0,0,0-1.085-.516v-0.235a0.855,0.855,0,1,0-1.709,0V902.6a2.492,2.492,0,0,0-1.677,1.966,2.283,2.283,0,0,0,.732,2.216,8.314,8.314,0,0,0,2.319,1.146,0.9,0.9,0,0,1,.641,1.059A1.186,1.186,0,0,1,790.448,910a1.978,1.978,0,0,1-1.464-.392,0.842,0.842,0,0,0-1.183.254,0.891,0.891,0,0,0,.247,1.213A3.425,3.425,0,0,0,789.6,911.716Z" transform="translate(-777 -891.094)" />
        </svg>

      ),
    },
    {
      id: 3,
      title: "Offer & gift",
      description: "Offer & Gift on all orders over",
      bg: "bg-cyan-50",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="23.63" height="27.188" viewBox="0 0 23.63 27.188">
          <path className="fill-current text-cyan-500" id="Gift" d="M1079.89,903.212l-2.66-.97a3.219,3.219,0,1,0-4.17-4.9l-1.84,1.626-0.36-2.439a3.215,3.215,0,0,0-5.08-2.126,3.25,3.25,0,0,0-1.26,3.2l-2.51-.914a2.382,2.382,0,0,0-3.05,1.426l-1.08,2.989a0.8,0.8,0,0,0,.47,1.019c0.17,0.06,12.22,4.458,12.39,4.522h-11.96a0.791,0.791,0,0,0-.79.8v11.132a2.38,2.38,0,0,0,2.38,2.385h15.85a2.387,2.387,0,0,0,2.38-2.385V909.51l0.61,0.224a0.8,0.8,0,0,0,1.02-.476l1.08-2.988A2.39,2.39,0,0,0,1079.89,903.212Zm-13.98,16.152h-5.54a0.8,0.8,0,0,1-.8-0.8V908.232h6.34v11.132Zm3.18,0h-1.59V908.232h1.59v11.132Zm5.02-20.836a1.633,1.633,0,1,1,.52,2.764c-1.04-.382-1.53-0.56-2.58-0.942Zm-7.39-2.845a1.624,1.624,0,0,1,2.57,1.077l0.41,2.731-2.58-.941A1.641,1.641,0,0,1,1066.72,895.683Zm0.37,7.933-7.45-2.72,0.81-2.241a0.8,0.8,0,0,1,1.02-.476c0.83,0.305,6.45,2.354,6.7,2.448Zm2.98,1.088-1.49-.544,1.08-2.989,1.49,0.544Zm6.94,13.865a0.791,0.791,0,0,1-.79.8h-5.55V908.232h4.43l1.91,0.7v9.638Zm2.81-12.843-0.81,2.241-7.45-2.719,1.08-2.989,6.71,2.447A0.8,0.8,0,0,1,1079.82,905.726Z" transform="translate(-1057.84 -893.781)" />
        </svg>

      ),
    },
    {
      id: 4,
      title: "Secure checkout",
      description: "Your Payment Protected by Paypal",
      bg: "bg-red-50",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height="19.969" viewBox="0 0 24 19.969">
          <path className="fill-current text-red-500" id="Secure" d="M1355.75,908.863a0.714,0.714,0,1,0,0,1.427h3a0.714,0.714,0,1,0,0-1.427h-3Zm19.5,0a0.736,0.736,0,0,0-.75.714v5h-21v-8.565h8.25a0.714,0.714,0,1,0,0-1.427h-8.25v-2.855h8.25a0.714,0.714,0,1,0,0-1.427h-8.25a1.465,1.465,0,0,0-1.5,1.427v12.847a1.464,1.464,0,0,0,1.5,1.427h21a1.464,1.464,0,0,0,1.5-1.427v-5A0.736,0.736,0,0,0,1375.25,908.863Zm0.3-10.648-5.25-2.141a0.818,0.818,0,0,0-.6,0l-5.25,2.141a0.72,0.72,0,0,0-.45.657v2.854c0,3.927,1.53,6.222,5.63,8.47a0.775,0.775,0,0,0,.74,0c4.1-2.242,5.63-4.537,5.63-8.47v-2.854A0.72,0.72,0,0,0,1375.55,898.215Zm-1.05,3.511c0,3.3-1.15,5.11-4.5,7.023-3.35-1.917-4.5-3.731-4.5-7.023v-2.383l4.5-1.836,4.5,1.836v2.383Zm-6.13.318a0.776,0.776,0,0,0-1.04-.2,0.694,0.694,0,0,0-.2.989l1.5,2.142a0.759,0.759,0,0,0,.59.318h0.03a0.774,0.774,0,0,0,.59-0.269l3-3.568a0.7,0.7,0,0,0-.12-1,0.79,0.79,0,0,0-1.06.112l-2.35,2.806Z" transform="translate(-1352 -896.031)" />
        </svg>

      ),
    },
  ];

  const serviceRefs = useRef([]);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Set up scroll direction detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    // Set up Intersection Observer for service boxes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            entry.target.classList.remove('opacity-0');
          } else {
            // Only remove the animation class if we're scrolling up
            if (!isScrollingDown) {
              entry.target.classList.remove('animate-slide-in');
              entry.target.classList.add('opacity-0');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all service boxes
    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingDown]);

  return (
    <div className="container mx-auto px-12 relative z-10">
      <div className="bg-white rounded-lg shadow-[0_0_25px_rgba(99,149,189,0.1)] pt-12 pb-8 pl-9 pr-16 -mt-32">
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="w-full lg:w-3/12 md:w-6/12 px-4 mb-8"
            >
              <div
                ref={el => serviceRefs.current[index] = el}
                className="ps-service-box text-center cursor-pointer opacity-0 transition-all duration-700"
                style={{
                  transform: isScrollingDown
                    ? 'translateY(20px)'
                    : 'translateY(-20px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className={`ps-service-icon w-20 h-20 ${service.bg} rounded-full flex items-center justify-center mx-auto mb-8 transition-all duration-500`}>
                  <span>{service.svg}</span>
                </div>
                <div className="ps-service-info">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h4>
                  <p className="text-sm text-gray-500 font-normal">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom animation to Tailwind config via style tag */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}