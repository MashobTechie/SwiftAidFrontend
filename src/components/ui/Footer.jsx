/* eslint-disable no-unused-vars */
import React from "react";
import { Home, Phone, FileText, User } from "lucide-react"; // Icons from Lucide (ShadCN's choice)

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-red-500 text-white shadow-lg">
      <div className="flex justify-around items-center py-4">
        {/* Home */}
        <div className="flex flex-col items-center text-sm">
          <Home className="w-6 h-6" />
          <span>Home</span>
        </div>

        {/* Emergency Contacts */}
        <div className="flex flex-col items-center text-sm">
          <Phone className="w-6 h-6" />
          <span>Emergency Contacts</span>
        </div>

        {/* Medical Record */}
        <div className="flex flex-col items-center text-sm">
          <FileText className="w-6 h-6" />
          <span>Medical Record</span>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center text-sm">
          <User className="w-6 h-6" />
          <span>Profile</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
