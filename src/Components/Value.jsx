import React from "react";
import amz from "../assets/amz.png";
import logo from "../assets/logo.png";
import img1 from "../assets/ellipse1.png";
import img2 from "../assets/ellipse2.png";
import { Link } from "react-router";

const Value = () => {
    return (
        <section className="bg-[#141414] text-white py-12 md:py-20 overflow-hidden">
            <div className="max-w-300 px-6 mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    
                    {/* Left Content */}
                    <div className="space-y-6 text-center lg:text-left flex-1">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <img src={amz} alt="Amazon Icon" className="w-6 h-6" />
                            <h2 className="text-lg font-medium">
                                Why <span className="text-[#FF9900]">Choose Us</span>
                            </h2>
                        </div>
                        
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                Why Choose <span className="text-[#FF9900]">FINTRIXX?</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Amazon is tough—we make it easy. At FINTRIXX, we help sellers rank higher, scale faster, & sell smarter. 
                                We analyze trends, optimize ads, manage inventory, & protect your account so you can focus on your business. 
                                <br className="hidden md:block" />
                                <span className="block mt-4">🚀 No more guesswork. No more wasted money. Just real results.</span>
                            </p>
                        </div>

                        <div className="pt-4">
                            <button className="btn-custom w-full md:w-auto px-8 py-4 bg-[#FF9900] text-black font-bold rounded-lg hover:bg-white transition-all">
                                Book a Free Consultation
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative flex flex-col md:flex-row justify-center items-center flex-1 w-full mt-10 lg:mt-0">
                        {/* Center Logo with Ellipses */}
                        <div className="relative z-10">
                            <img src={logo} alt="FINTRIXX Logo" className="w-48 h-48 md:w-60 md:h-60 object-contain" />
                            
                            {/* Decorative Ellipses - Hidden on small mobile to save space, or kept small */}
                            <img src={img1} alt="" className="absolute -top-5 -left-10 w-24 md:w-37 opacity-50 md:opacity-100 rotate-12" />
                            <img src={img2} alt="" className="absolute -bottom-5 -right-10 w-24 md:w-37 opacity-50 md:opacity-100 -rotate-12" />
                        </div>

                        {/* Badges - Desktop: Absolute positioning | Mobile: Grid/List layout */}
                        <div className="mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 lg:block gap-3 w-full sm:w-auto">
                            <div className="lg:absolute lg:-right-10 lg:top-0 transform lg:-translate-y-1/2">
                                <p className="badge-style">🚀 Proven Expertise</p>
                            </div>
                            <div className="lg:absolute lg:-right-20 lg:top-24">
                                <p className="badge-style">🚀 Maximized Visibility</p>
                            </div>
                            <div className="lg:absolute lg:-right-16 lg:top-48">
                                <p className="badge-style">🚀 Strategic Growth</p>
                            </div>
                            <div className="lg:absolute lg:-right-8 lg:top-72">
                                <p className="badge-style">🚀 Exclusive Partnerships</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* In-file CSS for the badges to keep code clean */}
            <style jsx>{`
                .badge-style {
                    background-color: #242424;
                    color: white;
                    padding: 12px 20px;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    white-space: nowrap;
                    border: 1px solid #333;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                }
                @media (min-width: 1024px) {
                    .badge-style {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Value;