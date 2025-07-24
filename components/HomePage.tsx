import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Home, 
  Building2, 
  Users, 
  Star, 
  Phone, 
  MessageCircle, 
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Award,
  TrendingUp,
  Shield,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    squareYards: ''
  });

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

  const areas = [
    { name: 'DHA Phase 5', icon: Building2, properties: '250+ Properties' },
    { name: 'Gulberg', icon: Home, properties: '180+ Properties' },
    { name: 'Model Town', icon: Building2, properties: '120+ Properties' },
    { name: 'Bahria Town', icon: Home, properties: '300+ Properties' },
    { name: 'Johar Town', icon: Building2, properties: '90+ Properties' },
    { name: 'Cantt Area', icon: Home, properties: '75+ Properties' }
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Real Estate Investor',
      content: 'Khurram Enterprises helped me build a profitable property portfolio. Their market insights and professional service are unmatched.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Fatima Sheikh',
      role: 'Homebuyer',
      content: 'Found our dream home through Khurram Enterprises. The entire process was smooth and transparent. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Mohammad Ali',
      role: 'Commercial Investor',
      content: 'Excellent service and genuine deals. They understand the market and provide valuable investment advice.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Invest Smart. Live Better.
            <br />
            <span className="text-[#D4AF37]">With Khurram Enterprises</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            Premium Properties • Trusted Deals • Real Returns
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-[#0c2625] text-sm font-semibold mb-2">Location</label>
                <select 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-[#0c2625] focus:border-[#D4AF37] focus:outline-none"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                >
                  <option value="">Select Location</option>
                  <option value="dha">DHA Phase 5</option>
                  <option value="gulberg">Gulberg</option>
                  <option value="model-town">Model Town</option>
                  <option value="bahria">Bahria Town</option>
                </select>
              </div>
              <div>
                <label className="block text-[#0c2625] text-sm font-semibold mb-2">Property Type</label>
                <select 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-[#0c2625] focus:border-[#D4AF37] focus:outline-none"
                  value={searchFilters.propertyType}
                  onChange={(e) => setSearchFilters({...searchFilters, propertyType: e.target.value})}
                >
                  <option value="">Select Type</option>
                  <option value="villa">Villa</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="plot">Plot</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-[#0c2625] text-sm font-semibold mb-2">Square Yards</label>
                <select 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-[#0c2625] focus:border-[#D4AF37] focus:outline-none"
                  value={searchFilters.squareYards}
                  onChange={(e) => setSearchFilters({...searchFilters, squareYards: e.target.value})}
                >
                  <option value="">Select Size</option>
                  <option value="100-200">100-200 sq yards</option>
                  <option value="200-300">200-300 sq yards</option>
                  <option value="300-500">300-500 sq yards</option>
                  <option value="500+">500+ sq yards</option>
                </select>
              </div>
              <button className="bg-[#D4AF37] text-[#0c2625] p-4 rounded-lg font-bold text-lg hover:bg-[#B8860B] transition-colors flex items-center justify-center space-x-2">
                <Search className="w-6 h-6" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Featured Properties */}
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

      {/* Areas We Deal In */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0c2625] mb-4">Areas We Deal In</h2>
            <p className="text-xl text-gray-600">
              Premium locations across Lahore with proven investment potential
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0c2625] mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by investors and families across Pakistan
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#D4AF37] fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#0c2625] text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-[#0c2625] p-3 rounded-full shadow-lg hover:bg-[#B8860B] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-[#0c2625] p-3 rounded-full shadow-lg hover:bg-[#B8860B] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#D4AF37]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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

      {/* Footer */}
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
    </div>
  );
}

export default HomePage;