import { Building2 } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
      <header className="bg-[#0c2625] text-white py-4 px-4 md:px-8 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center">
              <Building2 className="w-7 h-7 text-[#0c2625]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#D4AF37]">Khurram Enterprises</h1>
              <p className="text-sm text-gray-300">Premium Real Estate</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#properties" className="hover:text-[#D4AF37] transition-colors">Properties</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <button className="bg-[#D4AF37] text-[#0c2625] px-6 py-2 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors">
              Call Now
            </button>
          </div>
        </div>
      </header>
  )
}

export default Header
