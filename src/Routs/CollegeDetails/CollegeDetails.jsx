import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router';

const CollegeDetails = () => {
    const navigate = useNavigate();
    const [college, setCollege] = useState(null);

    // Dummy dynamic data (replace with API later)
    useEffect(() => {
        const storeCollageData = localStorage.getItem("OneCollageData");
        if (storeCollageData) {
            setCollege(JSON.parse(storeCollageData));
        }
    }, []);

    if (!college) return <div className="p-10 text-center text-gray-600">Loading...</div>;

    return (
        <div className="min-h-screen bg-white">
            {/* Banner Section */}
            <div
                className="relative w-full h-64 md:h-80 lg:h-96 rounded-b-3xl overflow-hidden"
                style={{
                    backgroundImage: `url(${college.banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-8 md:px-16">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-sm mb-4 text-gray-200 hover:text-white"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Colleges
                    </button>

                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{college.name}</h1>

                    <div className="flex items-center mb-4">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 font-medium text-yellow-300">
                            {college.rating} / 5.0
                        </span>
                    </div>

                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow-md">
                        Apply Now
                    </button>
                </div>
            </div>

            {/* Page Content */}
            <div className="max-w-6xl mx-auto p-8">
                {/* Tabs */}
                <div className="flex border-b mb-6 space-x-4">
                    <NavLink to={'/collageDetails'} className={`capitalize px-4 py-2 font-medium "text-gray-500 hover:text-purple-500"
                        }`}> collageDetails </NavLink>
                    <NavLink to={'/collageDetails/events'} className={`capitalize px-4 py-2 font-medium "text-gray-500 hover:text-purple-500"
                        }`}> events </NavLink>
                    <NavLink to={'/collageDetails/research'} className={`capitalize px-4 py-2 font-medium "text-gray-500 hover:text-purple-500"
                        }`}> research </NavLink>
                    <NavLink to={'/collageDetails/sports'} className={`capitalize px-4 py-2 font-medium "text-gray-500 hover:text-purple-500"
                        }`}> sports </NavLink>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Content */}
                    <div className="md:col-span-2 space-y-6">
                        <Outlet context={{ college: college }} ></Outlet>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6">
                        <div className="border bg-blue-50 rounded-xl p-4">
                            <h3 className="font-semibold mb-2">Quick Info</h3>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>🎓 Admission Period:</strong> {college.admissionPeriod}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>⭐ Rating:</strong> {college.rating} / 5.0
                            </p>
                        </div>

                        <div className="border bg-blue-50 rounded-xl p-4">
                            <h3 className="font-semibold mb-2">Apply Now</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Ready to start your journey? Submit your application today!
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded-md">
                                Start Application
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;