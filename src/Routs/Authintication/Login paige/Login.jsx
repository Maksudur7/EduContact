import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../AuthProvider file/AuthProvider";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const [form, setForm] = useState({
        email: "",
        password: "",
        remember: false,
    });


    const { googleLogin, resetPassword, facebookLogin } = useContext(AuthContext);
    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", form);
    };

    // Handle Google login
    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            navigate(location?.state?.from?.pathname || "/");
        } catch (err) {
            console.error(err);
            // setError("Google sign-in failed");
        }
    };

    // Handle Facebook login
    const handleFacebookLogin = async() => {
        try {
            const result = await facebookLogin();
            console.log("Facebook User:", result.user);
            alert("Facebook login successful!");
        } catch (error) {
            console.error("Facebook Login Error:", error);
            alert("Failed to login with Facebook!");
        }
    };

    const handleForgotPassword = async () => {
        if (!form.email) {
            alert("Please enter your email first!");
            return;
        }
        try {
            await resetPassword(form.email);
            alert("Password reset email sent!");
        } catch (error) {
            console.error(error);
            alert("Failed to send reset email. Try again!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">

                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h1>
                    <p className="text-gray-500 text-sm">Login to your account</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
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
                            required
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
                            required
                            placeholder="Enter your password"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Remember Me + Forgot Password */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-600">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={form.remember}
                                onChange={handleChange}
                                className="rounded border-gray-300 text-blue-500 focus:ring-blue-400"
                            />
                            Remember Me
                        </label>
                        <a onClick={handleForgotPassword} href="#" className="text-blue-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-5">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-gray-500 text-sm">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                        <FcGoogle className="text-xl mr-2" /> Continue with Google
                    </button>

                    <button
                        onClick={handleFacebookLogin}
                        className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                        <FaFacebook className="text-xl text-blue-600 mr-2" /> Continue with Facebook
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    Don’t have an account?{" "}
                    <NavLink to={"/regstation"} className="text-blue-500 hover:underline">
                        Registration
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;
