import React from "react";

export const Button = (props) => {
  return (
    <a
      href={props.href}
      className="text-xl text-center px-20 py-3 bg-[#241e20] text-white"
    >
      {props.text}
    </a>
  );
};
