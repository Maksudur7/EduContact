import React from 'react';
import { Search } from "lucide-react";
import CardNo1 from '../Hooks/CardNo1';
import GallerySection from './Galary/GallerySection';
import ResearchPapers from './ResearchPapers/ResearchPapers';
import StudentReviews from './StudentReviews/StudentReviews';
const Home = () => {
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
                        className="flex-grow px-5 py-3 text-gray-700 focus:outline-none"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full m-1">
                        <Search size={18} />
                    </button>
                </div>
            </section>
            <CardNo1></CardNo1>
            <GallerySection></GallerySection>
            <ResearchPapers></ResearchPapers>
            <StudentReviews></StudentReviews>
           
        </div>
    );
};

export default Home;