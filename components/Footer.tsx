import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import {
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1f1e] text-white pt-12">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 mb-10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-20 h-auto rounded-lg flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Khurram Enterprises Logo"
                  width={100}
                  height={100}
                  className="w-full h-auto rounded-lg object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-lg font-bold text-[#c1a467]">
                  KHURRAM ENTERPRISES
                </h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for profitable real estate investments in
              Karachi's most premium locations.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/OfficialKhurramEnterprises/"
                className="bg-[#c1a467] text-[#0c2625] p-2 rounded-lg hover:bg-[#B8860B] transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-[#c1a467] text-[#0c2625] p-2 rounded-lg hover:bg-[#B8860B] transition-colors"
              >
                <GrInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-[#c1a467] text-[#0c2625] p-2 rounded-lg hover:bg-[#B8860B] transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#c1a467] mb-6">
              Property Types
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Luxury Villas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Premium Bungalows
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Commercial Plots
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Residential Plots
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Apartments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#c1a467] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Featured Properties
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Investment Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Market Reports
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#c1a467] mb-6">
              Contact Info
            </h4>
            <div className="flex flex-col items-start space-y-4">
              
              <Link href={"tel:+923218255004"} className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-[#c1a467]" />
                <p className="text-gray-400">0321 8255004</p>
              </Link>
              <Link href={"mailto:khurram_ep@hotmail.com"} className="flex items-center space-x-2">
                <IoIosMailUnread className="w-6 h-6 text-[#c1a467]" />
                <p className="text-gray-400">khurram_ep@hotmail.com</p>
              </Link>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-[#c1a467] mt-1" />
                <p className="text-gray-400">
                  18-C, Rahat Commercial Lane # 3,
                  <br />
                  Suite # 3, Mezz. Floor, DHA, 
                  <br />
                  Phase-VI, Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full border-t border-gray-300/40 " />

        <div className="py-6 text-center px-6 text-gray-400">
          <p>
            &copy; 2025 Khurram Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
