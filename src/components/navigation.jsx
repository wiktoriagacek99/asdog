import React, { useState } from "react";

export const Navigation = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="navigation lg:px-16 bg-white items-center py-2 shadow-sm fixed w-full z-20">
      <div className="container flex flex-wrap items-center px-10">
        <div className="flex-1 flex justify-between items-center">
          <a href="#page-top" className="text-xl">
            <img src="images/logo-main.svg" alt="" className="w-24 h-16" />
          </a>
        </div>

        <label
          htmlFor="menu-toggle"
          className="pointer-cursor md:hidden block pointer-cursor"
        >
          {isNavOpen ? (
            <i className="fa fa-close !text-5xl bg-clip-text text-[#f4722b]"></i>
          ) : (
            <i className="fa fa-navicon !text-5xl bg-clip-text text-[#f4722b]"></i>
          )}
        </label>
        <input
          className="hidden checkbox"
          type="checkbox"
          id="menu-toggle"
          checked={isNavOpen}
          onChange={() => setNavOpen(!isNavOpen)}
        />

        <div
          className={` md:flex md:items-center md:w-auto w-full ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="menu"
        >
          <div>
            <ul className="md:flex md:-m-4 items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              {props.data.elements.map((d, i) => (
                <li key={`${d}-${i}`}>
                  <a
                    className="relative link md:px-4 py-3 px-0 block text-xl capitalize 
                      after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:bg-gradient-to-r after:from-yellow-600 after:to-orange-500 after:h-1 after:content[''] after:transition-width after:duration-200
                      hover:after:w-full"
                    href={`#${d.href}`}
                    onClick={handleClick}
                  >
                    {d.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
