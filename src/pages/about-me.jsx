import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" h-[100vh]  flex flex-col items-center justify-center "
    >
      <div className="text-center ">
        <span className="bg-yellow-400  p-1">About Me</span>
        <h2 className="text-5xl font-semibold mt-5">Know Me More</h2>
      </div>
      <div className=" h-3/5 flex flex-col justify-evenly items-center ">
        <div className="flex w-full ">
          <div className="w-2/3   ">
            <h1 className="text-4xl web-font">
              Hello, I'm{" "}
              <span className="font-bold border-b-2 border-yellow-400 web-font  underline-offset-8 ">
                Germán G.
              </span>
            </h1>
            <p className="text-2xl w-full mt-4 web-font break-all ">
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
          <div className="flex flex-col justify-center items-center  w-1/3">
            <div className="relative mb-2 ">
              <div className="  redondo  bg-yellow-300"></div>
              <h1 className="redondo-num">15</h1>
            </div>
            <h1 className="text-3xl mt-4">
              Months of <span className="font-semibold">Experiance</span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full font-bold">
          <div>
            <span className="text-stone-700">Name:</span>
            <h2 className="text-2xl font-bold">Germán González</h2>
          </div>
          <div className="flex flex-col">
            <span className="text-stone-700">Certificates:</span>
            <a
              href="https://platzi.com/p/glezrdg"
              className="text-2xl font-bold hover:scale-105 transition-all"
            >
              Platzi.com/p/glezrdg
            </a>
          </div>
          <div>
            <span className="text-stone-700">E-mail:</span>
            <h2 className="text-2xl font-bold select-text">
              Glezrdg@gmail.com
            </h2>
          </div>
          <div>
            <span className="text-stone-700">From:</span>
            <h2 className="text-2xl font-bold">Santo Domingo, DR</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
