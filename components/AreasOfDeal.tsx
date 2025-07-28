import { Building2, Home } from 'lucide-react';
import React from 'react'

const AreasOfDeal = () => {
    
  const areas = [
    { name: 'DHA All Phases', icon: Building2, properties: '550+ Properties' },
    { name: 'DHA City', icon: Building2, properties: '250+ Properties' },
    { name: 'Clifton', icon: Home, properties: '180+ Properties' },
    { name: 'Bath Island', icon: Building2, properties: '120+ Properties' },
    { name: 'Bahria Town', icon: Home, properties: '300+ Properties' },
    { name: 'PECHS', icon: Building2, properties: '90+ Properties' },
  ];

  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0c2625] mb-4">Areas We Deal In</h2>
            <p className="text-xl text-gray-600">
              Premium locations across Karachi with proven investment potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-8 h-8 text-[#0c2625]" />
                </div>
                <h3 className="text-xl font-bold text-[#0c2625] mb-2">{area.name}</h3>
                <p className="text-gray-600">{area.properties}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default AreasOfDeal
