"use client";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import React, { useState } from 'react'

const Testimonials = () => {
    
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Real Estate Investor',
      content: 'Khurram Enterprises helped me build a profitable property portfolio. Their market insights and professional service are unmatched.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Fatima Sheikh',
      role: 'Homebuyer',
      content: 'Found our dream home through Khurram Enterprises. The entire process was smooth and transparent. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Mohammad Ali',
      role: 'Commercial Investor',
      content: 'Excellent service and genuine deals. They understand the market and provide valuable investment advice.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0c2625] mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by investors and families across Pakistan
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#D4AF37] fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#0c2625] text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-[#0c2625] p-3 rounded-full shadow-lg hover:bg-[#B8860B] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-[#0c2625] p-3 rounded-full shadow-lg hover:bg-[#B8860B] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
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
  )
}

export default Testimonials
