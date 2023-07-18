import React from "react";

export const Loader = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-[#f4722b]"
        role="status"
      ></div>
    </div>
  );
};
