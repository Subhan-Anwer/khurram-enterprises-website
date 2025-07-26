"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // optional, or use any icon library
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0c2625] text-white py-4 md:px-8 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center px-4 justify-between">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-20 h-auto rounded-lg flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Khurram Enterprises Logo"
              width={100}
              height={100}
              className="w-full h-auto rounded-lg object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-start justify-end relative sm:top-[3px] top-[6px]">
            <h1 className="sm:text-[20px] text-[17px] font-bold text-[#c1a467]">
              KHURRAM {" "}
              <br className="md:block hidden" />
              ENTERPRISES
            </h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-[#D4AF37] transition-colors">
            Home
          </a>
          <a
            href="#properties"
            className="hover:text-[#D4AF37] transition-colors"
          >
            Properties
          </a>
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
            Contact
          </a>
        </nav>

        {/* Call to Action */}
        <Link href="/contact" className="hidden md:flex ml-4">
          <button className="bg-[#d3ab55] text-[#0c2625] sm:px-5 px-3 sm:py-2 py-1.5 rounded-lg font-semibold hover:bg-[#b78a45] hover:cursor-pointer transition-colors duration-200">
            Call Now
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0c2625] text-white py-4 space-y-4 w-full">
          <hr className="w-full border-t border-gray-300/40 " />
          <Link
            href="#home"
            className="block hover:text-[#D4AF37] px-5 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#properties"
            className="block hover:text-[#D4AF37] px-5 transition-colors"
          >
            Properties
          </Link>
          <Link
            href="#about"
            className="block hover:text-[#D4AF37] px-5 transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="block hover:text-[#D4AF37] px-5 transition-colors"
          >
            Contact
          </Link>

          {/* Call to Action */}
          <Link
            href="https://wa.me/+923218255004"
            className="w-full px-5 mx-auto flex items-center justify-center"
          >
            <button className="w-full mt-4 bg-[#d3ab55] text-[#0c2625] px-6 py-2 rounded-lg font-semibold hover:bg-[#B8860B] hover:cursor-pointer transition-colors duration-200">
              Call Now
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
