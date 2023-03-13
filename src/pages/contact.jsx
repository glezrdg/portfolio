import React from "react";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="h-[100vh] cursor-pointer relative">
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] bg-yellow-300 "></div>
      <div className="h-[85vh] flex justify-center items-center ">
        <div className="w-1/2 h-[60vh]  flex flex-col ">
          <div className="flex flex-col h-[15vh] ">
            <h1 className="text-5xl font-semibold">
              Write me, and I write back
            </h1>
            <span className="text-zinc-800  font-semibold mt-2">
              Usually that's how it works... right?
            </span>
          </div>
          <p className="w-4/5 text-2xl  ">
            Would love to hear what my skills are able to do for you and your
            upcoming projects, my path it's the growth path and I love watch the
            human kind grow together as brothers.{" "}
          </p>

          <div className="h-[15vh]  flex  items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Call or Message: </h3>
              <span className="font-semibold ml-2">+1 (829) 464 9960</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-1/2 h-[60vh]">
          <div className="h-[15vh] ">
            <h1 className="mb-2 text-5xl font-semibold">
              Tell me about your new project
            </h1>
            <span className="  text-zinc-800 font-semibold ">
              Or your proposal...{" "}
            </span>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col ">
              <label htmlFor="" className="text-lg">
                Your name or company:
              </label>
              <input type="text" className="inputs " />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="" className="text-lg">
                Your Email Address
              </label>
              <input type="text" className="inputs" />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="" className="text-lg">
                How may I assist you?
              </label>
              <textarea name="" id="" rows="3" className="inputs" />
            </div>
            <div className="w-full flex justify-end">
              <button className="font-bold px-8 py-3 mt-5 border text-zinc-800 border-zinc-800 flex items-center   hover:bg-zinc-800 hover:text-white transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative w-full bg-zinc-800 h-[15vh] flex items-center justify-center">
        <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] bg-zinc-800 "></div>
        <h1 className="text-white text-xl text-center">
          Copyright © 2023 Germán. All Rights Reserved.
        </h1>
      </footer>
    </section>
  );
};

export default Contact;
