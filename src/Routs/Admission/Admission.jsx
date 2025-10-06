import React from 'react';
import { MapPin, Star, CalendarDays, GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom";


const Admission = () => {
    const defaultData = {
        name: "Stanford University",
        rating: 4.8,
        location: "Stanford, CA",
        admission: "1/10/2025",
    };

    const info = defaultData;

    const handelCollageName = (name) => {
        localStorage.setItem("CollageName", JSON.stringify(name));
    }

    return (
        <div className=" m-10  bg-white border rounded-2xl shadow-md p-5 space-y-4 hover:shadow-lg transition-all duration-300">

            <div className='flex justify-between'>
                <div className="flex items-center gap-2">
                    <GraduationCap className="text-blue-500" size={20} />
                    <h2 className="text-xl font-semibold text-gray-800">{info.name}</h2>
                </div>
                <div className="flex items-center gap-2 text-yellow-500">
                    <Star size={18} fill="currentColor" />
                    <span className="text-gray-700 font-medium">{info.rating}</span>
                </div>
            </div>


            <div className='flex justify-between'>
                <div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={18} className="text-red-500" />
                        <span>{info.location}</span>
                    </div>

                    {/* Admission Date */}
                    <div className="flex items-center gap-2 text-gray-700">
                        <CalendarDays size={18} className="text-green-500" />
                        <span>
                            <span className="font-semibold">Admission:</span> {info.admission}
                        </span>
                    </div>
                </div>
                <div className="pt-2">
                    <NavLink to={'/admissionForm'} >
                        <button
                            onClick={() => handelCollageName(info.name)}
                            className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-xl transition-all duration-300 shadow"
                        >
                            Get Admission
                        </button>
                    </NavLink>

                </div>
            </div>

        </div>
    )
};

export default Admission;
