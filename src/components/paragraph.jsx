import React from "react";

export const Paragraph = (props) => {
  return (
    <p className={`text-xl mb-20 text-center ${props.className}`}>
      {props.text}
    </p>
  );
};
