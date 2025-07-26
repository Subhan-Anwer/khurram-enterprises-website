"use client";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Hassan",
      content:
        "Khurram Enterprises helped me build a profitable property portfolio. Satisfied with their professional services.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Fatima Sheikh",
      content:
        "Found our dream home through Khurram Enterprises. The entire process was smooth and transparent. Highly recommended!",
      rating: 5,
      image:
        "https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Mohammad Ali",
      content:
        "Excellent service and genuine deals. They understand the market and provide valuable investment advice.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0c2625] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by investors and families across Pakistan
          </p>
        </div>

        

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 text-center flex flex-col items-center">
            {/* Profile Image */}
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-24 h-24 rounded-full object-cover object-top mb-4"
            />

            {/* Name */}
            <h4 className="font-bold text-[#0c2625] text-lg mb-2">
              {testimonials[currentTestimonial].name}
            </h4>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#D4AF37] fill-current mx-[2px]"
                  />
                )
              )}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-base sm:text-lg text-gray-700 leading-relaxed italic px-2 sm:px-6">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
          </div>

          {/* Arrows - Now responsive */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-[#0c2625] p-2 sm:p-3 rounded-full shadow-lg hover:bg-[#B8860B] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-[#0c2625] p-2 sm:p-3 rounded-full shadow-lg hover:bg-[#B8860B] transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#D4AF37]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

export default Testimonials;
