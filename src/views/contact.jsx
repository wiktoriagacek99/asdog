import React from "react";
import { Heading } from "../components/heading";
import { Paragraph } from "../components/paragraph";
import { FormItem } from "../components/formItem";
import { Textarea } from "../components/formTextarea";
import { Button } from "../components/button";

import waveImageTop from "../images/wave-top.svg";
import waveImageBottom from "../images/wave-bottom.svg";

export const Contact = (props) => {
  return (
    <div id="contact" className=" bg-[#f6e4d4] relative object-none">
      <img src={waveImageTop} alt="" />{" "}
      <div className="container px-10 mx-auto flex justify-center items-top h-full py-12">
        <div className="text-left">
          <Heading text={props.data.title} />{" "}
          <Paragraph text={props.data.paragraph} />
          <div className="flex justify-center items-top -mx-10  flex-col md:flex-row">
            <div className="md:w-1/2 px-10 w-full">
              <form className="flex justify-center items-top flex-col">
                <FormItem
                  text={"Full name"}
                  type="text"
                  name="name"
                  htmlFor="name"
                />
                <FormItem
                  text={"E-mail"}
                  type="email"
                  name="email"
                  htmlFor="email"
                />
                <FormItem
                  text={"Phone number"}
                  type="tel"
                  name="tel"
                  htmlFor="tel"
                />
                <Textarea text={"Message"} name="textarea" htmlFor="textarea" />
                <Button href="#about" text={"Submit"} />
              </form>
            </div>

            <div className="md:w-1/2 px-10 w-full">
              <h3 className="text-3xl mb-10 font-bold text-left">Text 5</h3>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-left">
                  <i className="fa fa-map-marker fa-small pr-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500"></i>
                  Lorem Ipsum
                </h4>
              </div>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-left">
                  <i className="fa fa-phone fa-small pr-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500"></i>
                  <a href="tel:123456789">
                    <span className="">{props.data.phone}</span>
                  </a>
                </h4>
              </div>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-left">
                  <i className="fa fa-envelope fa-small pr-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500"></i>
                  <a href="mailto:lorem@gmail.com">
                    <span className="">{props.data.email}</span>
                  </a>
                </h4>
              </div>
              <div className="">
                <h4 className="text-lg mb-2 font-bold text-left">
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook fa-small pr-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500"></i>
                  </a>
                </h4>
              </div>
              <div className="">
                <h4 className="text-lg mb-2 font-bold text-left">
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram fa-small pr-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500"></i>
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={waveImageBottom} alt="" />{" "}
    </div>
  );
};
