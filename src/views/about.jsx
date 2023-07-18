import React from "react";
import { Heading } from "../components/heading";
import { Paragraph } from "../components/paragraph";
import "font-awesome/css/font-awesome.min.css";

export const About = (props) => {
  return (
    <div id="about" className=" bg-white">
      <div className="container flex-col md:flex-row px-10 mx-auto flex justify-center items-center py-24">
        <div className="w-full md:w-1/2  pr-2">
          <Heading text={props.data.title} className="md:ml-0" />{" "}
          <Paragraph
            text={props.data.paragraph}
            className="text-center md:text-left"
          />
          <h3 className="text-2xl mb-3 font-bold b-5">
            {props.data.whyUsText}
          </h3>
          <div>
            {props.data.whyUsReasons.map((d) => {
              return (
                <div key={d} className="mb-3">
                  <i className="fa fa-paw !text-2xl pr-3 bg-clip-text text-[#f4722b]"></i>
                  <span className="text-xl">{d}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          {" "}
          <img
            className="relative z-10 rounded-lg"
            src={props.data.image}
            alt="About us"
          />{" "}
          <div className="absolute rounded-lg -right-5 -top-5 bg-gradient-to-r from-yellow-600 to-orange-500 w-14 h-14 animate-wiggle"></div>
        </div>
      </div>
    </div>
  );
};
