/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Home, Phone, FileText, User } from "lucide-react"; // Icons from Lucide

const Footer = () => {
  const [active, setActive] = useState("home");

  const handleIconClick = (section) => {
    setActive(section); // Set the active button
  };

  return (
    <footer className="fixed bottom-0 w-full bg-white text-black shadow-lg rounded-t-2xl">
      <div className="flex justify-around items-center py-2">
        {/* Home */}
        <button
          className={`flex flex-col items-center justify-center gap-1 w-16 h-16 transition-all rounded-full ${
            active === "home"
              ? "bg-red-500 text-white scale-110 shadow-lg"
              : "text-black"
          }`}
          onClick={() => handleIconClick("home")}
          aria-label="Home"
        >
          <Home className={`w-6 h-6 ${active !== "home" && "text-black"}`} />
          {active === "home" && <span className="text-xs font-medium">Home</span>}
        </button>

        {/* Contacts */}
        <button
          className={`flex flex-col items-center justify-center gap-1 w-16 h-16 transition-all rounded-full ${
            active === "contacts"
              ? "bg-red-500 text-white scale-110 shadow-lg"
              : "text-black"
          }`}
          onClick={() => handleIconClick("contacts")}
          aria-label="Contacts"
        >
          <Phone
            className={`w-6 h-6 ${active !== "contacts" && "text-black"}`}
          />
          {active === "contacts" && (
            <span className="text-xs font-medium">Contacts</span>
          )}
        </button>

        {/* Medical Record */}
        <button
          className={`flex flex-col items-center justify-center gap-1 w-16 h-16 transition-all rounded-full ${
            active === "medical"
              ? "bg-red-500 text-white scale-110 shadow-lg"
              : "text-black"
          }`}
          onClick={() => handleIconClick("medical")}
          aria-label="Medical Record"
        >
          <FileText
            className={`w-6 h-6 ${active !== "medical" && "text-black"}`}
          />
          {active === "medical" && (
            <span className="text-xs font-medium">Medical</span>
          )}
        </button>

        {/* Profile */}
        <button
          className={`flex flex-col items-center justify-center gap-1 w-16 h-16 transition-all rounded-full ${
            active === "profile"
              ? "bg-red-500 text-white scale-110 shadow-lg"
              : "text-black"
          }`}
          onClick={() => handleIconClick("profile")}
          aria-label="Profile"
        >
          <User className={`w-6 h-6 ${active !== "profile" && "text-black"}`} />
          {active === "profile" && (
            <span className="text-xs font-medium">Profile</span>
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
