// "use client";

import React from 'react';
import { Building2, Award, Users, Target, ArrowUpRight, Clock, Shield, Globe2 } from 'lucide-react';
import Link from 'next/link';
import Team from './Team';

function AboutHome() {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            About Prop Savvy Realtors
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforming Dreams Into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Addresses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Since our inception, we've been more than just a real estate company. We're your partners in finding the perfect place to call home.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 transform hover:scale-[1.02] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    alt="Luxury home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 transform hover:scale-[1.02] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    alt="Modern interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-64 transform hover:scale-[1.02] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    alt="Property view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 transform hover:scale-[1.02] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    alt="House exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">2.5K+</div>
                  <div className="text-gray-600">Properties Sold</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Your Trusted Partner in Real Estate Excellence
              </h3>
              <p className="text-gray-600">
                Prop Savvy Realtors provides the full service related to property development and management. We deals with sales, design development, construction. If you're looking for more specific information or have a particular query about Prop Savvy Realtors, feel free to ask!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Quality</h4>
                    <p className="text-sm text-gray-600">Curated luxury properties</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Always here to help</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trusted Agency</h4>
                    <p className="text-sm text-gray-600">Licensed professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Globe2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Reach</h4>
                    <p className="text-sm text-gray-600">International network</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link href={'/about-us'} className="group mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02]">
                <span>Learn More About Us</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <Users className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Centric Approach</h3>
            <p className="text-gray-600">Your satisfaction is our top priority. We work tirelessly to exceed your expectations.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <Target className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Expertise</h3>
            <p className="text-gray-600">Deep understanding of local and global real estate markets to serve you better.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <Building2 className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Properties</h3>
            <p className="text-gray-600">Access to exclusive listings and luxury properties across prime locations.</p>
          </div>
        </div>
        <Team />
      </div>
    </div>
  );
}

export default AboutHome;