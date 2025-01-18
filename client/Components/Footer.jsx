"use client"

import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Building2
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/5 via-primary/40 to-primary/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Prop Savvy</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your trusted partner in real estate, making property dreams come true with expertise and dedication.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Properties', 'About Us', 'Services', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Property Sales',
                'Property Management',
                'Real Estate Consulting',
                'Market Analysis',
                'Investment Advisory',
                'Property Valuation'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary/80" />
                  <span>123 Property Lane, Real Estate City, 12345</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-primary flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary/80" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@propsavvy.com" className="text-gray-600 hover:text-primary flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary/80" />
                  <span>info@propsavvy.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary/80" />
                <span className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6">Stay updated with the latest properties and real estate news</p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Prop Savvy Realtors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-primary text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-primary text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-primary text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;