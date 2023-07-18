import React from "react";

export const Button = (props) => {
  return (
    <a
      href={props.href}
      className={`
      text-xl text-center px-20 py-3 bg-[#3e3e3e] text-white mx-auto block rounded-lg ${props.className} 
      hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/40 transition-all duration-300
      `}
    >
      {props.text}
    </a>
  );
};
