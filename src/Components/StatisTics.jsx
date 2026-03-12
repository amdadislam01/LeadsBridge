import React from "react";

const StatsSection = () => {
    const stats = [
        { value: "600 million", label: "Amazon Offers Over Products" },
        { value: "$638.0 billion", label: "Amazon Global Net Sales Revenue" },
        { value: "11.95 million", label: "Amazon Handles Orders Daily" },
        { value: "$1.6 billion", label: "Amazon Average Daily Sales Revenue" },
    ];

    return (
        <section className="w-full px-6 py-12">
            <p className="text-center mb-10">Amazon Market Statistics Worldwide 2024</p>
            <div className="max-w-300 mx-auto flex flex-wrap justify-center  gap-6">
                
                {stats.map((item, index) => (
                    <div key={index} className="w-70.5 h-41 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center hover:shadow-md transition">
                        <h3 className="text-2xl font-bold">{item.value}</h3>
                        <p className="mt-2 text-gray-700 text-sm">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
