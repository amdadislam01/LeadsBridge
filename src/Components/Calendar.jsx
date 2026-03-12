import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import timezones from "/public/timezones.json";
import { FaEarthAfrica } from "react-icons/fa6";

const Calendar = () => {
    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const [currentMonth, setCurrentMonth] = useState(2); // March
    const [currentYear, setCurrentYear] = useState(2025);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTimezone, setSelectedTimezone] = useState("Asia/Dhaka (3:00pm)");

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const changeMonth = (direction) => {
        let newMonth = currentMonth + direction;
        let newYear = currentYear;
        if (newMonth < 0) {
            newMonth = 11;
            newYear -= 1;
        } else if (newMonth > 11) {
            newMonth = 0;
            newYear += 1;
        }
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
        setSelectedDate(null);
        setSelectedDay(null);
    };

    return (
        <div className="w-full max-w-md">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <button onClick={() => changeMonth(-1)} className="p-2 hover:text-blue-600  rounded-full transition-colors">
                        <IoChevronBack size={20} />
                    </button>
                    <h3 className="text-lg font-medium text-gray-700">
                        {monthNames[currentMonth]} {currentYear}
                    </h3>
                    <button onClick={() => changeMonth(1)} className="p-2 hover:text-blue-600  rounded-full transition-colors">
                        <IoChevronForward size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-4">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`text-[11px] font-bold py-2 rounded-lg transition-all
                        ${selectedDay === day ? "bg-[#edf5ff] text-[#0966e8] shadow-md" : "text-gray-500 hover:bg-blue-50 hover:[#0966e8]"}`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {dates.map((date) => (
                    <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`w-11 h-11 flex items-center justify-center rounded-full text-sm font-semibold transition-all
                        ${selectedDate === date ? "bg-[#edf5ff] text-[#0966e8] shadow-sm " : "text-gray-"}`}
                    >
                        {date}
                    </button>
                ))}
            </div>

            {/* Timezone */}
            <div className="flex items-center gap-2 mt-6">
                <span>
                    <FaEarthAfrica />
                </span>
                <select value={selectedTimezone} onChange={(e) => setSelectedTimezone(e.target.value)} className="text-sm font-medium text-gray-700 bg-transparent border-none outline-none cursor-pointer hover:underline">
                    {timezones.map((tz) => (
                        <option key={tz.value} value={tz.value}>
                            {tz.value} ({tz.offset})
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Calendar;
