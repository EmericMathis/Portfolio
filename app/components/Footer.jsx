import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="w-0 h-0 
                border-l-[20px] border-l-transparent
                border-b-[35px] border-b-purple-500
                border-r-[20px] border-r-transparent">
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
