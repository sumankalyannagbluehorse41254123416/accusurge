"use client"; // 👈 ensures this runs only on client side

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Elizabeth Andrew",
      role: "UI Designer",
      img: "/images/client_1.png",
      text: "“This is a sample testimonial text.”",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Software Engineer",
      img: "/images/client_2.png",
      text: "“Another testimonial goes here.”",
    },
    // Add more testimonial objects as needed
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h4 className="text-2xl font-bold mb-6 text-center md:text-left">
          Our Clients Feedbacks
        </h4>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-6 shadow-md rounded-xl bg-gray-50 flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="mt-2 text-gray-700 italic">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
