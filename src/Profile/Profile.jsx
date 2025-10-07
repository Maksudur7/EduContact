import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Routs/Authintication/AuthProvider file/AuthProvider";
import { NavLink } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [editMode, setEditMode] = useState(false);
    const [profile, setProfile] = useState({
        name: user?.displayName || "",
        email: user?.email || "",
        university: "",
        address: "",
    });

    // Load from localStorage (if exists)
    useEffect(() => {
        const storedProfile = localStorage.getItem("profileData");
        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
        }
    }, []);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    // Save updates
    const handleSave = () => {
        localStorage.setItem("profileData", JSON.stringify(profile)); 
        setEditMode(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8 border-t-4 border-blue-500">
                {/* Header */}
                <div className="text-center mb-6">
                    <img
                        src={user?.photoURL || "https://i.ibb.co/6RJ5hq6/avatar.png"}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-400 shadow-sm"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mt-3">
                        {profile.name || "No Name"}
                    </h2>
                    <p className="text-gray-500">{profile.email}</p>
                </div>

                {/* Profile Info */}
                <div className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        {editMode ? (
                            <input
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        ) : (
                            <p className="text-gray-800">{profile.name || "Not Set"}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        {editMode ? (
                            <input
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        ) : (
                            <p className="text-gray-800">{profile.email || "Not Set"}</p>
                        )}
                    </div>

                    {/* University */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            University
                        </label>
                        {editMode ? (
                            <input
                                name="university"
                                value={profile.university}
                                onChange={handleChange}
                                className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        ) : (
                            <p className="text-gray-800">{profile.university || "Not Set"}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Address</label>
                        {editMode ? (
                            <input
                                name="address"
                                value={profile.address}
                                onChange={handleChange}
                                className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        ) : (
                            <p className="text-gray-800">{profile.address || "Not Set"}</p>
                        )}
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex justify-center gap-4">
                    {editMode ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow transition-all"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditMode(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-lg shadow transition-all"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <div className="flex justify-between w-full">
                            <NavLink to={'/'}
                                onClick={() => setEditMode(true)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow transition-all"
                            >
                                Back
                            </NavLink>
                            <button
                                onClick={() => setEditMode(true)}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg shadow transition-all"
                            >
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
