import React from "react";

export const Navigation = (props) => {
  return (
    <nav className="navigation lg:px-16 bg-white  items-center py-2 shadow-md fixed w-full z-20">
      <div className="container flex flex-wrap items-center px-10">
        <div className="flex-1 flex justify-between items-center">
          <a href="#page-top" className="text-xl">
            <img src="images/logo.svg" alt="" className="w-24" />
          </a>
        </div>

        <label
          htmlFor="menu-toggle"
          className="pointer-cursor md:hidden block pointer-cursor"
        >
          <i className="fa fa-navicon fa-md bg-clip-text text-[#f4722b]"></i>
        </label>
        <input className="hidden checkbox" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <div>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <a
                  className="link md:pl-8 py-3 px-0 block text-xl"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="link md:pl-8 py-3 px-0 block text-xl"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="link md:pl-8 py-3 px-0 block text-xl"
                  href="#offer"
                >
                  Offer
                </a>
              </li>
              <li>
                <a
                  className="link md:pl-8 py-3 px-0 block md:mb-0 mb-2 text-xl"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const links = document.querySelectorAll(".link");
const checkboxNav = document.querySelector(".checkbox");

for (let link of links) {
  link.addEventListener("click", function () {
    checkboxNav.checked = false;
  });
}
