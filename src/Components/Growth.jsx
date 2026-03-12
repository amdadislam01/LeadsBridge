import React from 'react';
import amz from "../assets/amz.png"
import { Link } from 'react-router';

const Growth = () => {
    return (
        <section className="max-w-300 mx-auto px-4 my-15">
            <div className="flex flex-col items-center space-y-2 mt-20">
                <div className="flex items-center gap-1">
                    <img src={amz} alt="" className="w-8" />
                    <p className="text-sm">
                        Growth <span className="word">Business</span>
                    </p>
                </div>
                <h2 className="md:text-5xl text-2xl font-bold">
                    The Harsh Reality of <br />
                    Selling on <span className="word">Amazon</span>
                </h2>
                <p className="text-[8px] text-center text-gray-600">
                    Selling on Amazon is tough. Do these struggles sound familiar? Without the <br /> right strategy, you’re losing money, time, and opportunities.
                </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-7 px-4 mt-15">
                <div className=" border border-gray-300 rounded-lg  p-4  hover:shadow-md transition">
                    <h2 className="word">Lost in Competition?</h2>
                    <div className="w-0.5 bg-orange-300 h-9 word"></div>
                    <h2>10M+ sellers & 350M+ product how do you stand out?</h2>
                </div>
                <div className=" border border-gray-300 rounded-lg  p-4  hover:shadow-md transition">
                    <h2 className="word">Burning Cash on Ads?</h2>
                    <div className="w-0.5 bg-orange-300 h-9 word"></div>
                    <h2>PPC feels like a money pit with no returns.</h2>
                </div>
                <div className=" border border-gray-300 rounded-lg  p-4  hover:shadow-md transition">
                    <h2 className="word">Low Rankings?</h2>
                    <div className="w-0.5 bg-orange-300 h-9 word"></div>
                    <h2>Amazon's complex algorithm keeps changing.</h2>
                </div>
                <div className=" border border-gray-300 rounded-lg  p-4  hover:shadow-md transition">
                    <h2 className="word">Inventory Headaches?</h2>
                    <div className="w-0.5 bg-orange-300 h-9 word"></div>
                    <h2>Stockouts, overstocking, at the wrong time?</h2>
                </div>
                <div className=" border border-gray-300 rounded-lg  p-4 hover:shadow-md transition">
                    <h2 className="word">Risk of Account Suspension?</h2>
                    <div className="w-0.5 bg-orange-300 h-9 word"></div>
                    <h2>Amazon's strict policies make selling stressful.</h2>
                </div>
                <div className=" border border-gray-300 rounded-lg  p-4  hover:shadow-md transition">
                    <h2 className="word">Wasting Time & Getting Stuck</h2>
                    <div className="w-0.5 bg-orange-300 h-9 word"></div>
                    <h2>Managing it all alone is overwhelming</h2>
                </div>
            </div>
            <Link to="#" className='flex justify-center items center mt-6'>
                <button className='custom-btn'>Take to an Expert</button>
            </Link>
        </section>
    );
};

export default Growth;