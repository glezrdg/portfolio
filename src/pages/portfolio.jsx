import React from "react";

import { TbBrandVite } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandFirebase } from "react-icons/tb";
import { RiAngularjsFill } from "react-icons/ri";
import { SiCsharp } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="xl:h-[100vh] md:h-[140vh] max-sm:h-[190vh] flex flex-col items-center justify-evenly relative bg-zinc-100"
    >
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] bg-zinc-100 md:hidden lg:hidden max-sm:hidden xl:flex"></div>

      <div className="text-center ">
        <span className="bg-yellow-400  p-1">Portfolio</span>
        <h1 className="text-5xl max-sm:text-4xl font-semibold mt-5">
          Some of my most recent projects
        </h1>
      </div>

      <div className=" w-full max-sm:grid-cols-1  max-sm:w-4/5 xl:h-1/2 lg:h-1/2  md:h-[80vh] grid xl:grid-cols-3 xl:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3  gap-10  place-items-center   px-5 ">
        <a
          href="https://bayamomedicalcenter.com"
          target="_blank"
          className="figure w-full p-3 bg-zinc-800 shadow-black shadow-md rounded-lg"
        >
          <img
            src="./img/bayamo-medical-center.png"
            alt=""
            className="image w-full shadow-black  shadow-sm "
          />
          <div class="overlay rounded-lg">
            <div class="text">
              <div className=" flex items-center justify-evenly w-2/3">
                <TbBrandVite className="text-4xl" />
                <span className="text-4xl">+</span>
                <FaReact className="text-4xl" />
              </div>
              <h1 className="text-white text-xl font-semibold">
                Bayamo Medical Center
              </h1>
              <span>Front-end app</span>
            </div>
          </div>
        </a>
        <a
          href="https://tesla-clone-glezrdg.vercel.app/"
          target="_blank"
          className="figure w-full  p-3 bg-zinc-800 shadow-black shadow-md rounded-lg "
        >
          <img
            src="./img/tesla-clone.png"
            alt=""
            className="w-full shadow-black shadow-sm"
          />
          <div class="overlay rounded-lg">
            <div class="text">
              <FaReact className="text-4xl" />
              <h1 className="text-white text-xl font-semibold">Tesla Clone</h1>
              <span>Front-end app</span>
            </div>
          </div>
        </a>
        <a
          href="https://whatsapp-clone-fcd3f.web.app/"
          target="_blank"
          className="figure w-full  p-3 bg-zinc-800 shadow-black shadow-md rounded-lg"
        >
          <img
            src="./img/whatsapp-clone.png"
            alt=""
            className="w-full shadow-black shadow-sm"
          />
          <div class="overlay rounded-lg">
            <div class="text">
              <div className=" flex items-center justify-evenly w-2/3">
                <TbBrandFirebase className="text-4xl" />
                <span className="text-4xl">+</span>
                <FaReact className="text-4xl" />
              </div>

              <h1 className="text-white text-xl font-semibold">
                Whatsapp Clone
              </h1>
              <span>Fullstack app</span>
            </div>
          </div>
        </a>
        <a
          href="https://bill-fast-lite-demo-anf4.vercel.app/"
          target="_blank"
          className="figure w-full p-3 bg-zinc-800 shadow-black shadow-md rounded-lg "
        >
          <img
            src="./img/bill-fast-lite-demo.png"
            alt=""
            className="w-full shadow-black shadow-sm"
          />
          <div class="overlay rounded-lg">
            <div class="text">
              <div className=" flex items-center justify-evenly w-full">
                <SiCsharp className="text-3xl" />
                <span className="text-4xl">+</span>
                <RiAngularjsFill className="text-4xl" />
              </div>

              <h1 className="text-white text-xl font-semibold">
                Bill Fast Lite
              </h1>
              <span>Fullstack app</span>
            </div>
          </div>
        </a>
        <a
          href="https://sibaikole.com/"
          target="_blank"
          className="figure w-full  p-3 bg-zinc-800 shadow-black shadow-md rounded-lg"
        >
          <img
            src="./img/sibaikole-gif.gif"
            alt=""
            className="w-full shadow-black shadow-sm"
          />
          <div class="overlay rounded-lg">
            <div class="text">
              <div className=" flex items-center justify-evenly w-full">
                <AiFillHtml5 className="text-4xl" />
                <span className="text-4xl">+</span>
                <DiCss3 className="text-4xl" />
              </div>
              <h1 className="text-white text-xl font-semibold">Sibaikole</h1>
              <span>Front-end app</span>
            </div>
          </div>
        </a>
        <a
          href="https://stack-mern-fb27b.web.app/"
          target="_blank"
          className="figure w-full p-3 bg-zinc-800 shadow-black shadow-md rounded-lg "
        >
          <img
            src="./img/stack-mern.png"
            alt=""
            className="w-full shadow-black shadow-sm"
          />
          <div class="overlay rounded-lg">
            <div class="text">
              <div className=" flex items-center justify-evenly w-full">
                <SiMongodb className="text-4xl" />
                <span className="text-4xl">+</span>
                <SiExpress className="text-4xl" />
                <span className="text-4xl">+</span>
                <FaReact className="text-4xl" />
              </div>
              <h1 className="text-white text-xl font-semibold">
                MERN Stack CRUD
              </h1>
              <span>Fullstack app</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
