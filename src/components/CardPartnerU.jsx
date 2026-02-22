import React from "react";
import { Link } from "react-router";

const CardPartnerU = ({ image, alt, heading, description }) => {
  return (
    <>
        <div className="block w-full p-6 border border-gray-300 rounded-xl shadow-xs">
          <div className="h-45">
            <img className="h-full w-full rounded-xl" src={image} alt={alt} />
          </div>
          <h5 className="mt-6 mb-2 text-2xl text-secondary font-semibold tracking-tight">
            {heading}
          </h5>
          <div className="hidden md:block py-3.5"></div>
          <p className="mb-6 line-clamp-3">{description}</p>
          <Link
            to={"/"}
            className="inline-flex items-center bg-gray-100 border border-gray-300 hover:bg-gray-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 transition duration-200"
          >
            Read more
            <svg
              className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </div>
    </>
  );
};

export default CardPartnerU;
