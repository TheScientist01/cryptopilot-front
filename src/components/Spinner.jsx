import React from "react";

const Spinner = ({ white, black, size="big" }) => {
  return (
    <div
      className={`border-t-transparent mx-auto border-solid animate-spin rounded-full dark:border-t-transparent border-4 ${
        white ? "border-white" : black ? "border-black" : "border-[#7422dd]"
      } ${size === "big" ? "h-10 w-10" : "h-6 w-6"} `}
    />
  );
};

export default Spinner;