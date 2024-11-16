/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Home, Phone, FileText, User } from "lucide-react"; // Icons from Lucide (ShadCN's choice)

const Footer = () => {
  const [active, setActive] = useState(null);

  const handleIconClick = (section) => {
    setActive(active === section ? null : section); // Toggle active state
  };

  return (
    <footer className="fixed bottom-0 w-full bg-white shadow-lg rounded-t-2xl">
      <div className="flex justify-between items-center py-4 px-2">
        {/* Home */}
        <button
          className={`flex items-center justify-center gap-2 w-full max-w-[70px] md:max-w-[100px] text-sm py-2 rounded-full ${
            active === "home" ? "bg-[#FF6B6B] text-white" : "text-black"
          } hover:text-[#FF6B6B] focus:outline-none transition-all`}
          aria-label="Home"
          onClick={() => handleIconClick("home")}
        >
          <Home className={`w-6 h-6 ${active === "home" ? "text-white" : "text-black"}`} />
          <span
            className={`transition-all duration-300 ${
              active === "home"
                ? "opacity-100 translate-x-0 text-white"
                : "opacity-0 translate-x-[-20px]"
            } md:opacity-100 md:translate-x-0`}
          >
            Home
          </span>
        </button>

        {/* Emergency Contacts */}
        <button
          className={`flex items-center justify-center gap-2 w-full max-w-[70px] md:max-w-[100px] text-sm py-2 rounded-full ${
            active === "contacts" ? "bg-[#FF6B6B] text-white" : "text-black"
          } hover:text-[#FF6B6B] focus:outline-none transition-all`}
          aria-label="Emergency Contacts"
          onClick={() => handleIconClick("contacts")}
        >
          <Phone className={`w-6 h-6 ${active === "contacts" ? "text-white" : "text-black"}`} />
          <span
            className={`transition-all duration-300 ${
              active === "contacts"
                ? "opacity-100 translate-x-0 text-white"
                : "opacity-0 translate-x-[-20px]"
            } md:opacity-100 md:translate-x-0`}
          >
            Emergency Contacts
          </span>
        </button>

        {/* Medical Record */}
        <button
          className={`flex items-center justify-center gap-2 w-full max-w-[70px] md:max-w-[100px] text-sm py-2 rounded-full ${
            active === "medical" ? "bg-[#FF6B6B] text-white" : "text-black"
          } hover:text-[#FF6B6B] focus:outline-none transition-all`}
          aria-label="Medical Record"
          onClick={() => handleIconClick("medical")}
        >
          <FileText className={`w-6 h-6 ${active === "medical" ? "text-white" : "text-black"}`} />
          <span
            className={`transition-all duration-300 ${
              active === "medical"
                ? "opacity-100 translate-x-0 text-white"
                : "opacity-0 translate-x-[-20px]"
            } md:opacity-100 md:translate-x-0`}
          >
            Medical Record
          </span>
        </button>

        {/* Profile */}
        <button
          className={`flex items-center justify-center gap-2 w-full max-w-[70px] md:max-w-[100px] text-sm py-2 rounded-full ${
            active === "profile" ? "bg-[#FF6B6B] text-white" : "text-black"
          } hover:text-[#FF6B6B] focus:outline-none transition-all`}
          aria-label="Profile"
          onClick={() => handleIconClick("profile")}
        >
          <User className={`w-6 h-6 ${active === "profile" ? "text-white" : "text-black"}`} />
          <span
            className={`transition-all duration-300 ${
              active === "profile"
                ? "opacity-100 translate-x-0 text-white"
                : "opacity-0 translate-x-[-20px]"
            } md:opacity-100 md:translate-x-0`}
          >
            Profile
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
