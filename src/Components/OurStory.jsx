import React from 'react';
import amz from "../assets/amz.png"
import { Link } from 'react-router';

const OurStory = () => {
    return (
        <div className="flex justify-center items-center flex-col space-y-4 mb-20">
            <div className="flex justify-center items-center gap-1">
                <img src={amz} alt="" className="w-10 h-auto" />
                <p className="text-sm">
                    Our <span className="word">Story</span>
                </p>
            </div>
            <div className="text-center">
                <h2 className="md:text-4xl text-lg font-bold">
                    Struggling With Amazon Sales? Let's Scale Your <br />
                    Business—<span className="word">Faster, Smarter, </span>& Stress-Free!
                </h2>
                <p className="md:text-sm text-[9px] text-gray-600">
                    Amazon is complex, but success doesn’t have to be. At <span className="word">FINTRIXX</span>, we help sellers increase <br /> sales, optimize ads, rank higher, and expand into new markets —without wasting time or
                    <br /> money. 🎯 Let’s turn your struggles into scalable success!
                </p>
            </div>
            <Link to="#">
                <button className="custom-btn">Book a Free Strategy Call</button>
            </Link>
        </div>
    );
};

export default OurStory;