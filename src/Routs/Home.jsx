import React, { useEffect, useState } from 'react';
import { Search } from "lucide-react";
import CardNo1 from '../Hooks/CardNo1';
import GallerySection from './Galary/GallerySection';
import ResearchPapers from './ResearchPapers/ResearchPapers';
import StudentReviews from './StudentReviews/StudentReviews';
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";


const Home = () => {
    const [data, setData] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        fetch("https://collage-searvice-backend.vercel.app/collages")
            .then(res => res.json())
            .then(result => setData(result))
            .catch(error => console.log(error))

    }, [])

    return (
        <div>
            <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
                <div className="absolute inset-0 bg-[url('https://cdn.scholaro.com/content/best-universities-in-the-world/universities_image_1.png')] bg-cover bg-center opacity-10"></div>

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        Discover Your <span className="text-blue-600">Dream College</span>
                    </h1>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-base md:text-lg">
                        Explore, compare and apply to top-ranked colleges with{" "}
                        <span className="font-semibold text-gray-900">EduConnect</span>.
                        Let’s begin your success story today.
                    </p>

                    <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-md border border-gray-200 mx-auto">
                        <input
                            type="text"
                            placeholder="Search for a college..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow px-5 py-3 text-gray-700 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full m-1 transition"
                        >
                            <Search size={18} />
                        </button>
                    </div>
                </div>
            </section>
            <div className="h-[2px] w-20 bg-blue-500 mx-auto my-10 rounded-full"></div>
           
            <CardNo1 colleges={data.filter(college =>
                college.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 3)}></CardNo1>
            <div className="flex justify-center my-8">
                <NavLink
                    to={'/collages'}
                    className="bg-blue-500 flex items-center gap-2 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transition"
                >
                    View All Colleges
                    <ArrowRight size={18} />
                </NavLink>
            </div>

            <GallerySection></GallerySection>
            <ResearchPapers></ResearchPapers>
            <StudentReviews></StudentReviews>

        </div>
    );
};

export default Home;