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
import Link from 'next/link';

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
              <Link
                href="/"
                className="text-gray-600 hover:text-primary flex items-center gap-2 group"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Home
              </Link>
              <Link
                href="/properties"
                className="text-gray-600 hover:text-primary flex items-center gap-2 group"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Properties
              </Link>
              <Link
                href="/about-us"
                className="text-gray-600 hover:text-primary flex items-center gap-2 group"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-primary flex items-center gap-2 group"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Contact
              </Link>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-4">
              
            <Link
                href="/properties"
                className="text-gray-600 hover:text-primary flex items-center gap-2 group"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Properties
              </Link>
              <Link
                href="/blogs"
                className="text-gray-600 hover:text-primary flex items-center gap-2 group"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Blog
              </Link>
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Prop Savvy Realtors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;