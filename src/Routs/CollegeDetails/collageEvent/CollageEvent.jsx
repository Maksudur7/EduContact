import React from 'react';
import { Calendar } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const CollageEvent = () => {
    const college = useOutletContext()
    console.log(college);
    const eventItems = college.college?.events?.split(",").map((item) => item.trim());

    return (
        <div className="p-6 max-w-3xl mx-auto space-y-6">
            {/* Campus Events */}
            <section className="p-4 border rounded-xl bg-white shadow-sm">
                <h2 className="font-semibold text-lg mb-2">Campus Events</h2>
                <p className="text-gray-700 mb-4">
                    {college.college?.about}
                </p>

                <div className="flex flex-wrap gap-3">
                    {eventItems?.map((event) => (
                        <div
                            key={event}
                            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
                        >
                            <Calendar size={18} className="text-blue-500" />
                            <span className="text-gray-800">{event}</span>
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

export default CollageEvent;