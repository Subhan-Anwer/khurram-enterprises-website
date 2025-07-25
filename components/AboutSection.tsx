import { Award, Shield, TrendingUp, Users } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0c2625] mb-6">About Khurram Enterprises</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of excellence in Pakistan's real estate market, Khurram Enterprises has established itself as a trusted name for premium property investments and residential solutions.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We specialize in luxury residential properties, commercial plots, and investment opportunities in Lahore's most prestigious locations. Our commitment to transparency, quality, and client satisfaction has earned us the trust of over 2,000+ satisfied customers.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-[#0c2625]" />
                  </div>
                  <h3 className="font-bold text-[#0c2625] text-xl">15+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-[#0c2625]" />
                  </div>
                  <h3 className="font-bold text-[#0c2625] text-xl">2000+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-[#0c2625]" />
                  </div>
                  <h3 className="font-bold text-[#0c2625] text-xl">₨500B+</h3>
                  <p className="text-gray-600">Deals Closed</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Khurram Enterprises Team"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0c2625] text-white p-6 rounded-xl shadow-xl">
                <Shield className="w-8 h-8 text-[#D4AF37] mb-2" />
                <p className="font-bold">Trusted & Verified</p>
                <p className="text-sm text-gray-300">100% Genuine Deals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection
