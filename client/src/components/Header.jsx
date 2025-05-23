"use client";

import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
// import logo from '@//logo.jpg'
import siteLogo from '/public/logo.jpg';
import PopUpForm from './PopUpForm';
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // const interval = setInterval(() => {
            setShowPopup(true);
        // }, 10000); // 10 seconds

        // return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const handleOpenPopUp = () => setShowPopup(true);
    const handleClosePopUp = () => setShowPopup(false);

    return (
        <header className="w-full bg-white shadow-md sticky top-0 left-0 right-0 z-50">
            {/* Top Bar */}
            <div className="bg-slate-900 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                    <p className="hidden sm:block">Welcome to Prop Savvy Realtors</p>
                    <div className="flex items-center gap-4">
                        <a href="tel:+1234567890" className="hover:text-slate-300 flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            <span>+91 9354570057</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href={'/'} className="flex items-center space-x-2">
                        <Image
                            width={100}
                            height={100}
                            src={siteLogo}
                            priority={true}
                            className='w-full'
                            alt='Prop Savvy Realtors'
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                        <Link href="/properties" className="nav-link">
                            Properties
                        </Link>
                        <Link href="/blogs" className="nav-link">
                            Blogs
                        </Link>
                        <Link href="/about-us" className="nav-link">
                            About Us
                        </Link>
                        <Link href="/contact" className="nav-link">
                            Contact
                        </Link>
                        <a onClick={handleOpenPopUp} className="nav-link cursor-pointer bg-[#0F172A] text-white py-2 px-4 rounded-sm">
                            Get Quote
                        </a>
                    </nav>


                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-slate-700 hover:text-slate-900"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col px-4 py-2">
                        <Link href="/" className="mobile-nav-link py-4 border-b border-gray-200">
                            Home
                        </Link>
                        <Link href="/properties" className="mobile-nav-link py-2 border-b border-gray-200">
                            Properties
                        </Link>
                        <Link href="/blogs" className="mobile-nav-link py-2 border-b border-gray-200">
                            Blogs
                        </Link>
                        <Link href="/about-us" className="mobile-nav-link py-2 border-b border-gray-200">
                            About Us
                        </Link>
                        <Link href="/contact" className="mobile-nav-link py-2 border-b border-gray-200">
                            Contact
                        </Link>
                        <a onClick={handleOpenPopUp} className="nav-link cursor-pointer bg-[#0F172A] text-white py-2 px-4 rounded-sm">
                            Get Quote
                        </a>
                    </nav>
                </div>
            )}
            <PopUpForm isOpen={showPopup} onClose={handleClosePopUp} />

        </header>
    );
}

export default Header;