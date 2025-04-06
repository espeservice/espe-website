'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/testimonials/sarah.jpg",
    content: "ESPE Service has transformed how I manage my home maintenance. The quality of service is exceptional, and the convenience is unmatched."
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    image: "/testimonials/michael.jpg",
    content: "As a service provider, ESPE has helped me grow my business significantly. The platform is easy to use and the support team is always helpful."
  },
  {
    name: "Emily Rodriguez",
    role: "Frequent User",
    image: "/testimonials/emily.jpg",
    content: "I love how easy it is to book services through ESPE. The providers are professional and the prices are reasonable. Highly recommended!"
  }
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slightly longer duration for better readability

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our Users Say
        </h2>
        <div className="w-24 h-1 bg-[#248c89] mx-auto mb-4"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hear from our satisfied customers and service providers about their experience with ESPE Service
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-100 text-[#248c89] hover:bg-[#248c89] hover:text-white transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-100 text-[#248c89] hover:bg-[#248c89] hover:text-white transition-all duration-300"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-8 py-12">
                <div className="max-w-2xl mx-auto">
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-20 h-20 rounded-full border-4 border-[#248c89]/20 overflow-hidden mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
                    <p className="text-[#248c89] font-medium">{testimonial.role}</p>
                  </div>
                  <div className="relative">
                    <svg
                      className="absolute -top-4 -left-4 w-12 h-12 text-[#248c89]/10"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-600 text-xl leading-relaxed italic text-center">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'w-8 h-2 bg-[#248c89]' 
                  : 'w-2 h-2 bg-[#248c89]/30'
              } rounded-full hover:bg-[#248c89]/60`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 