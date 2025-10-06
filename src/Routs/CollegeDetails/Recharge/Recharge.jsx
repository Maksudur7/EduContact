import React from 'react';
import { BookOpen } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const Recharge = () => {
    const college = useOutletContext()
    console.log(college);
    return (
        <div className="p-6 max-w-3xl mx-auto space-y-6">
            {/* Research Excellence */}
            <section className="p-4 border rounded-xl bg-white shadow-sm">
                <h2 className="font-semibold text-lg mb-2">Research Excellence</h2>
                <p className="text-gray-700 mb-4">
                    {college.college?.research}
                </p>
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg w-fit">
                    <BookOpen size={18} className="text-blue-500" />
                    <span className="text-gray-800">120 Active Research Projects</span>
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

export default Recharge;