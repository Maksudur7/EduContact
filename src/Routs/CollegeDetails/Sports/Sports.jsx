import React from 'react';
import { Trophy } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const Sports = () => {
    const college = useOutletContext()
    const eventItems = college.college?.sports?.split(",").map((item) => item.trim());
    return (
        <div className="p-6 max-w-3xl mx-auto space-y-6">
            {/* Sports & Athletics */}
            <section className="p-4 border rounded-xl bg-white shadow-sm">
                <h2 className="font-semibold text-lg mb-2">Sports & Athletics</h2>
                <p className="text-gray-700 mb-4">
                    {college.college?.about}
                </p>
                <div className="flex flex-wrap gap-3">
                    {eventItems.map((sport) => (
                        <div
                            key={sport}
                            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
                        >
                            <Trophy size={18} className="text-blue-500" />
                            <span className="text-gray-800">{sport}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Student Reviews */}
            <section className="p-4 border rounded-xl bg-white shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Student Reviews</h3>
                {
                    !college.college?.rating ? (
                        <p className="text-gray-500"> No reviews available yet.</p>
                    ) :
                        <p className="text-gray-500"> <b>Rating </b>: {college.college?.rating}</p>
                }

            </section>
        </div>
    );
};

export default Sports;