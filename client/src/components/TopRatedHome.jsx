"use client";

import React, { useEffect, useState } from 'react';
import { Building2, MapPin, Bed, Bath, ArrowRight, Star, Heart, Share2, Square } from 'lucide-react';
import axios from 'axios'
import Link from 'next/link';

const TopRatedHome = () => {
  const [isClient, setIsClient] = useState(false);
  const [properties,setProperties] = useState([])
  const handleFetch = async() => {
    try {
      const res = await axios.get('https://www.api.propsavvyrealtors.com/api/v1/get_properties')
      setProperties(res.data.data)
    } catch (error) {
      console.log("Internal server error",error)
    }
  }

  useEffect(()=>{
    handleFetch()
  },[])

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
          {properties.length > 0 && properties.slice(0,3).map((property,index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={property.image.url}
                  alt={property?.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{property.rating}</span>
                    <span className="text-sm text-gray-600">({property.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                   <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{property?.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{property?.location?.name}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Starting from</div>
                    <div className="text-xl font-bold text-blue-600">₹{property.startingPrice}</div>
                  </div>
                </div>

                <Link href={`/properties/${property?.slug}`} className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02]">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href={'/properties'} className="group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            <span>View All Properties</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopRatedHome;