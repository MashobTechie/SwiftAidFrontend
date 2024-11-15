/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-500 text-center px-4">
      <h1 className="text-4xl font-bold text-primary">Welcome to SwiftAid</h1>
      <p className="mt-4 text-lg text-gray-700">
        Your trusted emergency response system
      </p>
      <Button className="mt-6">Click Me</Button>
    </div>
  );
};

export default LandingPage;
