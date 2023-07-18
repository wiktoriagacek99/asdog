import { Button } from "../components/button";

export const Header = (props) => {
  return (
    <header id="header" className="relative h-screen pt-20  bg-cover">
      <img
        className="absolute top-0 h-full object-cover"
        src={props.data.image}
        alt=""
      />{" "}
      <div className="container px-10 mx-auto flex justify-center items-center h-full z-10 relative">
        <div className="w-full md:w-2/3 text-center">
          <h1 className="text-7xl uppercase text-stone-100 font-bold mb-5 animate-moveInLeft">
            {props.data.title}
          </h1>
          <p className="text-2xl  text-stone-100 mb-10 animate-moveInRight">
            {props.data.subtitle}
          </p>
          <Button className="w-max" href="#about" text={"Learn more"} />
        </div>
      </div>
    </header>
  );
};
