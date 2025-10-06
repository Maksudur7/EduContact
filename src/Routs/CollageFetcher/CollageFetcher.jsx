import React from 'react';
import { Search } from "lucide-react";
import CardNo1 from '../../Hooks/CardNo1';
const CollageFetcher = () => {
    return (
        <div>
            <div className="h-[50vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#f2f9ff] to-[#f7f7f7]">
                {/* Title */}
                <h1 className="text-5xl font-bold mb-4">
                    <span className="text-black">All </span>
                    <span className="text-blue-500">Colleges</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Explore our comprehensive list of top colleges and universities
                </p>

                {/* Search Bar */}
                <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-[400px] max-w-[90%]">
                    <input
                        type="text"
                        placeholder="Search colleges or locations..."
                        className="flex-grow text-gray-700 outline-none bg-transparent px-2"
                    />
                    <button className="text-gray-500 hover:text-gray-700">
                        <Search size={18} />
                    </button>
                </div>
            </div>
            <CardNo1></CardNo1>
        </div>
    );
};

export default CollageFetcher;