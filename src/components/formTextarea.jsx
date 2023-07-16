import React from "react";

export const Textarea = (props) => {
  return (
    <div className="relative w-full mb-4 border-black border-2 rounded text-left">
      <label
        htmlFor={props.name}
        className="pl-4 pointer-events-none m-0 text-lg top-4 text-xs 
      peer-focus:text-black peer-focus:top-4  peer-focus:text-xs"
      >
        {props.text}
      </label>
      <textarea
        type={props.type}
        name={props.name}
        required="required"
        className="peer w-full p-4  bg-transparent outline-none text-lg
      focus:border-black "
      />
    </div>
  );
};
