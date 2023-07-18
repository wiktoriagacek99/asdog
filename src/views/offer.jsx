import React from "react";
import { Heading } from "../components/heading";
import { Paragraph } from "../components/paragraph";

export const Offer = (props) => {
  return (
    <div id="offer" className="min-h-screen bg-white">
      <div className="container px-10 mx-auto flex h-full py-24">
        <div className="text-center">
          <Heading text={props.data.title} />{" "}
          <Paragraph text={props.data.paragraph} />
          <div className="flex flex-wrap -mx-10">
            {props.data.offer.map((d, i) => (
              <div
                key={i}
                className="w-full flex flex-col md:flex-row md:odd:flex-row-reverse mx-10 md:mx-0 mb-10"
              >
                {""}

                <div className="w-full md:w-1/2 text-left md:px-10">
                  <h3 className="text-2xl mt-5 mb-2 font-bold b-5">
                    {d.title}
                  </h3>
                  <p className="mb-10 md:mb-24"> {d.text}</p>
                </div>
                <div className="relative w-full md:w-1/2  md:mx-10 md:h-[400px] ">
                  <div
                    className={`absolute rounded-lg ${
                      i % 2 !== 0 ? "-right-5" : "-left-5"
                    } -top-5 bg-gradient-to-r from-yellow-600 to-orange-500 w-14 h-14 animate-wiggle`}
                  ></div>
                  <img
                    className="relative z-10 rounded-lg"
                    src={d.image}
                    alt=""
                  ></img>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
