"use client"
import { Search } from 'lucide-react';
import React, { useState } from 'react'

const HeroSection = () => {
    
    const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    squareYards: ''
  });

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-image.jpeg')" }}
          aria-label="Hero Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight text-center">
            Invest Smart, Live Well.
            <br />
            <span className="text-[#D4AF37] text-[32px] sm:text-3xl md:text-5xl lg:text-7xl">With Khurram Enterprises</span>
          </h1>
          <p className="text-[16px] md:text-2xl mb-12 text-gray-200">
            Premium Properties • Trusted Deals • Profitable Investments
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-[#0c2625] text-sm font-semibold mb-2">Location</label>
                <select 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-[#0c2625] focus:border-[#D4AF37] focus:outline-none"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                >
                  <option value="">Select Location</option>
                  <option value="dha-phase-1">DHA Phase 1</option>
                  <option value="dha-phase-2">DHA Phase 2</option>
                  <option value="dha-phase-4">DHA Phase 4</option>
                  <option value="dha-phase-5">DHA Phase 5</option>
                  <option value="dha-phase-6">DHA Phase 6</option>
                  <option value="dha-phase-7">DHA Phase 7</option>
                  <option value="dha-phase-8">DHA Phase 8</option>
                  <option value="clifton">Clifton</option>
                  <option value="bath-island">Bath Island</option>
                  <option value="bahria-town">Bahria Town</option>
                  <option value="pechs">PECHS</option>
                  <option value="dha-city">DHA City</option>
                </select>
              </div>
              <div>
                <label className="block text-[#0c2625] text-sm font-semibold mb-2">Property Type</label>
                <select 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-[#0c2625] focus:border-[#D4AF37] focus:outline-none"
                  value={searchFilters.propertyType}
                  onChange={(e) => setSearchFilters({...searchFilters, propertyType: e.target.value})}
                >
                  <option value="">Select Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="plot">Plot</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-[#0c2625] text-sm font-semibold mb-2">Square Yards</label>
                <select 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-[#0c2625] focus:border-[#D4AF37] focus:outline-none"
                  value={searchFilters.squareYards}
                  onChange={(e) => setSearchFilters({...searchFilters, squareYards: e.target.value})}
                >
                  <option value="">Select Size</option>
                  <option value="100-200">100-200 Square Yards</option>
                  <option value="200-300">200-300 Square Yards</option>
                  <option value="300-500">300-500 Square Yards</option>
                  <option value="500-600">500-600 Square Yards</option>
                  <option value="666">666 Square Yards</option>
                  <option value="1000">1000 Square Yards</option>
                  <option value="2000">2000 Square Yards</option>
                </select>
              </div>
              <button className="bg-[#D4AF37] text-[#0c2625] p-4 rounded-lg font-bold text-lg hover:bg-[#B8860B] transition-colors flex items-center justify-center space-x-2">
                <Search className="w-6 h-6" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
