import React from 'react';
import {  useOutletContext } from "react-router-dom";
const OverView = () => {
    const college = useOutletContext()

    return (
        <>
            <section className='border p-5 rounded-2xl bg-blue-50'>
                <h2 className="font-semibold text-gray-700 mb-2">About</h2>
                <p className="text-gray-600">{college.college?.about}</p>
            </section>

            <section className='border p-5 rounded-2xl bg-blue-50'>
                <h2 className="font-semibold text-gray-700 mb-2">
                    Admission Process
                </h2>
                <ul className="list-decimal list-inside text-gray-600 space-y-1">
                    {college.college?.admissionProcess?.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="font-semibold text-gray-700 mb-2">
                    Campus Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {college.college?.gallery?.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`campus-${i}`}
                            className="rounded-xl object-cover h-32 w-full"
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default OverView;