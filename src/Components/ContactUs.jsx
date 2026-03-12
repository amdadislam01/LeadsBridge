import React from "react";
import amz from "../assets/amz.png";
import { MdOutlineEmail, MdOutlineWatchLater } from "react-icons/md";
import { SlCamrecorder } from "react-icons/sl";
import Calendar from "./Calendar";

const ContactUs = () => {
    return (
        <section className="my-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center lg:space-y-4 space-y-2 mb-10">
                    <div className="flex items-center gap-2 justify-center">
                        <img src={amz} alt="logo" className="w-8" />
                        <p className="text-sm font-medium ">
                            <span className="word">Contact</span> Us
                        </p>
                    </div>
                    <h2 className="lg:text-5xl text-3xl font-extrabold text-slate-900">
                        Let's Scale Your <span className="word">Business!</span>
                    </h2>
                    <p className="lg:text-lg text-sm text-gray-500 font-medium">FINTRIXX – Your Amazon Growth Partner</p>
                </div>

                <div className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-xl shadow-md min-h-125">
                    {/* Left Side: Content */}
                    <div className="lg:w-[40%] w-full p-8 lg:p-12">
                        <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">Naim</span>
                        <h1 className="text-3xl font-bold text-slate-900 mt-4 leading-tight">Book Your Strategy Session: Accelerate Your Growth!</h1>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-center text-gray-700 font-semibold text-lg">
                                <MdOutlineWatchLater className="mr-3 text-2xl text-gray-500" />
                                30 min
                            </div>

                            <div className="flex items-start text-gray-600">
                                <SlCamrecorder className="mr-3 mt-1 text-2xl text-gray-500" />
                                <p className="text-base">Web conferencing details provided upon confirmation.</p>
                            </div>
                        </div>

                        <div className="lg:mt-58 mt-20">
                            <button className="text-blue-600 font-semibold text-sm hover:underline transition-all">Cookie settings</button>
                        </div>
                    </div>

                    {/* Right Side: Calendar  */}
                    <div className="lg:w-[60%] w-full p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-gray-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Select a Date & Time</h2>
                        <div className="flex flex-col items-center">
                            <Calendar />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4 mt-10">
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-xl ">
                            <MdOutlineEmail />
                        </span>
                        <p>leadsbridgedemo@example.com</p>
                    </div>
                    <p>
                        <span className="word">Note: </span>Have question? Need a strategy? We're here to help.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
