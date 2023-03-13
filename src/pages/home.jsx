import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";

const Home = () => {
  return (
    <section
      id="home"
      className="h-[100vh]   flex justify-center items-center cursor-pointer"
    >
      <div className="w-1/2 h-2/5  flex flex-col justify-evenly py-5">
        <h2 className="text-5xl  web-font ">Welcome, I'm a software</h2>
        <h1 className="text-8xl font-bold mb-3 mt-5 tracking-wide	">
          {" "}
          DEVELOPER
        </h1>
        <p className="text-2xl mb-5">right from Santo Domingo, DR. </p>
        <div className="flex w-3/5 justify-between text-lg font-semibold ">
          <a
            href="#portfolio"
            className="px-8 py-3 bg-zinc-800 text-white  hover:bg-zinc-200 hover:text-zinc-800 transition"
          >
            View my works{" "}
          </a>
          <a
            className="px-8 py-3 border text-zinc-800 border-zinc-800 flex items-center  hover:bg-zinc-800 hover:text-white transition"
            href=""
          >
            Contact me <BsArrowDownCircle className="text-2xl ml-2" />
          </a>
        </div>
      </div>
      <div className="grid  place-items-center pl-[6vw]  w-1/2 relative">
        <figure className="-m-1 -p-1 rounded-full border-[15px] border-zinc-800 shadow-xl ">
          <img
            src="./layel.jpg"
            className=" h-full rounded-full drop-shadow-2xl  "
            alt=""
          />
        </figure>
      </div>
    </section>
  );
};

export default Home;
