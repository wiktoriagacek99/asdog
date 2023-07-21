import React from "react";

export const Paragraph = (props) => {
  return (
    <p
      className={`text-xl text-[#3e3e3e] mb-10 md:mb-20 text-center ${props.className}`}
    >
      {props.text}
    </p>
  );
};
