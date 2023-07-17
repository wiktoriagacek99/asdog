import React from "react";

export const Button = (props) => {
  return (
    <a
      href={props.href}
      className={`text-xl text-center px-20 py-3 bg-[#3e3e3e] text-white mx-auto block rounded-lg ${props.className}`}
    >
      {props.text}
    </a>
  );
};
