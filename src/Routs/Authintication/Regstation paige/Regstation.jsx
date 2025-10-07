import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../AuthProvider file/AuthProvider';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const Regstation = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });
    const { createUser, updatePhoto } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

   
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

      
        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            setError("Please fill out all fields.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!form.agree) {
            setError("You must agree to the Terms & Conditions.");
            return;
        }

        const result = await createUser(form.email, form.password);

        await updatePhoto(form.name, form.photoURL || "");

        
        console.log("Firebase User:", result.user);

       
        navigate("/");
        const roll = 'user'
        const postData = { ...form, roll }
        const res = await fetch('https://collage-searvice-backend.vercel.app/user', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData)
        });
        console.log(res);
        if (res.ok) {
            console.log('ok');
            Swal.fire("Success", "Regestation successfully!", "success");
            toast.success("Regestation successfully!");
        } else {
            toast.error("Failed to Regestation");
            console.log('error');
        }
       
        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            agree: false,
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Create Account ✨</h1>
                    <p className="text-gray-500 text-sm">Register to get started</p>
                </div>

                {/* Error message */}
                {error && (
                    <div className="bg-red-100 text-red-600 text-sm p-2 rounded mb-4">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter password"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-center text-sm text-gray-600">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={form.agree}
                            onChange={handleChange}
                            className="mr-2 rounded border-gray-300 text-blue-500 focus:ring-blue-400"
                        />
                        I agree to the{" "}
                        <a href="#" className="text-blue-500 hover:underline ml-1">
                            Terms & Conditions
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                    >
                        Register
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    Already have an account?{" "}
                    <NavLink to={'/login'} className="text-blue-500 hover:underline">
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Regstation;