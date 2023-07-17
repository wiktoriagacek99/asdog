import React from "react";
import { Heading } from "../components/heading";
import { Paragraph } from "../components/paragraph";
import { FormItem } from "../components/formItem";
import { Textarea } from "../components/formTextarea";
import { Button } from "../components/button";

export const Contact = (props) => {
  return (
    <div id="contact" className=" bg-[#f6e7c1] relative object-none">
      <img
        className="object-revert md:object-contain bg-white"
        src={props.data.waveImageTop}
        alt=""
      />{" "}
      <div className="container px-10 mx-auto flex justify-center items-top h-full py-12">
        <div className="text-left">
          <Heading text={props.data.title} />{" "}
          <Paragraph text={props.data.paragraph} />
          <div className="flex justify-center items-top -mx-10  flex-col md:flex-row">
            <form className="mb-10 md:mb-0 md:w-1/2 px-10 w-full flex flex-col">
              <FormItem
                text={"Full name"}
                type="text"
                name="name"
                htmlFor="name"
              />
              <FormItem
                text={"Phone number"}
                type="tel"
                name="tel"
                htmlFor="tel"
              />
              <Textarea text={"Message"} name="textarea" htmlFor="textarea" />

              <div className="mt-4">
                {" "}
                <Button className="w-100" href="#about" text={"Send"} />
              </div>
            </form>

            <div className="md:w-1/2 px-10 w-full text-[#3e3e3e]">
              <h3 className="text-3xl mb-10 font-bold text-left">
                Text jakis tam (fajny)
              </h3>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-left">
                  Znajdziesz nas tutaj:
                </h4>
                <div className="flex items-center mb-2">
                  {" "}
                  <i className="fa fa-map-marker fa-small pr-3 bg-clip-text text-[#f4722b]"></i>
                  <span className="text-lg">{props.data.address}</span>
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-left">
                  Skontaktuj się bezpośrednio:
                </h4>
                <div className="flex items-center mb-2">
                  <i className="fa fa-phone fa-small pr-3 bg-clip-text text-[#f4722b] "></i>
                  <a href="tel:123456789">
                    <span className="text-lg">{props.data.phone}</span>
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <i className="fa fa-envelope fa-small pr-3 bg-clip-text text-[#f4722b]"></i>
                  <a href="mailto:lorem@gmail.com">
                    <span className="text-lg">{props.data.email}</span>
                  </a>
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-left">
                  Nasze social media:
                </h4>
                <span className="text-lg">
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook-f fa-small pr-3 bg-clip-text text-[#f4722b]"></i>
                  </a>
                </span>
                <span className="text-lg">
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram fa-small pr-3 bg-clip-text text-[#f4722b]"></i>
                  </a>
                </span>
              </div>
            </div>
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
