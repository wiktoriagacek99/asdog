import React from "react";
import { FormItem } from "../components/formItem";
import { Textarea } from "../components/formTextarea";

export const Form = (props) => {
  return (
    <div className="mb-10 md:mb-0 px-10 w-full flex flex-col ">
      <form noValidate method="POST" onSubmit={props.action} id="contact-form" className="flex flex-wrap -mx-4">
        <FormItem
          text={"Owner's name"}
          type="text"
          name="owners_name"
          htmlFor="owners_name"
          error={props.errors.owners_name}
        />
        <FormItem
          text={"Pet's name"}
          type="text"
          name="pets_name"
          htmlFor="pets_name"
          error={props.errors.pets_name}
        />
        <FormItem
          text={"Email"}
          type="email"
          name="email"
          htmlFor="email"
          error={props.errors.email}
        />
        <FormItem
          text={"Phone number"}
          type="tel"
          name="phone_number"
          htmlFor="tel"
          error={props.errors.phone_number}
        />
        <Textarea
          text={"Message"}
          name="message"
          htmlFor="textarea"
          error={props.errors.message}
        />

        <div className="mt-4 mx-auto w-full md:w-max">
          {" "}
          <input
            formNoValidate
            className="w-full text-xl text-center px-20 py-3 bg-[#3e3e3e] text-white block rounded-lg cursor-pointer 
    hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/40 transition-all duration-300"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};
