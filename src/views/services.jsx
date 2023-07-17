import React from "react";
import { Heading } from "../components/heading";
import { Paragraph } from "../components/paragraph";

export const Services = (props) => {
  return (
    <div id="services" className=" bg-[#f6e7c1] relative">
      <img
        className="object-revert md:object-contain bg-white"
        src={props.data.waveImageTop}
        alt=""
      />{" "}
      <div className="container px-10 mx-auto flex justify-center items-top h-full py-12 flex-col md:flex-row">
        <div className="text-center">
          <Heading text={props.data.title} />{" "}
          <Paragraph text={props.data.paragraph} />
          <div className="flex items-stretch justify-center flex-wrap mx-auto">
            {props.data.services.map((d, i) => (
              <div
                key={i}
                className="w-full md:w-1/3 flex justify-start flex-col h-auto mb-10 md:first:mb-10"
              >
                {""}
                <i
                  className={`fa ${d.icon} fa-big bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500`}
                ></i>
                <h3 className="text-2xl mt-5 mb-2 font-bold b-5">{d.title}</h3>
                <p className="w-3/4 mx-auto"> {d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        className="object-revert md:object-contain bg-white"
        src={props.data.waveImageBottom}
        alt=""
      />{" "}
    </div>
  );
};
