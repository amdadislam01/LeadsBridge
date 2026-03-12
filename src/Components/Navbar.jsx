import React, { useState } from "react";
import logo from "../assets/main.png";
import { NavLink } from "react-router";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full sticky top-0 z-50 bg-white">
            <div className="max-w-300 mx-auto p-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/">
                        <img src={logo} alt="Logo" className="w-8 h-8" />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink to="/services" className={({ isActive }) => (isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500")}>
                        Services
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500")}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500")}>
                        Contact
                    </NavLink>
                    <button className="custom-btn">Book a Free Consultation</button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)} className="text-gray-700 text-2xl ">
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu (slide from right) */}
            <div className={`md:hidden absolute right-0 top-full bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="px-6 py-4 space-y-4 w-64">
                    <NavLink to="/services" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-orange-500">
                        Services
                    </NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-orange-500">
                        About
                    </NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-orange-500">
                        Contact
                    </NavLink>
                    <button onClick={() => setOpen(false)} className="custom-btn w-full text-sm">
                        Book a Free Consultation
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
