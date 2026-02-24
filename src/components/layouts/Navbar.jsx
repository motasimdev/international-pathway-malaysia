import React, { useEffect, useState } from "react";
import Container from "../Container";
import { NavLink } from "react-router";
import logo from "/src/assets/logo.jpeg";
import {
  FaRegCircleUser,
  FaUserGraduate,
  FaUserTie,
  FaXmark,
} from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";
import PBase from "../PBase";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [login, setLogin] = useState(false);
  // const [login, setlogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const toggelActive = () => {
  //   setlogin(!login);
  // };

  //scroll behave
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //scroll behave

  return (
    <nav
      className={`lg:py-3 shadow-sm fixed w-full top-0 z-1000 ${isScrolled ? "bg-white" : "bg-transparent"}`}
    >
      <Container>
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo */}
          <NavLink to={"/"} className="max-w-35">
            <picture>
              <img src={logo} alt="logo" />
            </picture>
          </NavLink>
          {/* Logo */}

          {/* Desktop Menu*/}
          <div className="flex items-center gap-x-10">
            <ul className="flex items-center space-x-2">
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
                  to="/about-us"
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
                  to="/university"
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
                  to="/our-services"
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
                  to="/blogs"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg font-medium transition-all duration-200 text-base ${
                      isActive
                        ? "bg-blue-50 text-primary border-b-2 border-primary shadow-md  "
                        : "text-secondary hover:text-primary hover:bg-gray-50"
                    }`
                  }
                >
                  Blog
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

            {/* ======== desktop login btn ====== */}
            <button className="relative" onClick={() => setLogin(!login)}>
              <div
                className={`${
                  login
                    ? "border border-secondary bg-secondary"
                    : "bg-transparent"
                } 
              group hover:bg-secondary transition duration-300 flex items-center border border-secondary lg:py-2 lg:px-3 rounded-full cursor-pointer
              `}
                onClick={() => setLogin(!login)}
              >
                <FaRegCircleUser
                  className={`${login ? "text-white" : "text-secondary"}
                text-secondary text-3xl group-hover:text-white transition duration-300`}
                />
                <div className="flex">
                  <PBase
                    text={"Login"}
                    className={`${login ? "text-white" : "text-secondary"} text-secondary pl-2 font-medium group-hover:text-white transition duration-300`}
                  />
                  <FaSortDown
                    className={`${login ? "text-white" : "text-secondary"}
                  text-secondary group-hover:text-white transition duration-300
                  `}
                  />
                </div>
              </div>
              {login && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLogin(false)}
                  ></div>
                  <div className="absolute top-12 right-0 py-2 bg-secondary/50 rounded-sm border z-50">
                    <div className="flex items-center gap-x-4 hover:bg-gray-100/30 text-center py-1 pl-4 pr-16 cursor-pointer">
                      <FaUserGraduate className="text-white" />
                      <PBase text={"Student"} className={" text-white"} />
                    </div>
                    <div className="flex items-center gap-x-4 hover:bg-gray-100/30 text-center py-1 pl-4 pr-16 cursor-pointer">
                      <FaUserTie className="text-white" />
                      <PBase text={"Agent"} className={" text-white"} />
                    </div>
                  </div>
                </>
              )}
            </button>
            {/* ======== desktop login btn ====== */}
          </div>
        </div>
      </Container>
      {/* =============Mobile Menu============= */}
      <div className={`lg:hidden py-2 px-3 md:px-5 bg-[#d5d5ff]`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to={"/"} className="max-w-25">
            <picture>
              <img src={logo} alt="logo" />
            </picture>
          </NavLink>
          {/* Logo */}

          <div className="flex items-center gap-x-3 ">
            {/* Mobile Login Button */}
            <div className="relative">
              <div
                className={`${
                  login
                    ? "border border-secondary bg-secondary shadow-lg"
                    : "bg-transparent"
                } 
                  group hover:bg-secondary transition-all duration-300 flex items-center border border-secondary py-0.5 pl-1 pr-2 rounded-full cursor-pointer w-full justify-center`}
                onClick={() => setLogin(!login)}
              >
                <FaRegCircleUser
                  className={`${
                    login ? "text-white" : "text-secondary"
                  } text-[21px] mr-1 group-hover:text-white transition duration-300`}
                />
                <div className="flex items-baseline">
                  <PBase
                    text="Login"
                    className={`${
                      login ? "text-white" : "text-secondary"
                    } font-medium group-hover:text-white transition duration-300`}
                  />
                  <FaSortDown
                    className={`${login ? "text-white" : "text-secondary"}
                  text-secondary text-sm group-hover:text-white transition duration-300
                  `}
                  />
                </div>
              </div>

              {/* Mobile Dropdown */}
              {login && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLogin(false)}
                  ></div>
                  <div className="absolute top-6.5 right-0 bg-secondary/50 backdrop-blur-sm rounded-lg border shadow-xl py-2">
                    <div className="flex items-center gap-x-4 hover:bg-gray-100/30 text-white py-1 px-5 cursor-pointer transition-all duration-200">
                      <FaUserGraduate className="text-sm md:text-md" />
                      <PBase
                        text="Student"
                        className="text-white font-medium"
                      />
                    </div>
                    <div className="flex items-center gap-x-4 hover:bg-gray-100/30 text-white py-1 px-5 cursor-pointer transition-all duration-200">
                      <FaUserTie className="text-sm md:text-md" />
                      <PBase text="Agent" className="text-white font-medium" />
                    </div>
                  </div>
                  <div className="absolute top-6.5 right-0 bg-secondary/50 backdrop-blur-sm rounded-lg border shadow-xl py-2">
                    <div className="flex items-center gap-x-4 hover:bg-gray-100/30 text-white py-1 px-5 cursor-pointer transition-all duration-200">
                      <FaUserGraduate className="text-sm md:text-md" />
                      <PBase
                        text="Student"
                        className="text-white font-medium"
                      />
                    </div>
                    <div className="flex items-center gap-x-4 hover:bg-gray-100/30 text-white py-1 px-5 cursor-pointer transition-all duration-200">
                      <FaUserTie className="text-sm md:text-md" />
                      <PBase text="Agent" className="text-white font-medium" />
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* Mobile menu button */}
            <button
              className="lg:hidden "
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaXmark className="text-4xl text-secondary" />
              ) : (
                <HiBars3 className="text-4xl text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="pb-4 border-t border-gray-200">
              <ul className="flex flex-col pt-2 text-center">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-primary border-b-2 border-primary"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-primary border-b-2 border-primary"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/university"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-primary border-b-2 border-primary"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Universities
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/our-services"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-primary border-b-2 border-primary"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-primary border-b-2 border-primary"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-primary border-b-2 border-primary"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
