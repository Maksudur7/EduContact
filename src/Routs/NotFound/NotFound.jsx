import React, { useContext } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { AuthContext } from "../Authintication/AuthProvider file/AuthProvider";

const NotFound = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    console.log(user);
    if (!user?.email) {
        navigate('/login')
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center text-center px-6">
            {/* Animated 404 Text */}
            <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg"
            >
                404
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 text-2xl font-semibold text-gray-800"
            >
                Oops! Page not found 😕
            </motion.h2>

            {/* Message */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-3 text-gray-600 max-w-md"
            >
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </motion.p>

            {/* Home Button */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8"
            >
                <NavLink
                    to="/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition-all duration-300"
                >
                    <Home size={18} />
                    Go Back Home
                </NavLink>
            </motion.div>

            {/* Floating Shapes (Decoration) */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-10 h-10 bg-blue-300 rounded-full blur-xl opacity-70"
            />
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-20 right-16 w-14 h-14 bg-purple-300 rounded-full blur-2xl opacity-60"
            />
        </div>
    );
};

export default NotFound;
