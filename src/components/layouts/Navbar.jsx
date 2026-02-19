import React from "react";
import Container from "../Container";
import { NavLink } from "react-router";
import logo from "/src/assets/logo.jpeg"
const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <picture className="max-w-30">
            <img src={logo} alt="logo" />
          </picture>
          {/* Logo */}

          {/* Desktop Menu*/}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-[#F21A1F] border-b-2 border-[#F21A1F] shadow-md"
                      : "text-gray-700 hover:text-[#F21A1F] hover:bg-gray-50"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-[#F21A1F] border-b-2 border-[#F21A1F] shadow-md"
                      : "text-gray-700 hover:text-[#F21A1F] hover:bg-gray-50"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/universities"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-[#F21A1F] border-b-2 border-[#F21A1F] shadow-md  "
                      : "text-gray-700 hover:text-[#F21A1F] hover:bg-gray-50"
                  }`
                }
              >
                Canada
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/ourservices"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-[#F21A1F] border-b-2 border-[#F21A1F] shadow-md  "
                      : "text-gray-700 hover:text-[#F21A1F] hover:bg-gray-50"
                  }`
                }
              >
                Our Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-[#F21A1F] border-b-2 border-[#F21A1F] shadow-md  "
                      : "text-gray-700 hover:text-[#F21A1F] hover:bg-gray-50"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* CTA Button + Mobile Menu - Right */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/apply"
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md"
            >
              Apply Now
            </NavLink>

            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
