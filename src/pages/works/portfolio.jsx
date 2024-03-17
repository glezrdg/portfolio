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
      className="xl:h-[100vh] md:h-[140vh] max-sm:h-[190vh] flex flex-col items-center justify-evenly relative "
    >
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw]  md:hidden lg:hidden max-sm:hidden xl:flex"></div>

      <div className="text-center ">
        <span className="bg-yellow-400  p-1">Portafolio</span>
        <h1 className="text-5xl max-sm:text-4xl font-semibold mt-5">
          Algunos de los proyectos que hemos trabajado
        </h1>
      </div>

      <div className=" w-full max-sm:grid-cols-1  max-sm:w-4/5 xl:h-1/2 lg:h-1/2  md:h-[80vh] grid xl:grid-cols-3 xl:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3  gap-10  place-items-center   px-5 "></div>
    </section>
  );
};

export default Portfolio;
