import React from "react";
import amz from "../assets/amz.png";
import { Link } from "react-router";
const Opinion = () => {
    return (
        <section className="bg-[#141414] text-white py-15">
            <div className="max-w-300 mx-auto px-4">
                <div className="text-center space-y-3">
                    <div className="flex items-center gap-1 justify-center">
                        <img src={amz} alt="" className="w-10" />
                        <p className="lg:text-lg sm:text-[8px]">
                            Growth <span className="word">Business</span>
                        </p>
                    </div>
                    <h2 className="text-5xl">
                        How We Help You <br />
                        Win on <span className="word">Amazon</span>
                    </h2>
                    <p className="text-sm text-gray-500">
                        At FINTRIXX, we don’t guess—we use data-driven <br /> strategies to scale your business
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 mt-10">
                    <div className=" border border-gray-700 bg-[#242424] rounded-lg  p-4  hover:shadow-md transition">
                        <h2 className="word">We Make You Stand Out</h2>
                        <div className="w-0.5 bg-[#4f3d1c] h-9 word"></div>
                        <h2>Targeted marketing to reach the right buyers. </h2>
                    </div>
                    <div className=" border border-gray-700 bg-[#242424] rounded-lg  p-4  hover:shadow-md transition">
                        <h2 className="word">We Fix Your Rankings</h2>
                        <div className="w-0.5 bg-[#4f3d1c] h-9 word"></div>
                        <h2>SEO, keywords & ads for visibility.</h2>
                    </div>
                    <div className=" border border-gray-700 bg-[#242424] rounded-lg  p-4  hover:shadow-md transition">
                        <h2 className="word">We Optimize Your Ads</h2>
                        <div className="w-0.5 bg-[#4f3d1c] h-9 word"></div>
                        <h2>No wasted budget—only high ROI advertising.</h2>
                    </div>
                    <div className=" border border-gray-700 bg-[#242424] rounded-lg  p-4  hover:shadow-md transition">
                        <h2 className="word">We Manage Your Inventory</h2>
                        <div className="w-0.5 bg-[#4f3d1c] h-9 word"></div>
                        <h2>So you never run out of stock or overstock.</h2>
                    </div>
                    <div className=" border border-gray-700 bg-[#242424] rounded-lg  p-4  hover:shadow-md transition">
                        <h2 className="word">We Keep Your Account Safe</h2>
                        <div className="w-0.5 bg-[#4f3d1c] h-9 word"></div>
                        <h2>void suspensions, policy violations & account risks.</h2>
                    </div>
                    <div className=" border border-gray-700 bg-[#242424] rounded-lg  p-4  hover:shadow-md transition">
                        <h2 className="word">We Scale Your Business</h2>
                        <div className="w-0.5 bg-[#4f3d1c] h-9 word"></div>
                        <h2>Expansion, market entry & growth.</h2>
                    </div>
                </div>
                <Link to="#" className="flex justify-center items center mt-6">
                    <button className="btn-custom">Take to an Expert</button>
                </Link>
            </div>
        </section>
    );
};

export default Opinion;
