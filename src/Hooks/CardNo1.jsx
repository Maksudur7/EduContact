import React from "react";
import { MapPin, CalendarDays, Star } from "lucide-react";
import { NavLink } from "react-router-dom";

const CardNo1 = () => {
    const colleges = [
        {
            name: "Harvard University",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
            rating: 4.9,
            location: "Cambridge, MA",
            admissionDate: "12/1/2024",
            researchProjects: 150,
            events: ["Annual Science Fair", "Cultural Festival", "Tech Meet"],
            sports: ["Basketball", "Football", "Baseball", "Swimming"],
        },
        {
            name: "Stanford University",
            image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800",
            rating: 4.8,
            location: "Stanford, CA",
            admissionDate: "1/10/2025",
            researchProjects: 120,
            events: ["Innovation Week", "Sports Fest"],
            sports: ["Tennis", "Basketball"],
        },
        {
            name: "Harvard University",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
            rating: 4.9,
            location: "Cambridge, MA",
            admissionDate: "12/1/2024",
            researchProjects: 150,
            events: ["Annual Science Fair", "Cultural Festival", "Tech Meet"],
            sports: ["Basketball", "Football", "Baseball", "Swimming"],
        },
        {
            name: "Stanford University",
            image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800",
            rating: 4.8,
            location: "Stanford, CA",
            admissionDate: "1/10/2025",
            researchProjects: 120,
            events: ["Innovation Week", "Sports Fest"],
            sports: ["Tennis", "Basketball"],
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6 m-10">
            {colleges.map((college, idx) => (
                <div
                    key={idx}
                    className=" w-96  bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
                >
                    {/* Image */}
                    <img
                        src={college.image}
                        alt={college.name}
                        className="w-full h-48 object-cover"
                    />

                    {/* Content */}
                    <div className="p-5">
                        {/* Title & Rating */}
                        <div className="flex items-center justify-between mb-1">
                            <h2 className="text-lg font-semibold text-gray-900">
                                {college.name}
                            </h2>
                            <div className="flex items-center text-yellow-400 text-sm font-medium">
                                <Star size={16} className="fill-yellow-400 text-yellow-400 mr-1" />
                                {college.rating}
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                            <MapPin size={14} className="mr-1 text-gray-500" />
                            {college.location}
                        </div>

                        {/* Admission Date */}
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                            <CalendarDays size={14} className="mr-1 text-gray-500" />
                            Admission:{" "}
                            <span className="ml-1 font-medium text-gray-800">
                                {college.admissionDate}
                            </span>
                        </div>

                        {/* Research Projects */}
                        <p className="text-sm mb-3">
                            <span className="text-blue-500 hover:underline cursor-pointer">
                                Research Projects:
                            </span>{" "}
                            {college.researchProjects}
                        </p>

                        {/* Events */}
                        <div className="mb-3">
                            <p className="text-sm font-medium text-gray-800 mb-1">Events:</p>
                            <div className="flex flex-wrap gap-2">
                                {college.events?.slice(0, 2).map((event, index) => (
                                    <span
                                        key={index}
                                        className="bg-black text-white text-xs px-3 py-1 rounded-full"
                                    >
                                        {event}
                                    </span>
                                ))}
                                {college.events?.length > 2 && (
                                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border">
                                        +{college.events.length - 2} more
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Sports */}
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-800 mb-1">Sports:</p>
                            <div className="flex flex-wrap gap-2">
                                {college.sports?.slice(0, 2).map((sport, index) => (
                                    <span
                                        key={index}
                                        className="bg-black text-white text-xs px-3 py-1 rounded-full"
                                    >
                                        {sport}
                                    </span>
                                ))}
                                {college.sports?.length > 2 && (
                                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border">
                                        +{college.sports.length - 2} more
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Button */}
                        <NavLink to={'/collageDetails'} >
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full font-medium">
                                View Details
                            </button>
                        </NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardNo1;
