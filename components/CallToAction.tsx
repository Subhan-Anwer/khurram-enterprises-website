import { MessageCircle, Phone } from 'lucide-react'
import React from 'react'

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#0c2625] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Invest? <span className="text-[#D4AF37]">Let's Talk.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get expert guidance and exclusive property deals. Contact us today for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://wa.me/923001234567"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-3 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp: +92 300 123 4567</span>
            </a>
            <a 
              href="tel:+923001234567"
              className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#0c2625] px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-3 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Call: +92 300 123 4567</span>
            </a>
          </div>
        </div>
      </section>
  )
}

export default CallToAction
