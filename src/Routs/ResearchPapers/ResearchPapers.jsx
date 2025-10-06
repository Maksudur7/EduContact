import React from "react";
import { FileText, ArrowRight } from "lucide-react";

const ResearchPapers = () => {
    const papers = [
        {
            title: "Machine Learning Applications in Healthcare Diagnostics",
            authors: "Sarah Johnson, Michael Chen, Dr. Emily Rodriguez",
            description:
                "Exploring how machine learning algorithms can improve early disease detection and diagnostic accuracy in healthcare settings.",
            university: "Stanford University",
            universityColor: "bg-green-100 text-green-700",
            date: "2024-03-15",
        },
        {
            title: "Sustainable Energy Storage Solutions Using Nanotechnology",
            authors: "David Park, Prof. Lisa Anderson",
            description:
                "Research on novel nanomaterials for enhanced battery performance and sustainable energy storage systems.",
            university: "MIT",
            universityColor: "bg-blue-100 text-blue-700",
            date: "2024-02-20",
        },
        {
            title: "Social Media's Impact on Political Discourse and Democracy",
            authors: "Amanda Williams, Dr. Robert Thompson",
            description:
                "Comprehensive analysis of how social media platforms influence political opinions and democratic processes.",
            university: "Harvard University",
            universityColor: "bg-green-100 text-green-700",
            date: "2024-01-10",
        },
    ];

    return (
        <section className="bg-[#f4f9fd] py-16 px-6">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                    <FileText size={16} className="mr-2" />
                    Academic Excellence
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-3">
                    Research <span className="text-blue-500">Papers</span>
                </h2>
                <p className="text-gray-600 text-lg">
                    Explore groundbreaking research from our students
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {papers.map((paper, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                    >
                        {/* Title */}
                        <div className="flex items-start mb-3">
                            <div className="bg-teal-500 text-white p-2 rounded-lg mr-3">
                                <FileText size={22} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                                    {paper.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{paper.authors}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-700 mb-4">
                            {paper.description}
                        </p>

                        {/* Footer Info */}
                        <div className="flex items-center justify-between mb-4">
                            <span
                                className={`px-3 py-1 text-xs rounded-full font-medium ${paper.universityColor}`}
                            >
                                {paper.university}
                            </span>
                            <span className="text-sm text-gray-500">{paper.date}</span>
                        </div>

                        {/* Button */}
                        <button className="w-full flex items-center justify-center gap-2 border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all py-2 rounded-full font-medium">
                            Read Paper <ArrowRight size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResearchPapers;
