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
            <section className="flex sm:mt-5 flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-blue-50 to-gray-100 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Find Your Perfect{" "}
                    <span className="text-blue-500">College</span>
                </h1>
                <p className="text-gray-700 max-w-2xl mb-8 text-base md:text-lg">
                    Discover top colleges, explore facilities, and book services with
                    <span className="font-medium text-gray-900"> EduConnect</span>. Your educational journey starts here.
                </p>
                <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full max-w-md border border-gray-200">
                    <input
                        type="text"
                        placeholder="Search for a college..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-grow px-5 py-3 text-gray-700 focus:outline-none"
                    />
                    <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full m-1">
                        <Search size={18} />
                    </button>
                </div>
            </section>
            <CardNo1 colleges={data.filter(college =>
                college.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 3)}></CardNo1>
            <div className="flex justify-center mt-6">
                <NavLink to={'/collages'}
                    className="bg-blue-500 flex gap-2 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium"
                >
                    View All
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