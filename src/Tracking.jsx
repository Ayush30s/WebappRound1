import React, { useState, useEffect } from "react";

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [hourSpeed, setHourSpeed] = useState(1); // Initial speed multiplier for hours
    const [minuteSpeed, setMinuteSpeed] = useState(1); // Initial speed multiplier for minutes
    const [secondSpeed, setSecondSpeed] = useState(1); // Initial speed multiplier for seconds

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date()); // Update current date every second
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const getHourDegrees = () => {
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        return (hours % 12) * 30 + minutes / 2;
    };

    const getMinuteDegrees = () => {
        const minutes = currentDate.getMinutes();
        return minutes * 6;
    };

    const getSecondDegrees = () => {
        const seconds = currentDate.getSeconds();
        return seconds * 6;
    };

    return (
        <div className="container relative m-0 p-0 bg-white w-[100%] h-[100vh] flex flex-col items-center justify-center pt-10">
            <div className="flex justify-center items-center w-[300px] h-[300px] rounded-full text-white bg-black border-gray-500 relative border-4">
                {/* Clock face */}
                {[...Array(12)].map((_, index) => (
                    <span key={index} className="absolute inset-1 text-center transform"
                        style={{ transform: `rotate(${30 * (index + 1)}deg)` }}>
                        <b style={{ transform: `rotate(${-30 * (index + 1)}deg)` }} className="inline-block text-black w-6 rounded-full m-1 font-bold bg-white border-gray-500">{index + 1}</b>
                    </span>
                ))}

                <h1 className="w-2 h-2 bg-white z-10 rounded-full"></h1>

                {/* Hour hand */}
                <div className="hour-hand flex justify-center absolute" style={{ transform: `rotate(${getHourDegrees() * hourSpeed + 180}deg)` }}>
                    <i className="absolute bg-gray-500 w-1 h-[75px] rounded-full"></i>
                </div>

                {/* Minute hand */}
                <div className="minute-hand flex justify-center absolute" style={{ transform: `rotate(${getMinuteDegrees() * minuteSpeed + 180}deg)` }}>
                    <i className="absolute bg-gray-400 w-1 h-[90px] rounded-full"></i>
                </div>

                {/* Second hand */}
                <div className="second-hand flex justify-center absolute" style={{ transform: `rotate(${getSecondDegrees() * secondSpeed + 180}deg)` }}>
                    <i className="absolute bg-red-500 w-1 h-[100px] rounded-full"></i>
                </div>
            </div>

            {/* Sliders for adjusting speeds */}
            <div className="my-10 text-center">
                <label>Hour Hand Speed:</label>
                <input type="range" min="0.1" max="2" step="0.1" value={hourSpeed} onChange={(e) => setHourSpeed(parseFloat(e.target.value))} />
                <br />
                <label>Minute Hand Speed:</label>
                <input type="range" min="0.1" max="2" step="0.1" value={minuteSpeed} onChange={(e) => setMinuteSpeed(parseFloat(e.target.value))} />
                <br />
                <label>Second Hand Speed:</label>
                <input type="range" min="0.1" max="2" step="0.1" value={secondSpeed} onChange={(e) => setSecondSpeed(parseFloat(e.target.value))} />
            </div>
        </div>
    );
};

export default Clock;
