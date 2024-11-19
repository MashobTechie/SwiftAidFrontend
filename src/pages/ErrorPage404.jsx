/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react"; // For Lottie animations
import errorAnimation from "../assets/error2.json"; // Lottie JSON animation file

const ErrorPage404 = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 text-gray-800">
      {/* Animation */}
      <div className="w-80 h-80">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      
       
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-4 text-center max-w-lg px-4">
        The page you are looking for doesn’t exist or has been moved. Please check the URL or return to the homepage.
      </p>

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")} // Navigate to the homepage
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-lg hover:bg-gray-400 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage404;
