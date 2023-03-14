import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" h-[100vh] lg:h-[100vh] md:h-[120vh] max-sm:h-full    flex flex-col items-center justify-center  "
    >
      <div className="text-center   xl:h-[10vh] ">
        <span className="bg-yellow-400  p-1">About Me</span>
        <h2 className="text-5xl max-sm:mt-2  font-semibold xl:mt-5 lg:mt-2 md:mt-0 ">
          Know Me More
        </h2>
      </div>
      <div className=" xl:h-3/5  h-4/5 flex flex-col justify-evenly items-center ">
        <div className="flex xl:flex-row xl:w-full lg:flex-col lg:justify-evenly lg:items-center md:flex-col md:justify-evenly md:items-center max-sm:flex-col max-sm:items-center ">
          <div className="xl:w-2/3 xl:m-0 lg:w-3/5   md:w-[80vw] max-sm:w-full  max-sm:text-center max-sm:px-4">
            <h1 className="text-4xl web-font">
              Hello, I'm{" "}
              <span className="font-bold border-b-2 border-yellow-400 web-font  underline-offset-8 ">
                Germán G.
              </span>
            </h1>
            <p className="xl:text-2xl lg:text-xl md:text-xl w-full mt-4 web-font break-all ">
              <span>
                I am a front-end developer specialized in ReactJS. I enjoy
                creating clean, responsive, and user-friendly interfaces, and I
                usually adapt to new technologies. My strength lies in my focus
                and ability to handle multiple tasks at once.
              </span>
              <br />
              <br />
              <span>
                Since I was a child, computers have been my environment. I
                completed an IT technician program and then began studying and
                getting certified online via Platzi. I enjoy design, logical
                thinking, and breaking away from monotony.
              </span>
              {/* <span>
                Soy un desarrollador front-end especializado en ReactJS.
                Disfruto en la creación de interfaces limpias, responsivas y
                fáciles de usar, suelo adaptarme a las nuevas tecnologias y mi
                fuerte es el enfoque y la habilidad para manejar varias tareas a
                la vez.
              </span>
              <br />
              <br />
              <span>
                Desde pequeño mi ambiente son las computadoras, termine un
                técnico de IT, luego comencé a estudiar y certificarme en línea
                vía Platzi, me gusta el diseño, el pensamiento lógico y salir de
                la monotonía.
              </span> */}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  w-1/3 max-sm:w-1/2">
            <div className="relative xl:mb-2 xl:h-auto lg:mb-0 lg:h-[12vh] md:h-[12vh] max-sm:h-[12vh] ">
              <div className="  redondo  bg-yellow-300"></div>
              <h1 className="redondo-num ">15</h1>
            </div>
            <h1 className="xl:text-3xl lg:text-xl max-sm:text-xl max-sm:text-center max-sm:w-full   xl:mt-4 lg:mt-0">
              Months of <span className="font-semibold">Experience</span>
            </h1>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 xl:place-items-start lg:grid-cols-2 lg:gap-3 lg:place-items-center md:grid-cols-2 md:gap-3 md:place-items-center w-full font-bold max-sm:grid-cols-2 max-sm:px-5">
          <div>
            <span className="text-stone-700">Name:</span>
            <h2 className="text-2xl max-sm:text-lg font-bold">
              Germán González
            </h2>
          </div>
          <div className="flex flex-col">
            <span className="text-stone-700">Certificates:</span>
            <a
              href="https://platzi.com/p/glezrdg"
              className="text-2xl max-sm:text-lg font-bold hover:scale-105 transition-all"
            >
              Platzi.com/p/glezrdg
            </a>
          </div>
          <div>
            <span className="text-stone-700">E-mail:</span>
            <h2 className="text-2xl max-sm:text-lg font-bold select-text">
              Glezrdg@gmail.com
            </h2>
          </div>
          <div>
            <span className="text-stone-700">From:</span>
            <h2 className="text-2xl max-sm:text-lg font-bold">
              Santo Domingo, DR
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
