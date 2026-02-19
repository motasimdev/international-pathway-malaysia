import React from "react";

const PBase = ({ text, className }) => {
  return (
    <>
      <p className={`text-xs md:text-sm lg:text-base ${className}`}>{text}</p>
    </>
  );
};

export default PBase;
