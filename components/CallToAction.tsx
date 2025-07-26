import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MessageCircle, Phone } from 'lucide-react'
import React from 'react'
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#0c2625] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Invest? <span className="text-[#ecbd20]"><br  className="sm:hidden inline"/>Let's Talk.</span>
          </h2>
          <p className="md:text-xl text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Get expert guidance and exclusive property deals. Contact us today for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="https://wa.me/+923218255004"
              className="bg-[#28a83b] hover:bg-[#2b8f3a] max-h-15 w-full sm:max-w-90 max-w-86 flex items-center justify-center text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors space-x-3 shadow-lg"
            >
              <IoLogoWhatsapp className="w-7 h-7" />
              <span>WhatsApp: +92 321 8255004</span>
            </Link>
            <Link 
              href="tel:+923001234567"
              className="bg-[#ecbd20] hover:bg-[#d8af27] max-h-15 w-full sm:max-w-90 max-w-86 flex items-center justify-center text-[#0c2625] px-8 py-4 rounded-lg text-lg font-semibold transition-colors space-x-3 shadow-lg"
            >
              <FaPhone className="w-6 h-6" />
              <span>Call At: +92 321 8255004</span>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default CallToAction
