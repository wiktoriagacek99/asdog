import React from "react";
import { Heading } from "../components/heading";
import { Paragraph } from "../components/paragraph";
import { FormItem } from "../components/formItem";
import { Textarea } from "../components/formTextarea";

const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch(".netlify/functions/mail", {
    method: form.method,
    body: JSON.stringify(Object.fromEntries(formData)),
  });
};

export const Contact = (props) => {
  return (
    <div id="contact" className=" bg-[#f6e7c1] relative object-none">
      <img
        className="absolute top-0 h-24 w-full object-cover bg-white"
        src={props.data.waveImageTop}
        alt=""
      />{" "}
      <div className="container px-10 mx-auto flex justify-center items-top h-full py-24">
        <div className="text-left">
          <Heading text={props.data.title} />{" "}
          <Paragraph text={props.data.paragraph} />
          <div className="flex justify-center items-top -mx-10  flex-col md:flex-row">
            <form
              method="POST"
              onSubmit={handleSubmit}
              id="contact-form"
              className=" mb-10 md:mb-0 md:w-1/2 px-10 w-full flex flex-col"
            >
              <FormItem
                text={"Owner's name"}
                type="text"
                name="owners_name"
                htmlFor="owners_name"
              />
              <FormItem
                text={"Pet's name"}
                type="text"
                name="pets_name"
                htmlFor="pets_name"
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
                <input
                  className="w-full text-xl text-center px-20 py-3 bg-[#3e3e3e] text-white block rounded-lg cursor-pointer 
                  hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/40 transition-all duration-300"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>

            <div className="md:w-1/2 px-10 w-full text-[#3e3e3e]">
              <h3 className="text-3xl mb-10 font-bold text-left">
                Lorem ipsum
              </h3>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-left">
                  Znajdziesz nas tutaj:
                </h4>
                <div className="flex items-center mb-2">
                  {" "}
                  <i className="fa fa-map-marker !text-2xl pr-3 bg-clip-text text-[#f4722b]"></i>
                  <span className="text-lg">{props.data.address}</span>
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-left">
                  Skontaktuj się bezpośrednio:
                </h4>
                <div className="flex items-center mb-2">
                  <i className="fa fa-phone !text-2xl pr-3 bg-clip-text text-[#f4722b] "></i>
                  <a href="tel:123456789">
                    <span className="text-lg">{props.data.phone}</span>
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <i className="fa fa-envelope !text-2xl pr-3 bg-clip-text text-[#f4722b]"></i>
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
                    <i className="fa fa-facebook-f !text-2xl pr-3 bg-clip-text text-[#f4722b]"></i>
                  </a>
                </span>
                <span className="text-lg">
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram !text-2xl pr-3 bg-clip-text text-[#f4722b]"></i>
                  </a>
                </span>
              </div>
            </div>
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
