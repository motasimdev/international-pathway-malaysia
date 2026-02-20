import React from "react";
import { NavLink } from "react-router";
import logo from "/src/assets/logo.jpeg";
import Container from "../Container";
import PBase from "../PBase";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import Psm from "../Psm";

const Footer = () => {
  return (
    <>
      <footer className="pt-10 lg:pt-17">
        <Container>
          <div className="">
            {/* Logo */}
            <NavLink to={"/"}>
              <picture>
                <img
                  src={logo}
                  alt="logo"
                  className="w-30 lg:w-35 justify-self-center"
                />
              </picture>
            </NavLink>
            {/* Logo */}

            {/* menu list  */}
            <ul className="flex flex-col md:flex-row items-center space-y-1 md:space-x-8 justify-center my-4 lg:my-10">
              <li>
                <NavLink to="/">
                  <PBase
                    text={"Home"}
                    className={
                      "font-medium text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <PBase
                    text={"About Us"}
                    className={
                      "font-medium text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <PBase
                    text={"Universities"}
                    className={
                      "font-medium text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <PBase
                    text={"Our Services"}
                    className={
                      "font-medium text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <PBase
                    text={"Blog"}
                    className={
                      "font-medium text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <PBase
                    text={"Contact"}
                    className={
                      "font-medium text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
            </ul>
            {/* menu list  */}

            {/* =========icon list========== */}
            <div className="flex items-center justify-center gap-x-3 pt-2 pb-8 lg:pb-15">
              <NavLink to={"https://igc.com.bd/"} target="_blank">
                <div className="group hover:bg-gray-300 transition duration-300 py-3 px-3 bg-secondary rounded-full ">
                  <FaFacebookF className="text-white group-hover:text-primary transition duration-300" />
                </div>
              </NavLink>
              <NavLink to={"/"} target="_blank">
                <div className="group hover:bg-gray-300 transition duration-300 py-3 px-3 bg-secondary rounded-full ">
                  <IoLogoYoutube className="text-white group-hover:text-primary transition duration-300" />
                </div>
              </NavLink>
              <NavLink to={"/"} target="_blank">
                <div className="group hover:bg-gray-300 transition duration-300 py-3 px-3 bg-secondary rounded-full ">
                  <FaInstagram className="text-white group-hover:text-primary transition duration-300" />
                </div>
              </NavLink>
              <NavLink to={"/"} target="_blank">
                <div className="group hover:bg-gray-300 transition duration-300 py-3 px-3 bg-secondary rounded-full ">
                  <FaLinkedin className="text-white group-hover:text-primary transition duration-300" />
                </div>
              </NavLink>
            </div>
            {/* =========icon list========== */}
          </div>
        </Container>
        <div className="py-3 bg-secondary w-full text-center">
          <Psm text={""} />
          <Psm text={" ©2026 All Rights Reserved By International Pathway Malaysia"} className={'text-white'}/>
        </div>
      </footer>
    </>
  );
};

export default Footer;
