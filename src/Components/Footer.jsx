import React from 'react';
import { MdEmail } from "react-icons/md";
import logo from "../assets/main.png";


const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-18 mb-12">
                {/* Column 1: Company Logo & Description */}
                <div className="flex flex-col gap-6">
                    {/* Logo */}
                                    <div className="flex items-center">
                                        <a href="/">
                                            <img src={logo} alt="Logo" className="w-8 h-8" />
                                        </a>
                                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-xs uppercase font-medium">
                        FINTRIXX – Your Amazon Growth Partner Since 2016, we boost Amazon success with expert SEO, PPC, and growth strategies.
                    </p>
                </div>

                {/* Column 2: Navigation Links */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Home</h3>
                    <ul className="flex flex-col gap-4 text-gray-400 font-medium">
                        <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="/why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
                        <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Contact</h3>
                    <div className="flex items-center gap-3 text-gray-400 font-medium">
                        <MdEmail className="text-2xl" />
                        <a href="mailto:leadsbridgedemo@example.com" className="hover:text-white transition-colors">
                            leadsbridgedemo@example.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright & Policy Links */}
            <div className="max-w-6xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium tracking-tight">
                <p>&copy; 2025 Copyright Amazon</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;