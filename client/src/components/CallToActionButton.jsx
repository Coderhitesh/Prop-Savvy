'use client'
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Plus, X } from 'lucide-react';
import { FaComments } from 'react-icons/fa';

const CallToActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8">
      {/* Sub buttons */}
      <div className={`flex flex-col-reverse gap-4 mb-4 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {/* WhatsApp Button */}
        <button
          onClick={() => window.open('https://wa.me/+919354570057', '_blank')}
          className="w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </button>

        {/* Call Button */}
        <button
          onClick={() => window.location.href = 'tel:+919354570057'}
          className="w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Call"
        >
          <Phone size={24} />
        </button>

        {/* Email Button */}
        <button
          onClick={() => window.location.href = 'mailto:info@propsavvyrealtors.com'}
          className="w-12 h-12 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Email"
        >
          <Mail size={24} />
        </button>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={toggleMenu}
        className={`w-14 h-14 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 hover:shadow-xl transform transition-all duration-300 flex items-center justify-center ${isOpen ? 'rotate-45' : ''}`}
        aria-label="Toggle contact options"
      >
        {isOpen ? <FaComments size={28} /> : <FaComments size={28} />}
      </button>
    </div>
  );
};

export default CallToActionButton;