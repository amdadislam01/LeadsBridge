import React from "react";
import amz from "../assets/amz.png";
import logo from "../assets/logo.png";
import img1 from "../assets/ellipse1.png";
import img2 from "../assets/ellipse2.png";

const Value = () => {
    return (
        <section className="bg-[#141414] text-white">
            <div className="max-w-300 md:px-4 px-4 mx-auto flex items-center">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 mt-12 md:mt-0">
                    {/* Left Content */}
                    <div className="space-y-2 ">
                        <div className="flex items-center gap-1">
                            <img src={amz} alt="" />
                            <h2>
                                Why <span className="word">Choose Us</span>
                            </h2>
                        </div>
                        <div>
                            <h2 className="text-6xl">
                                Why Choose <span className="word">FINTRIXX?</span>
                            </h2>
                            <p className="text-lg">
                                Amazon is tough—we make it easy. At FINTRIXX, we help sellers rank higher, scale faster, <br /> & sell smarter. We analyze trends, optimize ads, manage inventory, & protect your account <br /> so you can focus on your business. <br />
                                🚀 No more guesswork. No more wasted money. Just real results.
                            </p>
                        </div>
                        <div className="w-90">
                            <button className="btn-custom ">Book a Free Consultation</button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:relative h-0 md:h-117.5 flex justify-center items-center">
                        <img src={logo} alt="FINTRIXX Logo" className="w-60 h-60 hidden md:block" />
                        <div className="absolute left-9 top-22 transform translate-x-40 translate-y-1//2 rotate-7">
                            <img src={img1} alt="" className="w-37 " />
                        </div>
                        <div className="absolute -right-6 top-63 transform translate-x-20 -translate-y-1/2 rotate-10">
                            <img src={img2} alt="" className="w-37 " />
                        </div>

                        <div className="absolute -right-40 top-1/5 transform translate-y-1/ flex flex-col gap-4">
                            <p className="flex items-center gap-2 bg-[#242424] text-white px-3 py-4 rounded-md">🚀 Proven Expertise</p>
                        </div>
                        <div className="absolute -right-50 top-45 transform translate-y-1/ flex flex-col gap-4">
                            <p className="flex items-center gap-2 bg-[#242424] text-white px-3 py-4 rounded-md">🚀 Maximized Visibility</p>
                        </div>
                        <div className="absolute -right-47 top-65 transform translate-y-1/ flex flex-col gap-4">
                            <p className="flex items-center gap-2 bg-[#242424] text-white px-5 py-4 rounded-md">🚀 Strategic Growth</p>
                        </div>
                        <div className="absolute -right-42 top-84 transform translate-y-1/ flex flex-col gap-4">
                            <p className="flex items-center gap-2 bg-[#242424] text-white px-3 py-4 rounded-md">🚀 Exclusive Partnerships</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Value;