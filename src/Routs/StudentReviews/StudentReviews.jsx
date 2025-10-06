import { Star } from "lucide-react";

// Example dynamic data (can later come from API)
const collegeReviews = [
    {
        id: 1,
        name: "Harvard University",
        reviews: [
            { student: "Alice", rating: 5, comment: "Amazing campus and professors!" },
            { student: "Bob", rating: 4, comment: "Great learning experience, but expensive." }
        ]
    },
    {
        id: 2,
        name: "MIT",
        reviews: [
            { student: "Charlie", rating: 5, comment: "Excellent for tech and research." },
            { student: "Dave", rating: 4, comment: "Very competitive environment." }
        ]
    },
    {
        id: 3,
        name: "Stanford University",
        reviews: [] // No reviews yet
    }
];

export default function StudentReviews() {
    return (
        <section className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-blue-50 px-4 py-12">
            {/* Top Badge */}
            <div className="bg-blue-100 text-blue-500 px-4 py-1 rounded-full flex items-center gap-2 font-medium shadow-sm">
                <Star size={16} className="text-blue-400" />
                <span>Testimonials</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mt-4">
                Student Reviews
            </h2>

            <p className="text-blue-400 mt-2 mb-12">
                Hear from our community of students
            </p>

            {/* Reviews Cards */}
            <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collegeReviews.map((college) => (
                    <div
                        key={college.id}
                        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
                    >
                        {/* College Name */}
                        <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
                            {college.name}
                        </h3>

                        {/* Reviews */}
                        {college.reviews.length > 0 ? (
                            college.reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="bg-blue-50 w-full p-4 mb-3 rounded-lg text-left"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <Star size={16} className="text-yellow-400" />
                                        <span className="font-medium">{review.student}</span>
                                        <span className="text-sm text-gray-500">
                                            ({review.rating}/5)
                                        </span>
                                    </div>
                                    <p className="text-gray-700">{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-blue-500 mt-4 text-center">
                                No reviews yet.{" "}
                                <span className="font-semibold text-blue-700">
                                    Be the first to share your experience!
                                </span>
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
