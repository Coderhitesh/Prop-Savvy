"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBed, FaFilter, FaMapMarkerAlt, FaSearch, FaStar, FaTags } from 'react-icons/fa';

const Properties = () => {
  const [filters, setFilters] = useState({
    propertyType: '',
    location: '',
    priceRange: '',
    status: '',
    rating: '',
  });

  const [showFilters, setShowFilters] = useState(false);

  // Mock data for demonstration
  const properties = [
    {
      id: 1,
      name: "Luxury Villa",
      location: "Downtown",
      startingPrice: 500000,
      description: "Beautiful luxury villa with modern amenities",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      propertyType: "Residential",
      status: "For Sale",
      rating: 4.5,
    },
    // Add more mock properties as needed
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
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
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-xl shadow-md">
              <select
                value={filters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Property Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>

              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Location</option>
                <option value="downtown">Downtown</option>
                <option value="suburban">Suburban</option>
                <option value="rural">Rural</option>
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Price Range</option>
                <option value="0-100000">$0 - $100,000</option>
                <option value="100000-500000">$100,000 - $500,000</option>
                <option value="500000+">$500,000+</option>
              </select>

              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
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
          {properties.map((property) => (
            <Link href='/properties/slugHJGJHGHJ' key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {property.status}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <FaMapMarkerAlt />
                  <span>{property.location}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <FaTags className="text-blue-600" />
                  <span className="text-gray-600">{property.propertyType}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <FaStar className="text-yellow-400" />
                    <span>{property.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold">
                    ${property.startingPrice.toLocaleString()}
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Load More Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;