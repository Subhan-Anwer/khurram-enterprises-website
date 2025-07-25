import { Home, MapPin } from 'lucide-react'
import React from 'react'

const FeaturedSection = () => {
    
    const featuredProperties = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Villa in DHA Phase 5',
      location: 'DHA Phase 5, Lahore',
      size: '500 sq yards',
      price: '₨ 8.5 Crore',
      type: 'Villa'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Commercial Plaza',
      location: 'Gulberg Main Boulevard',
      size: '1200 sq yards',
      price: '₨ 15 Crore',
      type: 'Commercial'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Executive Bungalow',
      location: 'Model Town Extension',
      size: '300 sq yards',
      price: '₨ 4.2 Crore',
      type: 'Bungalow'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Premium Plot',
      location: 'Bahria Town Phase 8',
      size: '250 sq yards',
      price: '₨ 2.8 Crore',
      type: 'Plot'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Apartment',
      location: 'Emporium Mall Area',
      size: '180 sq yards',
      price: '₨ 3.5 Crore',
      type: 'Apartment'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Corporate Office',
      location: 'Johar Town Commercial',
      size: '800 sq yards',
      price: '₨ 12 Crore',
      type: 'Commercial'
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0c2625] mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties in Lahore's most sought-after locations
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
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0c2625] px-3 py-1 rounded-full text-sm font-semibold">
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
                    <span className="text-2xl font-bold text-[#D4AF37]">{property.price}</span>
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
