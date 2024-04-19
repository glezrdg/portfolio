import React from "react";
import { BiDownload } from "react-icons/bi";

const Summary = () => {
  return (
    <section
      id="summary"
      className="h-[130vh] md:h-[150vh] flex flex-col justify-evenly items-center xl:p-0 lg:px-10 md:px-10 max-sm:h-[250vh]"
    >
      <div className="text-center w-full">
        <span className="bg-yellow-400  p-1">Resume</span>
        <h1 className="text-5xl max-sm:text-4xl font-semibold mt-5">
          A Summary of my Resume
        </h1>
      </div>
      <div className="flex justify-between w-full max-sm:flex-col ">
        <div className="flex flex-col w-1/2 mr-5 h-full max-sm:w-full max-sm:mb-5">
          <h2 className="text-3xl font-semibold max-sm:text-center">
            My Education
          </h2>
          <div className="border-l border-yellow-400 pl-5 mt-5 w-full ">
            <div className="h-1/3">
              <h3 className="text-2xl font-semibold mb-3">IT Technician</h3>
              <span className="  text-xl">
                APEC Fernando Arturo de Meriño / 2015 - 2019
              </span>
              <p className="text-stone-600 text-lg mt-3 mb-5">
                Santo Domingo, DR.
              </p>
              <hr />
            </div>
            <div className="mt-4 h-1/3">
              <h3 className="text-2xl font-semibold mb-3">
                Software Development
              </h3>
              <span className="  text-xl">ITLA 2021</span>
              <p className="text-stone-600 text-lg mt-3 mb-5">
                Santo Domingo, DR
              </p>
              <hr />
            </div>
            <div className="mt-4 h-1/3">
              <h3 className="text-2xl font-semibold mb-3">
                Front-end Developer
              </h3>
              <span className="  text-xl">Platzi / 2019 - Present</span>
              <p className="text-stone-600 text-lg mt-3 mb-5">Latin America</p>
              <hr />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 max-sm:m-0 w-1/2 h-full max-sm:w-full max-sm:mt-10">
          <h2 className="text-3xl font-semibold max-sm:text-center">
            My Recent Experience
          </h2>
          <div className="border-l border-yellow-400 pl-5 mt-5">
            <div className=" h-1/3">
              <h3 className="text-2xl font-semibold mb-3">
                Ministerio de Economía, Planificación y Desarrollo
              </h3>
              <span className="  text-xl"> 2023 - Present</span>
              <p className="text-stone-600 text-lg mt-3 mb-5">Hybrid</p>
              <hr />
            </div>
            <div className="mt-4 h-1/3">
              <h3 className="text-2xl font-semibold mb-3">
                Front-end Developer, IT Technician
              </h3>
              <span className="  text-xl">
                Tuki Tuki Investments / 2021 - 2022
              </span>
              <p className="text-stone-600 text-lg mt-3 mb-5">
                Santo Domingo, DR
              </p>
              <hr />
            </div>
            <div className="mt-4 h-1/3">
              <h3 className="text-2xl font-semibold mb-3">
                Front-end Developer
              </h3>
              <span className="  text-xl">Transneg Intership / 2022</span>
              <p className="text-stone-600 text-lg mt-3 mb-5">
                Santo Domingo, DR
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full font-semibold flex flex-col items-center ">
        <h2 className="text-3xl font-semibold flex  self-start max-sm:self-center ">
          Main Skills
        </h2>
        <div className="w-full flex max-sm:flex-col">
          <div className="p-4 bg-green-20 w-1/2 max-sm:w-full">
            <div className="flex flex-col mt-4">
              <div className="flex justify-between ">
                <span>React JS</span>
                <span>87.33%</span>
              </div>
              <div className="flex w-full mt-2">
                <div className="h-5 w-[90%] rounded-l-md shadow-md    bg-sky-700"></div>
                <div className="h-5 w-[10%] rounded-r-md shadow-md bg-stone-200"></div>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between">
                <span>Angular</span>
                <span>83.66%</span>
              </div>
              <div className="flex w-full mt-2">
                <div className="h-5 w-[83%] rounded-l-full shadow-md  bg-red-500"></div>
                <div className="h-5 w-[17%] rounded-r-full shadow-md bg-stone-200"></div>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between">
                <span>Node JS, C# Entity Framework</span>
                <span>57%</span>
              </div>
              <div className="flex w-full mt-2">
                <div className="h-5 w-[57%] rounded-l-full shadow-lg  bg-lime-600"></div>
                <div className="h-5 w-[43%] rounded-r-full shadow-lg bg-stone-200"></div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-20 w-1/2 max-sm:w-full">
            <div className="flex flex-col mt-4">
              <div className="flex justify-between ">
                <span>CSS, Sass, TailwindCSS</span>
                <span>87%</span>
              </div>
              <div className="flex w-full mt-2">
                <div className="h-5 w-[87%] rounded-l-md shadow-md bg-sky-500"></div>
                <div className="h-5 w-[13%] rounded-r-md shadow-md bg-stone-200"></div>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between">
                <span>Mongo, SQL </span>
                <span>71%</span>
              </div>
              <div className="flex w-full mt-2">
                <div className="h-5 w-[71%] rounded-l-full shadow-md  bg-green-600"></div>
                <div className="h-5 w-[29%] rounded-r-full shadow-md bg-stone-200"></div>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between">
                <span>Git, Github, Azure DevOps</span>
                <span>90%</span>
              </div>
              <div className="flex w-full mt-2">
                <div className="h-5 w-[90%] rounded-l-full shadow-lg  bg-rose-700"></div>
                <div className="h-5 w-[10%] rounded-r-full shadow-lg bg-stone-200"></div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="px-8 py-3 mt-5 border text-zinc-800 border-zinc-800 flex items-center  hover:bg-zinc-800 hover:text-white transition"
          href="./CV-German-Espanol.pdf"
          download="German CV"
        >
          Download CV <BiDownload className="text-2xl ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Summary;
