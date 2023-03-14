import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";

const Home = () => {
  return (
    <section
      id="home"
      className="h-[100vh] flex  xl:flex-row  lg:flex-col-reverse md:flex-col-reverse max-sm:flex-col-reverse justify-center items-center cursor-pointer max-sm:justify-start max-sm:w-[100vw] "
    >
      <div className="w-1/2 lg:h-1/2 xl:h-2/5 flex flex-col xl:items-start lg:items-center max-sm:w-full max-sm:h-2/5     max-sm:items-center  justify-evenly py-5">
        <h2 className="xl:text-5xl md:text-4xl lg:text-4xl max-sm:text-4xl lg:text-center web-font ">
          Welcome, I'm a software
        </h2>
        <h1 className="xl:text-8xl lg:text-6xl md:text-6xl font-bold mb-3 mt-5 tracking-wide	max-sm:text-6xl">
          {" "}
          DEVELOPER
        </h1>
        <p className="xl:text-2xl lg:text-xl md:text-xl mb-5">
          Directly from Santo Domingo, DR.{" "}
        </p>
        <div className="flex xl:w-3/5 lg:w-4/5 max-sm:w-full max-sm:px-5 justify-between text-lg font-semibold ">
          <a
            href="#portfolio"
            className="px-8 py-3  bg-zinc-800 text-white  hover:bg-zinc-200 hover:text-zinc-800 transition"
          >
            View my works{" "}
          </a>
          <a
            className="px-8 py-3 border text-zinc-800 border-zinc-800 flex items-center  hover:bg-zinc-800 hover:text-white transition"
            href="#contact"
          >
            Contact me <BsArrowDownCircle className="text-2xl ml-2" />
          </a>
        </div>
      </div>
      <div className="grid   place-items-center xl:place-items-end pl-[6vw]  lg:pl-0 lg:mt-28 w-1/2 relative  max-sm:w-full  max-sm:place-items-start  ">
        <img
          src="./layel.jpg"
          className="lg:h-[50vh] max-sm:h-[45vh] h-full rounded-full max-sm:ml-2 drop-shadow-2xl border-[15px] border-zinc-800 shadow-xl xl:mr-5 xl:mb-[10vh] "
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
