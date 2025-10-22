"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import guestData from './guestData';



const GuestOfHonor: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % guestData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? guestData.length - 1 : prevIndex - 1
        );
    };

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex]);

    return (
        <div className="p-10">
            {/* Header */}
            <h1 className="text-4xl font-bold mb-4 pt-4">Guests of Honor</h1>

            {/* Image Slider */}
            <div className="relative w-5/5 mx-auto overflow-hidden h-[750px] max-w-[75%]">
                {guestData.map((guest, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                            index === currentIndex
                                ? 'translate-x-0 z-10'
                                : index < currentIndex
                                ? '-translate-x-full z-0'
                                : 'translate-x-full z-0'
                        }`}
                    >
                        <Image
                            src={guest.imagePath}
                            alt={guest.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                ))}

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-4 z-20 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
                >
                    &#8592;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-4 z-20 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
                >
                    &#8594;
                </button>
            </div>

            {/* Guest Details */}
            <div className="text-center mt-4">
                <h2 className="text-xl font-bold">{guestData[currentIndex].name}</h2>
                <p className="text-gray-600">{guestData[currentIndex]['designation']}</p>
            </div>
        </div>
    );
};

export default GuestOfHonor;