"use client";

import React, { useEffect, useState } from 'react';
import { Building2, MapPin, Bed, Bath, ArrowRight, Star, Heart, Share2, Square } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Miami Beach, FL",
    price: "2,500,000",
    rating: 4.9,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    beds: 5,
    baths: 4,
    sqft: 4200,
    featured: true
  },
  {
    id: 2,
    title: "Modern Downtown Penthouse",
    location: "Manhattan, NY",
    price: "3,750,000",
    rating: 4.8,
    reviews: 36,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    beds: 4,
    baths: 3.5,
    sqft: 3800,
    featured: true
  },
  {
    id: 3,
    title: "Contemporary Hill Estate",
    location: "Beverly Hills, CA",
    price: "4,200,000",
    rating: 4.9,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    beds: 6,
    baths: 5,
    sqft: 5500,
    featured: true
  }
];

const TopRatedHome = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Featured Properties
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Top Rated
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Properties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most prestigious properties, handpicked for their exceptional quality and prime locations.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.length>0 && properties.map((property,index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{property.rating}</span>
                    <span className="text-sm text-gray-600">({property.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Starting from</div>
                    <div className="text-xl font-bold text-blue-600">${property.price}</div>
                  </div>
                </div>

                {/* Property Features */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{property.sqft} sqft</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02]">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            <span>View All Properties</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedHome;