"use client";

import React, { useEffect, useState } from 'react';
import { Search, MapPin, Home, ArrowRight } from 'lucide-react';
import axios from 'axios'

const Banner = () => {
  const [banner, setBanner] = useState([])

  const fetchBanner = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/get_heroes')
      setBanner(data.data)
    } catch (error) {
      console.log("Internal server error", error)
    }
  }
  useEffect(() => {
    fetchBanner();
  }, [])

  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {
        banner && banner.slice(0, 1).map((item, index) => (
          <>
            {/* Background Image with Overlay */}
            <div
            key={index}
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${item?.image?.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center md:text-left md:max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {item?.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  {item?.description}
                </p>

                {/* Search Box */}
                <div className="bg-white p-4 rounded-lg shadow-xl max-w-3xl mx-auto md:mx-0">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Enter location"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                          <option value="">Property Type</option>
                          <option value="house">House</option>
                          <option value="apartment">Apartment</option>
                          <option value="condo">Condo</option>
                          <option value="villa">Villa</option>
                        </select>
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                      <Search className="w-5 h-5" />
                      <span>Search</span>
                    </button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto md:mx-0">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-bold text-white">2,500+</div>
                    <div className="text-gray-300">Property Listings</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-bold text-white">1,800+</div>
                    <div className="text-gray-300">Happy Clients</div>
                  </div>
                  <div className="text-center md:text-left col-span-2 md:col-span-1">
                    <div className="text-3xl font-bold text-white">150+</div>
                    <div className="text-gray-300">Expert Agents</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold group">
                    <span>View Featured Properties</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </>
        ))
      }

    </div>
  );
};

export default Banner;