import React from "react";

export const FormItem = (props) => {
  return (
    <div className="mb-4 w-full md:w-1/2 md:px-4">
      <label
        className="text-lg text-[#3e3e3e] font-semibold flex justify-between items-center"
        htmlFor={props.name}
      >
        {" "}
        {props.text}
        {props.error && (
          <span className="relative cursor-pointer group">
            <i className="fa fa-info-circle text-red-600 !text-xl cursor-help"></i>
            <span
              className={`absolute right-7 top-1 text-sm text-red-600 opacity-0 group-hover:opacity-100 font-bold bg-[rgba(255, 255, 255, 0.3)]  rounded-se-none w-max`}
            >
              {props.error}
            </span>
          </span>
        )}
      </label>
      <input
        className="form-item w-full bg-[#c2b599] text-white font-bold text-lg mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        placeholder=""
        type={props.type}
        name={props.name}
      />
    </div>
  );
};
