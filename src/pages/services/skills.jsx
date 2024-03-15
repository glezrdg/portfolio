import React from "react";
import "./skills.css";

import { BsPaletteFill } from "react-icons/bs";
import { HiDesktopComputer } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { TbSpeakerphone } from "react-icons/tb";
import { MdOutlineConstruction } from "react-icons/md";
const Skills = () => {
  return (
    <section
      id="skills"
      className="relative xl:h-[100vh] md:h-[130vh] w-full flex flex-col items-center  background2 max-sm:h-[200vh]  "
    >
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] background2  lg:hidden max-sm:hidden md:hidden xl:flex"></div>

      <div className="text-center h-1/3 flex flex-col items-center justify-center max-lg:h-[25vh] ">
        <span className="bg-[#7f2627] text-zinc-200 p-2">
          ¿Qué sabemos hacer?
        </span>
        <h1 className="text-5xl max-sm:text-4xl font-semibold mt-5">
          Los servicios que brindamos
        </h1>
      </div>
      <div className="h-2/3 max-sm:h-4/5 w-full grid gap-9  xl:p-0 xl:grid-cols-3 xl:grid-rows-2  lg:grid-cols-2 lg:grid-rows-3 md:grid-cols-2 md:px-10 lg:px-20 max-sm:grid-cols-1 max-sm:px-5 ">
        <div className="flex flex-col items-center justify-evenly  text-center ">
          <MdOutlineConstruction className=" text-6xl text-[#7f2627]" />
          <h1 className="text-3xl font-semibold">Diseños</h1>
          <p className="w-2/3">
            Transformamos tus ideas en realidad. Nuestros expertos en diseño
            crean planos innovadores y funcionales que dan vida a tus proyectos,
            ya sean hogares, oficinas o espacios comerciales.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly  text-center">
          <MdOutlineConstruction className=" text-6xl text-[#7f2627]" />
          <h1 className="text-3xl font-semibold">Construcción</h1>
          <p>
            Construimos tus sueños block a block. Desde la excavación
            hasta los últimos detalles, nos encargamos de materializar tu visión
            con calidad y precisión, asegurando resultados duraderos y
            satisfactorios.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly  text-center">
          <FaReact className=" text-6xl text-[#7f2627]" />
          <h1 className="text-3xl font-semibold">Remodelación</h1>
          <p>
            Renovamos espacios para transformar tu entorno. Con habilidad y
            creatividad, revitalizamos hogares y negocios, mejorando su
            funcionalidad y estética para adaptarse a tus necesidades y gustos.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly  text-center">
          <HiOutlineDocumentReport className=" text-6xl text-[#7f2627]" />
          <h1 className="text-3xl font-semibold">Proyectos Arquitectónicos</h1>
          <p>
            Diseñamos el futuro. Nuestros proyectos arquitectónicos combinan
            innovación y estética para crear espacios que inspiran y funcionan a
            la perfección, desde residencias hasta complejos comerciales.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly  text-center">
          <GoGraph className=" text-6xl text-[#7f2627]" />
          <h1 className="text-3xl font-semibold">Supervisión</h1>
          <p>
            Tu tranquilidad, nuestra prioridad. Con un equipo dedicado de
            supervisores, garantizamos que cada etapa de tu proyecto se lleve a
            cabo con profesionalismo y eficiencia, asegurando resultados
            impecables en todo momento.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
