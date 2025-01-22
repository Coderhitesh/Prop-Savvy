"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaFilter,
  FaMapMarkerAlt,
  FaSearch,
  FaStar,
  FaTags,
} from "react-icons/fa";
import axios from 'axios'
import { ArrowRight, MapPin, Star } from "lucide-react";

const Properties = () => {
  const [filters, setFilters] = useState({
    propertyType: "",
    location: "",
    priceRange: "",
    status: "",
    rating: "",
  });

  const [showFilters, setShowFilters] = useState(false);

  const [properties, setProperties] = useState([])
  const handleFetch = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/get_properties')
      // console.log("res.data.data",res.data.data)
      setProperties(res.data.data)
    } catch (error) {
      console.log("Internal server error", error)
    }
  }

  useEffect(() => {
    handleFetch()
  }, [])

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#004D67] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Find Your Perfect Property
          </h1>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto relative">
            <div className="flex items-center bg-white rounded-full shadow-lg p-2">
              <input
                type="text"
                placeholder="Search properties..."
                className="flex-1 px-6 py-3 rounded-full focus:outline-none"
              />
              <button className="bg-[#004D67] text-white p-3 rounded-full hover:bg-[#004D67] transition-colors">
                <FaSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Section */}
        {/* <Link href="/properties/slug"> */}
        <div className="mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-[#004D67] text-white px-6 py-3 rounded-lg hover:bg-[#004D67] transition-colors mb-4"
          >
            <FaFilter />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-xl shadow-md">
              <select
                value={filters.propertyType}
                onChange={(e) =>
                  handleFilterChange("propertyType", e.target.value)
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Property Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>

              <select
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Location</option>
                <option value="downtown">Downtown</option>
                <option value="suburban">Suburban</option>
                <option value="rural">Rural</option>
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) =>
                  handleFilterChange("priceRange", e.target.value)
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Price Range</option>
                <option value="0-100000">$0 - $100,000</option>
                <option value="100000-500000">$100,000 - $500,000</option>
                <option value="500000+">$500,000+</option>
              </select>

              <select
                value={filters.status}
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Status</option>
                <option value="forSale">For Sale</option>
                <option value="forRent">For Rent</option>
                <option value="sold">Sold</option>
              </select>
            </div>
          )}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.length > 0 && properties.slice(0, 4).map((property, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={property.image.url}
                  alt={property?.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div> */}
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

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                  {/* <div className="flex items-center gap-2">
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
                  </div> */}
                </div>

                <Link href={`/properties/${property?.slug}`} className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02]">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
