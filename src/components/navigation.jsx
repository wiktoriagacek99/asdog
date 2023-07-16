import React from "react";

export const Navigation = (props) => {
  return (
    <nav className="navigation lg:px-16 px-8 bg-white flex flex-wrap items-center py-4 shadow-md fixed w-full z-10">
      <div className="flex-1 flex justify-between items-center">
        <a href="#" className="text-xl">
          LOGO
        </a>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden checkbox" type="checkbox" id="menu-toggle" />

      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <div>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <a className="link md:p-4 py-3 px-0 block" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="link md:p-4 py-3 px-0 block" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="link md:p-4 py-3 px-0 block" href="#offer">
                Offer
              </a>
            </li>
            <li>
              <a
                className="link md:p-4 py-3 px-0 block md:mb-0 mb-2"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
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
