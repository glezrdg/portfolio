import React from "react";

import { BsPaletteFill } from "react-icons/bs";
import { HiDesktopComputer } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { TbSpeakerphone } from "react-icons/tb";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative xl:h-[100vh] md:h-[130vh] w-full flex flex-col items-center  bg-zinc-100 max-sm:h-[200vh]  "
    >
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] bg-zinc-100  lg:hidden max-sm:hidden md:hidden xl:flex"></div>

      <div className="text-center h-1/3 flex flex-col items-center justify-center max-lg:h-[25vh] ">
        <span className="bg-yellow-400  p-1">What I Do?</span>
        <h1 className="text-5xl max-sm:text-4xl font-semibold mt-5">
          How I can help your next project
        </h1>
      </div>
      <div className="h-2/3 max-sm:h-4/5 w-full grid gap-9  xl:p-0 xl:grid-cols-3 xl:grid-rows-2  lg:grid-cols-2 lg:grid-rows-3 md:grid-cols-2 md:px-10 lg:px-20 max-sm:grid-cols-1 max-sm:px-5 ">
        <div className="flex flex-col items-center justify-evenly  text-center ">
          <BsPaletteFill className=" text-6xl text-yellow-400" />
          <h1 className="text-3xl font-semibold">Graphic Design</h1>
          <p className="w-2/3">
            Experience using Photoshop, Illustrator to create branding, logos,
            flyers, business cards, posters, web design.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly  text-center">
          <HiDesktopComputer className=" text-6xl text-yellow-400" />
          <h1 className="text-3xl font-semibold">Web Development</h1>
          <p>
            Work to create functional and user-friendly websites and web
            applications that meet the specific needs of their clients or users:
            Creation of SPA, CMS, SEO Optimization.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly  text-center">
          <FaReact className=" text-6xl text-yellow-400" />
          <h1 className="text-3xl font-semibold">Library & Frameworks</h1>
          <p>
            Experience using different Javascript frameworks, such as Angular,
            ReactJS Lib, API Rest integration, everything to create efficient
            and effective web solutions.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly  text-center">
          <HiOutlineDocumentReport className=" text-6xl text-yellow-400" />
          <h1 className="text-3xl font-semibold">Derivables</h1>
          <p>
            Receive documentation of every step: Project plan, website design,
            front-end development, back-end development, content Creation,
            quality assurance, launch plan, manuals even training.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly  text-center">
          <GoGraph className=" text-6xl text-yellow-400" />
          <h1 className="text-3xl font-semibold">Business Analytics</h1>
          <p>
            Use of data to make informed decisions and optimize the website's
            performance, such as Google Analytics, User Testing, and in page
            graphics to represent revenue and expenses.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly  text-center">
          <TbSpeakerphone className=" text-6xl  text-yellow-400" />
          <h1 className="text-3xl font-semibold">SEO Marketing</h1>
          <p>
            Optimizing a website to improve its visibility and ranking in search
            engine results pages (SERPs) for specific keywords and phrases. The
            ultimate goal of SEO marketing is to drive more traffic to a website
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
