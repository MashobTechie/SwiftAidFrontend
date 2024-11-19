/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react"; // Lottie animation
import serverErrorAnimation from "../assets/server-error.json"; // Import your Lottie animation file

const ServerError500 = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* Animation Section */}
      <div className="w-64 h-64">
        <Lottie animationData={serverErrorAnimation} loop={true} />
      </div>
      
      
      {/* Error Message */}
      {/* <h1 className="text-[8rem] font-bold text-red-600">500</h1> */}
      <h2 className="text-2xl font-semibold text-center">
        Oops! Internal Server Error
      </h2>
      <p className="text-gray-600 mt-4 text-center max-w-md">
        Something went wrong on our end. Please try again later or contact
        support if the issue persists.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="px-5 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")} // Navigate to the home page
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 transition"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ServerError500;
