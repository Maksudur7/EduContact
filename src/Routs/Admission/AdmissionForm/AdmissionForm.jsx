import React, { useEffect } from 'react';
import { Send } from "lucide-react";
const AdmissionForm = () => {
    const CollageName = JSON.parse(localStorage.getItem("CollageName"));
    const handleSubmit = (e) => {
        e.preventDefault();
        const college = CollageName
        const name = e.target.name.value;
        const subject = e.target.subject.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const dob = e.target.dob.value;
        const profile = e.target.profile.value;
        const admissionData = { college, name, subject, email, phone, address, dob, profile }
        console.log(admissionData);
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 px-4 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    College <span className="text-blue-600">Admission</span>
                </h1>
                <p className="text-gray-600 mt-2">
                    Fill out the form below to apply to your chosen college
                </p>
            </div>

            {/* Form Container */}
            <form
                className="bg-white shadow-md border border-gray-200 rounded-2xl p-8 w-full max-w-2xl"
                onSubmit={handleSubmit} // Attach submit handler here
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Application Form
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                    Please provide accurate information for your application
                </p>

                {/* Select College */}
                <div className="mb-4">
                    <h3 className='text-base font-semibold text-gray-800'>{CollageName}</h3>
                </div>

                {/* Name + Subject */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Candidate Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Maksudur Sikder"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Preferred Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Computer Science"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Email + Phone */}
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="maksudursikder25@gmail.com"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="+1234567890"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Address */}
                <div className="mt-4">
                    <label className="block text-gray-700 font-medium mb-2">Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="123 Main St, City, Country"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                {/* DOB + Profile URL */}
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name="dob"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Profile Image URL
                        </label>
                        <input
                            type="url"
                            name="profile"
                            placeholder="https://example.com/image.jpg"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all shadow-md"
                    >
                        <Send size={18} />
                        Submit Application
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AdmissionForm;