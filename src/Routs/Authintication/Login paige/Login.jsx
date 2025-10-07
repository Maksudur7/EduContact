import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../AuthProvider file/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const { googleLogin, resetPassword, facebookLogin } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login feature under development!");
  };

  const handleGoogleLogin = async () => {
    try {
      const googleRes = await googleLogin();
      toast.success("Google login successful!");
      navigate(location?.state?.from?.pathname || "/");
    } catch (err) {
      toast.error("Google sign-in failed!");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await facebookLogin();
      Swal.fire({
        title: "Success!",
        text: "Facebook login successful!",
        icon: "success",
        confirmButtonColor: "#3b82f6",
      });
      console.log("Facebook User:", result.user);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to login with Facebook!",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  const handleForgotPassword = async () => {
    if (!form.email) {
      Swal.fire({
        title: "Wait!",
        text: "Please enter your email first!",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }
    try {
      await resetPassword(form.email);
      Swal.fire({
        title: "Email Sent!",
        text: "Password reset email sent successfully.",
        icon: "success",
        confirmButtonColor: "#10b981",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send reset email. Try again!",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
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
