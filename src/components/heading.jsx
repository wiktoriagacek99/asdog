import React from "react";

export const Heading = (props) => {
  return (
    <h2
      className={`
      relative text-4xl text-[#3e3e3e] uppercase font-bold w-fit mx-auto mb-6 
      after:absolute after:content-[''] after:bg-gradient-to-r after:from-yellow-600 after:to-orange-500 after:h-1 after:w-20 
      after:-bottom-1.5 after:left-1/2 after:-translate-x-2/4 ${props.className}
      `}
    >
      {props.text}
    </h2>
  );
};
