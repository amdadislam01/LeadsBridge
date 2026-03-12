import React from "react";
import chart from "../assets/chart.png";
import review from "../assets/review.png";
import amz from "../assets/amz.png";

const PromoSection = () => {
    return (
        <section className="w-full py-15 bg-linear-to-b from-white to-[#ffa600]/20 ">
            <div className="md:max-w-360 mx-auto px-4 flex justify-center items-center">
                {/* Left Side Chary */}
                <div>
                    <img src={chart} alt="" className="md:w-56.75 w-20" />
                </div>
                {/* Middle Word */}
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center gap-1 text-center">
                        <img src={amz} alt="amz" className="md:w-15 md:h-7 w-8 h-3.75  " />
                        <p className="md:text-sm text-[9px]">
                            Your Full-Service <span className="word">Amazon Partner</span>
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 className="md:text-6xl text-lg font-bold">
                            Turn Your Amazon Struggles <br /> into Success-Save Time, <br />
                            <span className="word">Maximize Profits!</span>
                        </h2>
                    </div>
                    <div className="flex justify-center md:w-full w-30 md:text-sm text-[7px]">
                        <button className="custom-btn mt-4">Book a Free Consultation</button>
                    </div>
                </div>
                {/* right side review */}
                <div>
                    <img src={review} alt="" className="md:w-59 w-20" />
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
