import React, { useContext, useEffect, useState } from 'react';
import { Star, CalendarDays, Mail, Phone, MapPin, BookOpen, PlusCircle } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../Authintication/AuthProvider file/AuthProvider';

const MyCollage = () => {
    const [colleges, setColleges] = useState([])
      const { user } = useContext(AuthContext);
    
    useEffect(() => {
        fetch("http://localhost:5000/admission")
            .then(res => res.json())
            .then(result => {
              const res =   result.filter(e => e.email === user.email);
              setColleges(res)
            })
            .catch(error => console.log(error))

    }, [user.email])

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 px-4 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    My <span className="text-blue-600">College</span>
                </h1>
                <p className="text-gray-600 mt-2">
                    View your applications and share your experience
                </p>
            </div>
            {
                colleges?.length == 0 ? (
                    <div className="w-full flex flex-col items-center  rounded-2xl justify-center bg-white">
                        <div className="w-full  border border-gray-200 rounded-2xl shadow-sm p-10 text-center">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-left">
                                My Applications
                            </h2>

                            <div className="border border-dashed border-gray-300 rounded-2xl py-20 px-6">
                                <div className="flex flex-col items-center justify-center space-y-4">
                                    <GraduationCap className="w-10 h-10 text-gray-500" />

                                    <h3 className="text-lg font-semibold text-gray-800">
                                        No Applications Yet
                                    </h3>

                                    <p className="text-sm text-gray-500 max-w-lg">
                                        You haven’t submitted any college applications. Start by exploring
                                        available colleges and applying to your preferred institutions.
                                    </p>

                                    <NavLink to={'/admission'} className="mt-6 flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>Browse Colleges</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                    <div className="w-full  space-y-6">
                        {colleges.map((college, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 relative"
                            >
                                {/* Header Row */}
                                <div className="flex flex-wrap justify-between items-start">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                            <BookOpen className="text-blue-600" size={20} />
                                            {college.name}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            Applied on {college.applied}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                                            Panding
                                        </span>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1">
                                            <PlusCircle size={16} />
                                            Add Review
                                        </button>
                                    </div>
                                </div>

                                {/* Info Sections */}
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    {/* Application Details */}
                                    <div>
                                        <h3 className="text-gray-800 font-medium mb-3">
                                            Application Details
                                        </h3>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            <li className="flex items-center gap-2">
                                                <BookOpen size={16} className="text-blue-500" />
                                                <span>Subject: {college.subject}</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Mail size={16} className="text-blue-500" />
                                                <span>Email: {college.email}</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Phone size={16} className="text-blue-500" />
                                                <span>Phone: {college.phone}</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <MapPin size={16} className="text-blue-500" />
                                                <span>Address: {college.address}</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CalendarDays size={16} className="text-blue-500" />
                                                <span>Date of Birth: {college.dob}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* College Info */}
                                    <div>
                                        <h3 className="text-gray-800 font-medium mb-3">College Info</h3>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            <li className="flex items-center gap-2">
                                                <Star size={16} className="text-yellow-500" />
                                                <span>Rating: {college.rating}</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CalendarDays size={16} className="text-blue-500" />
                                                <span>Admission Dates: {college.admission}</span>
                                            </li>
                                        </ul>

                                        <NavLink to={'/collageDetails'} >
                                            <button className="w-full mt-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-medium py-2 rounded-lg transition-all">
                                                View College Details
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            }

        </section>
    );
};

export default MyCollage;