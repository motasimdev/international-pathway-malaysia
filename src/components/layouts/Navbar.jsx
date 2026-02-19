import React from "react";
import Container from "../Container";
import { NavLink } from "react-router";
import logo from "/src/assets/logo.jpeg";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";
import PBase from "../PBase";

const Navbar = () => {
  return (
    <nav className="py-2 shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <picture className="max-w-30">
            <img src={logo} alt="logo" />
          </picture>
          {/* Logo */}

          {/* Desktop Menu*/}
          <div className="flex items-center gap-x-10">
            <ul className="hidden lg:flex items-center space-x-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg font-medium transition-all duration-200 text-base ${
                      isActive
                        ? "bg-blue-50 text-primary border-b-2 border-primary shadow-md"
                        : "text-secondary hover:text-primary hover:bg-gray-50"
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
                    `px-3 py-2 rounded-lg font-medium transition-all duration-200 text-base ${
                      isActive
                        ? "bg-blue-50 text-primary border-b-2 border-primary shadow-md"
                        : "text-secondary hover:text-primary hover:bg-gray-50"
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
                    `px-3 py-2 rounded-lg font-medium transition-all duration-200 text-base ${
                      isActive
                        ? "bg-blue-50 text-primary border-b-2 border-primary shadow-md  "
                        : "text-secondary hover:text-primary hover:bg-gray-50"
                    }`
                  }
                >
                  Universities
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/ourservices"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg font-medium transition-all duration-200 text-base ${
                      isActive
                        ? "bg-blue-50 text-primary border-b-2 border-primary shadow-md  "
                        : "text-secondary hover:text-primary hover:bg-gray-50"
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
                    `px-3 py-2 rounded-lg font-medium transition-all duration-200 text-base ${
                      isActive
                        ? "bg-blue-50 text-primary border-b-2 border-primary shadow-md  "
                        : "text-secondary hover:text-primary hover:bg-gray-50"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="group hover:bg-secondary transition duration-300 flex items-center border border-secondary lg:py-2 lg:px-3 rounded-full cursor-pointer">
              <FaRegCircleUser className="text-secondary text-3xl group-hover:text-white transition duration-300" />
              <div className="flex">
                <PBase text={"Login"} className={"text-secondary pl-2 font-medium group-hover:text-white transition duration-300"} />
                <FaSortDown className="text-secondary group-hover:text-white transition duration-300" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
