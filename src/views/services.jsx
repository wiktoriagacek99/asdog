import React from "react";
import { Heading } from "../components/heading";
import { Paragraph } from "../components/paragraph";

export const Services = (props) => {
  return (
    <div className=" bg-[#f6e7c1] relative">
      <img
        className="absolute top-0 h-24 w-full object-cover bg-white"
        src={props.data.waveImageTop}
        alt=""
      />{" "}
      <div className="container px-10 mx-auto flex justify-center items-top h-full py-12">
        <div id="services" className="py-24 text-center">
          <Heading text={props.data.title} />{" "}
          <Paragraph
            text={props.data.paragraph}
            className="w-full md:w-4/5 mx-auto"
          />
          <div className="flex items-stretch justify-center flex-wrap mx-auto">
            {props.data.services.map((d, i) => (
              <div
                key={i}
                className="w-full md:w-1/3 flex justify-start flex-col h-auto mb-10 md:first:mb-20"
              >
                {""}
                <i
                  className={`fa ${d.icon} !text-7xl bg-clip-text text-[#f4722b]`}
                ></i>
                <h3 className="text-2xl mt-5 mb-2 font-bold b-5">{d.title}</h3>
                <p className="w-3/4 mx-auto"> {d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 h-24 w-full object-cover bg-white"
        src={props.data.waveImageBottom}
        alt=""
      />{" "}
    </div>
  );
};
