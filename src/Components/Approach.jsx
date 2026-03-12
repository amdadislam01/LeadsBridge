import React from 'react';
import candle from "../assets/candle.png";
import cms from "../assets/cms.png";
import earth from "../assets/earth.png";
import { Link } from 'react-router';
const Approach = () => {
    return (
        <section className="bg-black text-white py-15">
            <div className="max-w-300 md:px-4 px-4 mx-auto flex flex-col md:flex-row  justify-between items-center">
                {/* Left Images */}
                <div className="flex  justify-between gap-3 px-4  md:w-140 md:h-122 w-100 h-70">
                    <img src={candle} alt="Data Analytics Chart" className="md:w-67 md:h-100  overflow-hidden bg-no-repeat bg-cover bg-center rounded-lg shadow-lg" />
                    <img src={cms} alt="Business Growth" className="md:w-67 md:h-100 md:mt-21.5  overflow-hidden bg-no-repeat bg-cover bg-center rounded-lg shadow-lg" />
                </div>
                {/* Right Content */}
                <div className="md:w-140 md:h-118 mt-4 md:mt-0">
                    <h2 className="md:text-5xl text-xl mb-10">
                        Our <span className="word">Approach</span>
                    </h2>
                    <div className="flex gap-2">
                        <div className="w-px bg-gray-200-50 bg-gray-600 h-6 word" />
                        <h className="ml-4 text-xl">🎯 Mission</h>
                    </div>
                    <div className="border border-gray-600 mt-4 ml-2 w-full"></div>
                    <div className="flex">
                        <div className="w-2 bg-[#ffa600] h-70 word" />
                        <div className="ml-5 space-y-5">
                            <div className="flex items-center gap-2 mt-5">
                                <img src={earth} alt="earth" className="w-6 h-6" />
                                <p className="text-2xl">Vission</p>
                            </div>
                            <h2>
                                Founded in 1983, SecureWealth was created to address the challenges of traditional banking—long queues, complicated processes, and limited access. We started with a vision to make banking simple, accessible, and convenient for everyone. Today, we proudly serve 7+
                                million users, helping them manage their finances with ease.
                            </h2>
                            <Link to="#">
                                <button className="btn-custom mt-4">Book a Free Strategy Call</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach
