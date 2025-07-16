import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <div>
      <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="font-mono text-xl font-bold text-white">
              <img src="/images/logo.png" alt="logo-img" className="h-13" />
            </a>
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen(!menuOpen[(prev) => !prev])}
            >
              &#9776;
            </div>
            <div className="hidden md:flex item-center space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#Project"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Project
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
