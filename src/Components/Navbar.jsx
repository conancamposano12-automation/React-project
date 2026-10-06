import React, { useState } from "react";
import { BiSearch, BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-700 shadow-lg z-50">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Logo + Desktop Menu + Mobile Button */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center"
          >
            {/* CONAN Logo - Magnifying Glass replaces O */}
            <div className="flex items-center text-2xl font-extrabold tracking-wide text-white">
              <span className="hover:text-amber-200">C</span>

              <BiSearch className="mx-1 text-3xl text-sky-800 hover:text-green-500" />

              <span className="hover:text-green-500">NAN</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/"
              className="px-4 py-2 text-lg text-white bg-sky-800 rounded
              hover:bg-sky-400 hover:text-blue-800 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="px-4 py-2 text-lg text-white bg-sky-800 rounded
              hover:bg-sky-400 hover:text-blue-800 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/products"
              className="px-4 py-2 text-lg text-white bg-sky-800 rounded
              hover:bg-sky-400 hover:text-blue-800 transition duration-300"
            >
              Product
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 text-lg text-white bg-sky-800 rounded
              hover:bg-sky-400 hover:text-blue-800 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-4xl"
          >
            {isOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-5">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 text-white
                bg-sky-300 rounded hover:bg-green-400
                hover:text-blue-800 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 text-white
                bg-sky-300 rounded hover:bg-green-400
                hover:text-blue-800 transition duration-300"
              >
                About
              </Link>

              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 text-white
                bg-sky-300 rounded hover:bg-green-400
                hover:text-blue-800 transition duration-300"
              >
                Product
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 text-white
                bg-sky-300 rounded hover:bg-green-400
                hover:text-blue-800 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
