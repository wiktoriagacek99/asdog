import React from "react";

export const FormItem = (props) => {
  return (
    <div className="mb-4">
      <span
        className="text-lg text-[#3e3e3e] font-semibold"
        htmlFor={props.name}
      >
        {" "}
        {props.text}
      </span>
      <input
        className="form-item w-full bg-[#b3a78c] text-[#3e3e3e] mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        placeholder=""
        type={props.type}
        name={props.name}
        required="required"
      />
    </div>
  );
};
