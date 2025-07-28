import { Home, MapPin } from 'lucide-react'
import React from 'react'

const FeaturedSection = () => {
    
    const featuredProperties = [
    {
      id: 1,
      image: '/web-image-1.jpg',
      title: 'Luxury Bungalow in DHA',
      location: 'DHA  Phase VIII, Karachi',
      size: '1000 Square Yards',
      price: '₨ 65 Crore',
      type: 'Bungalow'
    },
    {
      id: 2,
      image: '/web-image-2.jpg',
      title: 'Brand New Bungalow',
      location: 'DHA Phase VIII',
      size: '300 Square Yards',
      price: '₨ 15 Crore',
      type: 'Bungalow'
    },
    {
      id: 3,
      image: '/web-image-3.jpg',
      title: 'Executive Bungalow',
      location: 'DHA Phase VIII A',
      size: '666 Square Yards',
      price: '₨ 25 Crore',
      type: 'Bungalow'
    },
    {
      id: 4,
      image: '/web-image-4.jpg',
      title: 'Commercial Building',
      location: 'DHA Phase VIII Murtaza Comm.',
      size: '100 Square Yards',
      price: '₨ 70 Crore',
      type: 'Building'
    },
    {
      id: 5,
      image: '/web-image-5.jpg',
      title: 'Jori Bungalow',
      location: 'Off Khy-e-Hilal, Phase VII',
      size: '1000 (500+500) Square Yards',
      price: '₨ 40 Crore',
      type: 'Bungalow'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Corporate Office',
      location: 'Bahria Town',
      size: '800 sq yards',
      price: '₨ 12 Crore',
      type: 'Bungalow'
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0c2625] mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties in Karachi's most sought-after locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#ecbd20] text-[#0b2525] px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0c2625] mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Home className="w-4 h-4 mr-2" />
                    <span>{property.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#f5c014]">{property.price}</span>
                    <button className="bg-[#0c2625] text-white px-4 py-2 rounded-lg hover:bg-[#1a453f] transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#D4AF37] text-[#0c2625] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8860B] transition-colors">
              View All Properties
            </button>
          </div>
        </div>
      </section>
  )
}

export default FeaturedSection
