import { Building2, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0a1f1e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-[#0c2625]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#D4AF37]">Khurram Enterprises</h3>
                  <p className="text-sm text-gray-400">Premium Real Estate</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner for premium real estate investments in Lahore's most prestigious locations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#D4AF37] text-[#0c2625] p-2 rounded-lg hover:bg-[#B8860B] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#D4AF37] text-[#0c2625] p-2 rounded-lg hover:bg-[#B8860B] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#D4AF37] text-[#0c2625] p-2 rounded-lg hover:bg-[#B8860B] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-[#D4AF37] mb-6">Property Types</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Luxury Villas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Premium Bungalows</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Plots</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Residential Plots</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apartments</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-[#D4AF37] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Featured Properties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investment Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Market Reports</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-[#D4AF37] mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] mt-1" />
                  <p className="text-gray-400">
                    Office # 123, Main Boulevard,<br />
                    Gulberg III, Lahore, Pakistan
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <p className="text-gray-400">+92 300 123 4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                  <p className="text-gray-400">info@khurramenterprises.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Khurram Enterprises. All rights reserved. | Designed for Excellence</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
