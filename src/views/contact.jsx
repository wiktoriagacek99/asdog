import React, { useState } from "react";
import { Heading } from "../components/heading";
import { Paragraph } from "../components/paragraph";
import { Form } from "../components/form";
import { FormMessages } from "../components/formMessages";
import { Loader } from "../components//loader";

export const Contact = (props) => {
  const [formMode, setFormMode] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const errorsObj = {
    owners_name: "",
    pets_name: "",
    email: "",
    phone_number: "",
    message: "",
  };
  const [errors, setErrors] = useState(errorsObj);

  const handleValidation = (errorsList) => {
    const newErrors = { ...errorsObj };
    Object.entries(errorsList.errorBag).forEach(([field, rule]) => {
      newErrors[field] = props.data[rule];
    });
    setErrors(newErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch(".netlify/functions/mail", {
      method: form.method,
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    setIsLoading(false);

    switch (response.status) {
      case 200:
        setFormMode(1);
        break;
      case 422:
        const errorsList = await response.json();
        handleValidation(errorsList);
        break;
      default:
        setFormMode(2);
        break;
    }
  };

  let formComponent = null;
  switch (formMode) {
    case 0:
      formComponent = <Form action={handleSubmit} errors={errors} />;
      break;

    case 1:
      formComponent = <FormMessages message={props.data.successMessage} />;
      break;

    case 2:
    default:
      formComponent = <FormMessages message={props.data.errorMessage} />;
      break;
  }

  return (
    <div className=" bg-[#f6e7c1] relative object-none">
      <img
        className="absolute top-0 h-24 w-full object-cover bg-white"
        src={props.data.waveImageTop}
        alt=""
      />{" "}
      <div className="container px-10 mx-auto flex justify-center items-top h-full py-12">
        <div id="contact" className="text-left py-24">
          <Heading text={props.data.title} />{" "}
          <Paragraph
            text={props.data.paragraph}
            className="w-full md:w-4/5 mx-auto"
          />
          <div className="relative flex justify-center items-top -mx-10  flex-col md:flex-row">
            <div
              className={` w-full md:w-1/2 absolute left-0 h-full z-10 ${
                isLoading ? "" : "hidden"
              }`}
            >
              <Loader className="bg-[#f6e7c1] h-full" />
            </div>
            <div className={` md:w-1/2 ${isLoading ? "invisible" : ""}`}>
              {formComponent}
            </div>
            <div className="md:w-1/2 px-10 w-full text-[#3e3e3e]  text-center md:text-left">
              <h3 className="text-3xl mb-10 font-bold text-center md:text-left">
                Lorem ipsum
              </h3>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-center md:text-left">
                  Lorem ipsum:
                </h4>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  {" "}
                  <i className="fa fa-map-marker w-[40px] !text-2xl pr-3 bg-clip-text text-[#f4722b]"></i>
                  <span className="text-lg">{props.data.address}</span>
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-center md:text-left">
                  Lorem ipsum:
                </h4>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <i className="fa fa-phone w-[40px] !text-2xl pr-3 bg-clip-text text-[#f4722b] "></i>
                  <a href="tel:123456789">
                    <span className="text-lg">{props.data.phone}</span>
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <i className="fa fa-envelope w-[40px] !text-2xl pr-3 bg-clip-text text-[#f4722b]"></i>
                  <a href="mailto:lorem@gmail.com">
                    <span className="text-lg">{props.data.email}</span>
                  </a>
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-lg mb-2 font-bold text-center md:text-left">
                  Lorem ipsum:
                </h4>
                <span className="text-lg">
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook-f !text-4xl pr-4 bg-clip-text text-[#f4722b]"></i>
                  </a>
                </span>
                <span className="text-lg">
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram !text-4xl pr-3 bg-clip-text text-[#f4722b]"></i>
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
