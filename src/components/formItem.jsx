import React from "react";

export const FormItem = (props) => {
  return (
    <div className="relative w-full mb-4 border-black border-2 rounded text-left">
      <label
        htmlFor={props.name}
        className="pl-4 pointer-events-none m-0 text-lg top-4 text-sm
        peer-focus:text-black peer-focus:top-4  peer-focus:text-sm"
      >
        {props.text}
      </label>
      <input
        type={props.type}
        name={props.name}
        required="required"
        className="peer w-full px-4 py-2  bg-transparent outline-none text-lg"
      />
    </div>
  );
};
