import React from 'react';
import amz from "../assets/amz.png";
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import rocket from "../assets/rocket.png";
import growth from "../assets/growth.png";
import crt from "../assets/crt.png";
import earth from "../assets/earth.png";

const Services = () => {
    return (
        <section className="max-w-300 mx-auto px-4 my-20">
            <div className="flex flex-col justify-center items-center space-y-3">
                <div className="flex items-center gap-1">
                    <img src={amz} alt="amz" className="md:w-12 w-10" />
                    <p className="md:text-sm text-[12px]">
                        Our <span className="word">Services</span>
                    </p>
                </div>
                <h1 className="md:text-5xl text-2xl font-bold">
                    Scale Smarter, <span className="word">Sell Faster</span>
                </h1>
                <p className="text-gray-600 md:text-lg text-sm">We handle everything Amazon so you focus on growing</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10">
                <div className="flex justify-between p-6  border border-gray-200 rounded-lg  hover:shadow-md transition">
                    <div>
                        <h2 className="word">Amazon Growth & Advertising</h2>
                        <div className="w-0.5 bg-orange-300 h-9 word"></div>
                        <p className="flex items-center gap-1 text-[12px] md:text-sm">
                            <IoMdCheckmarkCircleOutline className="text-xl word" />
                            Bid & Budget Optimization – Higher ROI, lower ACOS.
                        </p>
                        <p className="flex items-center gap-1 text-[12px] md:text-sm">
                            <IoMdCheckmarkCircleOutline className="text-xl word" />
                            Monthly PPC Strategy – Tailored for long-term growth.
                        </p>
                    </div>
                    <img src={rocket} alt="rocket" className="md:w-15 md:h-15 w-10 h-10" />
                </div>
                <div className="flex justify-between p-6  border border-gray-200 rounded-lg  hover:shadow-md transition">
                    <div>
                        <h2 className="word">Amazon Growth & Advertising</h2>
                        <div className="w-0.5 bg-orange-300 h-9 word"></div>
                        <p className="flex items-center gap-1 text-[12px] md:text-sm">
                            <IoMdCheckmarkCircleOutline className="text-xl word" />
                            Organic & Sponsored Ranking – More visibility, more sales
                        </p>
                        <p className="flex items-center gap-1 text-[12px] md:text-sm">
                            <IoMdCheckmarkCircleOutline className="text-xl word" />
                            Keyword & Competitor Analysis – Stay ahead of the competition.
                        </p>
                    </div>
                    <img src={growth} alt="rocket" className="md:w-15 md:h-15 w-10 h-10" />
                </div>
                <div className="flex justify-between p-6  border border-gray-200 rounded-lg  hover:shadow-md transition">
                    <div>
                        <h2 className="word">Amazon Growth & Advertising</h2>
                        <div className="w-0.5 bg-orange-300 h-9 word"></div>
                        <p className="flex items-center gap-1 text-[12px] md:text-sm">
                            <IoMdCheckmarkCircleOutline className="text-xl word" />
                            Inventory Forecasting & Restocking – No stockouts, no overstocking.
                        </p>
                        <p className="flex items-center gap-1 text-[12px] md:text-sm">
                            <IoMdCheckmarkCircleOutline className="text-xl word" />
                            Amazon Account Health & Compliance – Avoid suspensions & violations
                        </p>
                    </div>
                    <img src={crt} alt="rocket" className="md:w-15 md:h-15 w-10 h-10" />
                </div>
                <div className="flex justify-between p-6  border border-gray-200 rounded-lg  hover:shadow-md transition">
                    <div>
                        <h2 className="word">Amazon Growth & Advertising</h2>
                        <div className="w-0.5 bg-orange-300 h-9 word"></div>
                        <p className="flex items-center gap-1 text-[12px] md:text-sm">
                            <IoMdCheckmarkCircleOutline className="text-xl word" />
                            Launching New Products – Market research-backed success.
                        </p>
                        <p className="flex items-center gap-1  text-[12px] md:text-sm">
                            <IoMdCheckmarkCircleOutline className="text-xl word" />
                            International Expansion – Sell beyond borders with ease.
                        </p>
                    </div>
                    <img src={earth} alt="rocket" className="md:w-15 md:h-15 w-10 h-10" />
                </div>
            </div>
        </section>
    );
};

export default Services;