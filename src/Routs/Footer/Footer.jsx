import React from 'react';
import { GraduationCap, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#f4f9fd] text-gray-700 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div>
                    <div className="flex items-center space-x-2 mb-3">
                        <div className="bg-blue-500 text-white p-2 rounded-full">
                            <GraduationCap size={22} />
                        </div>
                        <h2 className="text-xl font-bold text-blue-600">EduConnect</h2>
                    </div>
                    <p className="text-sm text-gray-600">
                        Connecting students with their dream colleges through seamless booking
                        and admission services.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600">Colleges</a></li>
                        <li><a href="#" className="hover:text-blue-600">Admission</a></li>
                        <li><a href="#" className="hover:text-blue-600">My College</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-600">College Search</a></li>
                        <li><a href="#" className="hover:text-blue-600">Facility Booking</a></li>
                        <li><a href="#" className="hover:text-blue-600">Application Management</a></li>
                        <li><a href="#" className="hover:text-blue-600">Student Reviews</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-3">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: <a href="mailto:info@educonnect.com" className="text-blue-600 hover:underline">info@educonnect.com</a></li>
                        <li>Phone: <a href="tel:+15551234567" className="text-blue-600 hover:underline">+1 (555) 123-4567</a></li>
                        <li>Support: <a href="mailto:support@educonnect.com" className="text-blue-600 hover:underline">support@educonnect.com</a></li>
                    </ul>
                </div>
            </div>

            <hr className="border-gray-300" />

            {/* Bottom Section */}
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p>© 2025 EduConnect. All rights reserved.</p>
                <p className="flex items-center gap-1 mt-2 md:mt-0">
                    Made with <Heart size={14} className="text-red-500" /> for students worldwide
                </p>
            </div>
        </footer>
    );
};

export default Footer;