import React from "react";

export const Textarea = (props) => {
  return (
    <div className="mb-4">
      <span
        className="text-lg  text-[#3e3e3e] font-semibold"
        htmlFor={props.name}
      >
        {" "}
        {props.text}
      </span>
      <textarea
        className="w-full h-32 bg-[#b3a78c] text-[#3e3e3e] mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type={props.type}
        name={props.name}
        required="required"
      ></textarea>
    </div>
  );
};
