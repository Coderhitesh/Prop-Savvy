"use client"

import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, User } from 'lucide-react';
import axios from 'axios'
import toast from 'react-hot-toast';

const ContactHome = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission
    // console.log('Form submitted:', formData);
    try {
      const res = await axios.post('https://www.api.propsavvyrealtors.com/api/v1/create_inquery',formData)
      toast.success(res.data.message)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.log("Internal server error",error)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left side - Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-50 rounded-3xl -rotate-2 transform"></div>
            <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Find Your Dream Home</h2>
                <p className="text-gray-600">
                  Ready to start your real estate journey? Our experts are here to help you every step of the way.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 h-5 w-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl bg-[#0F172A] hover:bg-[#0F172A] transform transition-all duration-200 hover:scale-[1.02] focus:ring-4 focus:ring-primary/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right side - Image and Info */}
          <div className="lg:flex flex-col justify-center hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                alt="Modern luxury home"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Prop Savvy Realtors?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Expert market knowledge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Personalized service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Extensive property portfolio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Seamless buying/selling process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;